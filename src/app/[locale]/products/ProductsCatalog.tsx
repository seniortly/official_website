"use client";

import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";
import { useMemo, useState } from "react";
import { ContactMailForm, SiteHeader } from "../SiteHeader";

type CatalogProps = {
  locale: Locale;
  nav: { key: string; href: string }[];
  labels: {
    title: string;
    subtitle: string;
    highlightsTitle: string;
    highlights: string[];
    networkTitle: string;
    networkDesc: string;
    contactTitle: string;
    contactAddress: string;
    contactPhone: string;
    contactFax: string;
    contactEmail: string;
    contactWebsite: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
};

type TabItem = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  introImage: string;
  introTitle: string;
  introDesc: string;
};

const specRows = [
  ["GBU-12", "12 / 300", "50/60", "3.0", "12/15", "21"],
  ["GBU-14", "14 / 350", "50/60", "3.2", "12/15", "24"],
  ["GBU-16", "16 / 400", "50/60", "3.4", "12/15", "28"],
  ["GBU-18", "18 / 450", "50/60", "3.8", "15/20", "32"],
  ["GBU-24", "24 / 600", "50/60", "4.8", "15/20", "36"],
];

const subTableRowsA = [
  ["VGBU-14", "350mm", "3.2mm", "24"],
  ["VGBU-16", "400mm", "3.6mm", "28"],
  ["VGBU-18", "450mm", "3.8mm", "32"],
];

const subTableRowsB = [
  ["UGBU-14", "350mm", "3.2mm", "24"],
  ["UGBU-16", "400mm", "3.6mm", "28"],
  ["UGBU-18", "450mm", "3.8mm", "32"],
];

