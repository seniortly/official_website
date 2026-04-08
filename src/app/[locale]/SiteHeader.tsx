"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FormEvent } from "react";
import type { Locale } from "@/lib/site-content";

type NavItem = { key: string; href: string };

type Props = {
  locale: Locale;
  nav: NavItem[];
  page?: "home" | "about" | "products";
};

export function SiteHeader({ locale, nav, page = "home" }: Props) {
  const pathname = usePathname() ?? `/${locale}`;
  const aboutLabel = nav[1]?.key ?? "ABOUT US";
  const productsLabel = nav[2]?.key ?? "PRODUCTS";
  const technologyLabel = nav[3]?.key ?? "TECHNOLOGY";
  const networkLabel = nav[4]?.key ?? "GLOBAL NETWORK";
  const altLocale: Locale = locale === "zh" ? "en" : "zh";
  const altLabel = altLocale === "zh" ? "中文" : "English";
  const altPath = pathname.replace(/^\/(zh|en)/, `/${altLocale}`);

  const homeNavItems = [
    { key: nav[0]?.key ?? "HOME", href: `/${locale}` },
    { key: aboutLabel, href: `/${locale}/about` },
    { key: productsLabel, href: `/${locale}/products` },
    { key: technologyLabel, href: `/${locale}/products#technology` },
    { key: networkLabel, href: `/${locale}/products#network` },
  ];
  const subNavItems = [
    { key: nav[0]?.key ?? "HOME", href: `/${locale}` },
    { key: productsLabel, href: `/${locale}/products` },
    { key: aboutLabel, href: `/${locale}/about` },
  ];
  const navItems = page === "home" ? homeNavItems : subNavItems;
  const brandTitle =
    page === "about"
      ? "TY ABOUT US"
      : page === "products"
        ? "TY TECHNICAL CENTER"
        : locale === "zh"
          ? "厦门泰扬金刚石"
          : "Taiyang Diamond";

  return (
    <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/10 bg-[rgba(2,8,30,0.78)] backdrop-blur-md">
      <div className="mx-auto flex h-[80px] w-full max-w-7xl items-center gap-4 px-4 sm:px-6">
        <a href={`/${locale}`} className="flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-black italic text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]">
            TY
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-white">{brandTitle}</p>
            {page === "home" ? (
              <p className="text-[10px] uppercase tracking-[0.16em] text-blue-300">Taiyang Diamond Products</p>
            ) : null}
          </div>
        </a>

        <nav className="ml-auto hidden items-center gap-10 py-2 text-sm font-semibold uppercase tracking-widest text-slate-400 lg:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href.includes("#technology") && pathname.endsWith("/products")) ||
              (item.href.includes("#network") && pathname.endsWith("/products"));
            return (
              <Link
                key={item.key + item.href}
                href={item.href}
                className={`whitespace-nowrap border-b-2 pb-1 transition-colors ${
                  locale === "zh" ? "normal-case tracking-wide text-base" : "text-base"
                } ${
                  isActive
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-slate-400 hover:text-blue-400"
                }`}
              >
                {item.key}
              </Link>
            );
          })}
        </nav>

        <div className="ml-10 flex shrink-0 items-center gap-2">
          {page === "home" ? (
            <Link
              href={`/${locale}/products#contact`}
              className="rounded-md bg-blue-600 px-6 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500"
            >
              {locale === "zh" ? "联系" : "Contact"}
            </Link>
          ) : null}
          <Link
            href={altPath}
            className="rounded-md border border-cyan-200/60 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-cyan-50 transition-all hover:bg-white/15"
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
      className="space-y-4 rounded-xl border border-white/10 bg-slate-900/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      noValidate
    >
      <input
        name="name"
        className="w-full rounded border border-white/20 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-blue-500/30 focus:ring-2"
        placeholder={copy.formName}
        autoComplete="name"
      />
      <input
        name="email"
        type="email"
        className="w-full rounded border border-white/20 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-blue-500/30 focus:ring-2"
        placeholder={copy.formEmail}
        autoComplete="email"
      />
      <textarea
        name="message"
        className="h-28 w-full rounded border border-white/20 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none ring-blue-500/30 focus:ring-2"
        placeholder={copy.formMessage}
      />
      <button
        type="submit"
        className="w-full rounded bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-500 md:w-auto"
      >
        {copy.formSubmit}
      </button>
    </form>
  );
}
