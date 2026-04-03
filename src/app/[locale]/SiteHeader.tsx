"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/site-content";

type NavItem = { key: string; href: string };

type Props = {
  locale: Locale;
  nav: NavItem[];
  altLocale: Locale;
  altLabel: string;
};

const sectionIds = ["home", "about", "products", "technology", "network", "contact"];

export function SiteHeader({ locale, nav, altLocale, altLabel }: Props) {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.55] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-cyan-400/20 bg-gradient-to-r from-[#0b7f92] via-[#085a6a] to-[#061a2e] shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
      <div className="relative mx-auto flex h-[76px] w-full max-w-6xl items-center gap-3 px-4 sm:gap-5 sm:px-6 lg:max-w-[68rem] lg:gap-8 lg:px-8">
        <div
          className="relative flex shrink-0 items-center bg-gradient-to-br from-white/20 to-white/5 pl-3 pr-8 sm:pl-4 sm:pr-10"
          style={{
            clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/10 to-transparent opacity-90"
            style={{ clipPath: "ellipse(55% 120% at 100% 50%)" }}
            aria-hidden
          />
          <a
            href="#home"
            className="relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white/95 bg-gradient-to-b from-white/25 to-white/5 text-sm font-bold tracking-tight text-white shadow-[0_0_20px_rgba(103,232,249,0.45),inset_0_1px_0_rgba(255,255,255,0.35)] sm:h-12 sm:w-12"
          >
            TY
          </a>
        </div>

        <nav className="flex min-w-0 flex-1 items-center justify-center gap-x-2 overflow-x-auto py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:gap-x-3 sm:text-[11px] sm:tracking-[0.14em] md:gap-x-5 md:text-[12px] md:tracking-[0.18em] lg:gap-x-6">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={item.key + item.href}
                href={item.href}
                className={`whitespace-nowrap transition hover:text-cyan-100 ${
                  locale === "zh" ? "normal-case tracking-normal md:text-sm" : ""
                } ${isActive ? "border-b-2 border-white pb-0.5 text-white" : "border-b-2 border-transparent pb-0.5"}`}
              >
                {item.key}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center">
          <Link
            href={`/${altLocale}`}
            className="shrink-0 rounded-md border border-cyan-200/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-50 transition hover:bg-white/15 sm:px-2.5 sm:text-[11px] md:px-3 md:text-xs"
          >
            {altLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}

type FormCopy = {
  formName: string;
  formEmail: string;
  formMessage: string;
  formSubmit: string;
};

export function ContactMailForm({ copy }: { copy: FormCopy }) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const body = encodeURIComponent(
      ["Name / 姓名: " + name, "Email: " + email, "", message].join("\n"),
    );
    const subject = encodeURIComponent("Website inquiry / 官网询盘");
    window.location.href = `mailto:sales@xmtaiying.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={submit}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      noValidate
    >
      <input
        name="name"
        className="w-full rounded border border-slate-300 px-3 py-2 outline-none ring-brand-500/30 focus:ring-2"
        placeholder={copy.formName}
        autoComplete="name"
      />
      <input
        name="email"
        type="email"
        className="w-full rounded border border-slate-300 px-3 py-2 outline-none ring-brand-500/30 focus:ring-2"
        placeholder={copy.formEmail}
        autoComplete="email"
      />
      <textarea
        name="message"
        className="h-28 w-full rounded border border-slate-300 px-3 py-2 outline-none ring-brand-500/30 focus:ring-2"
        placeholder={copy.formMessage}
      />
      <button
        type="submit"
        className="w-full rounded bg-brand-600 px-4 py-2.5 font-semibold text-white transition hover:bg-brand-700 md:w-auto"
      >
        {copy.formSubmit}
      </button>
    </form>
  );
}