export function ProductsCatalog({ locale, nav, labels }: CatalogProps) {
  const tabs: TabItem[] = useMemo(
    () => [
      {
        id: "medium-blade",
        label: locale === "zh" ? "中径锯片" : "Medium Blade",
        title: locale === "zh" ? "中径锯片系列 (Medium Saw Blade)" : "Medium Saw Blade Series",
        subtitle: "ULTRA ARIX SAW BLADES - UNIVERSAL FOR STONE CUTTING",
        introImage: "/image/huagangyan.png",
        introTitle: locale === "zh" ? "有序有齿排列锯片" : "Arix Granite Blade",
        introDesc:
          locale === "zh"
            ? "采用最新有序排列工艺。软胎体搭配高品质金刚石，适用于硬花岗岩、大理石、天然石英石等。"
            : "Latest ordered-segment process with soft bond for granite, marble and engineered stone cutting.",
      },
      {
        id: "small-blade",
        label: locale === "zh" ? "小锯片系列" : "Small Blades",
        title: locale === "zh" ? "小锯片系列" : "Small Blade Series",
        subtitle: locale === "zh" ? "用于精细切割场景" : "For precision cutting scenarios",
        introImage: "/image/yanban.png",
        introTitle: locale === "zh" ? "薄型小锯片" : "Thin Small Blade",
        introDesc: locale === "zh" ? "适用于瓷砖、岩板及超薄材料精细加工。" : "For ceramic tile and sintered stone precision processing.",
      },
      {
        id: "wire-saw",
        label: locale === "zh" ? "金刚石绳锯" : "Diamond Wire Saw",
        title: locale === "zh" ? "金刚石绳锯" : "Diamond Wire Saw",
        subtitle: "MINING, PROFILING AND BLOCK CUTTING SOLUTIONS",
        introImage: "/image/concrete-tools.svg",
        introTitle: locale === "zh" ? "多场景绳锯方案" : "Multi-Scene Wire Solutions",
        introDesc: locale === "zh" ? "适用于矿山开采、异形加工、荒料整形与钢筋混凝土切割。" : "For mining, profiling, block trimming and reinforced concrete cutting.",
      },
      {
        id: "calibrating-wheel",
        label: locale === "zh" ? "定厚轮系列" : "Calibrating Wheels",
        title: locale === "zh" ? "定厚轮系列" : "Calibrating Wheel Series",
        subtitle: locale === "zh" ? "稳定修整与均匀去料" : "Stable calibrating and stock removal",
        introImage: "/image/xiantiaolun.png",
        introTitle: locale === "zh" ? "高效定厚轮" : "High-Efficiency Calibrating Wheel",
        introDesc: locale === "zh" ? "适用于石材板材连续定厚与表面预处理。" : "For slab calibrating and surface pre-processing.",
      },
      {
        id: "large-segment",
        label: locale === "zh" ? "大锯片刀头" : "Large Blade Segments",
        title: locale === "zh" ? "大锯片刀头" : "Large Blade Segments",
        subtitle: locale === "zh" ? "高寿命切割刀头方案" : "Long-life segment solution",
        introImage: "/image/paixvjvpian.png",
        introTitle: locale === "zh" ? "花岗岩刀头" : "Granite Segments",
        introDesc: locale === "zh" ? "面向大型锯切设备，兼顾锋利度与寿命稳定性。" : "For large saw machines with balanced sharpness and service life.",
      },
    ],
    [locale],
  );

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">
      <SiteHeader locale={locale} nav={nav} page="products" />

      <header className="mx-auto max-w-7xl px-6 pb-10 pt-28 text-center">
        <h1 className="text-4xl font-black text-white md:text-6xl">{labels.title}</h1>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-400">{labels.subtitle}</p>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-10 flex gap-8 overflow-x-auto border-b border-white/10 pb-3">
          {tabs.map((tab) => {
            const active = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap border-b-2 pb-2 text-sm font-bold transition ${
                  active ? "border-blue-400 text-blue-300" : "border-transparent text-slate-500 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">{current.title}</h2>
          <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">{current.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <aside className="space-y-5 lg:col-span-1">
            <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
              <img src={publicPath(current.introImage)} alt="" className="h-40 w-full rounded object-cover" />
              <h3 className="mt-4 text-lg font-bold text-white">{current.introTitle}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{current.introDesc}</p>
            </div>
            <div className="rounded-xl border border-blue-500/60 bg-[rgba(10,22,56,0.66)] p-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300">
                {locale === "zh" ? "核心优势" : "Key Advantages"}
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>- {locale === "zh" ? "锋利度极好" : "Excellent sharpness"}</li>
                <li>- {locale === "zh" ? "切削阻力小" : "Low cutting resistance"}</li>
                <li>- {locale === "zh" ? "寿命长且稳定" : "Stable long service life"}</li>
              </ul>
            </div>
          </aside>

          <div className="space-y-6 lg:col-span-3">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
                <span className="font-bold text-white">Arix Granite Blade Spec.</span>
                <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-[10px] uppercase tracking-widest text-slate-400">
                    <tr>
                      <th className="p-4">产品编号</th>
                      <th className="p-4">外径(INCH/MM)</th>
                      <th className="p-4">内孔(MM)</th>
                      <th className="p-4">锯片厚度(MM)</th>
                      <th className="p-4">锯片高度(MM)</th>
                      <th className="p-4">齿数</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {specRows.map((row) => (
                      <tr key={row[0]} className="border-t border-white/5">
                        {row.map((cell) => (
                          <td key={cell} className="p-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <SpecMiniTable
                title={locale === "zh" ? "V型 / 箭头型排列" : "V-Type / Arrow Segment"}
                subtitle={locale === "zh" ? "适用于特殊高硬度石材切割" : "For high-hardness stone cutting"}
                rows={subTableRowsA}
              />
              <SpecMiniTable
                title={locale === "zh" ? "深U型 / 消音基体" : "Deep U / Silent Core"}
                subtitle={locale === "zh" ? "有效减小切削振动与噪音" : "Reduce vibration and cutting noise"}
                rows={subTableRowsB}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="mx-auto grid max-w-7xl gap-8 px-6 pb-12 pt-2 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-6">
          <h2 className="text-2xl font-bold text-blue-300">{labels.highlightsTitle}</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            {labels.highlights.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
        <div id="network" className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-6">
          <h2 className="text-2xl font-bold text-blue-300">{labels.networkTitle}</h2>
          <p className="mt-4 leading-7 text-slate-300">{labels.networkDesc}</p>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-6">
          <h2 className="text-2xl font-bold text-blue-300">{labels.contactTitle}</h2>
          <div className="mt-4 space-y-2 text-slate-300">
            <p>{labels.contactAddress}</p>
            <p>{labels.contactPhone}</p>
            <p>{labels.contactFax}</p>
            <p>{labels.contactEmail}</p>
            <p>{labels.contactWebsite}</p>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-5">
          <ContactMailForm
            copy={{
              formName: labels.formName,
              formEmail: labels.formEmail,
              formMessage: labels.formMessage,
              formSubmit: labels.formSubmit,
            }}
          />
        </div>
      </section>

      <footer className="border-t border-white/5 bg-slate-950 py-10 text-center text-xs tracking-widest text-slate-500">
        <p>© 2026 Xiamen Taiyang Diamond Products Co., Ltd. TECHNICAL SPECIFICATIONS</p>
      </footer>
    </main>
  );
}

function SpecMiniTable({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle: string;
  rows: string[][];
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-5">
      <h4 className="text-lg font-bold text-white">{title}</h4>
      <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
      <table className="mt-4 w-full text-left text-[11px]">
        <thead className="text-blue-300">
          <tr>
            <th className="py-2">Item No.</th>
            <th className="py-2">Diameter</th>
            <th className="py-2">Thickness</th>
            <th className="py-2">Teeth</th>
          </tr>
        </thead>
        <tbody className="text-slate-300">
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-white/5">
              {row.map((cell) => (
                <td key={cell} className="py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
