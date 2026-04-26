"use client";

import { publicPath } from "@/lib/base-path";
import type { Locale } from "@/lib/site-content";
import { useEffect, useMemo, useRef, useState } from "react";
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
  zoomImage?: string;
  introTitle: string;
  introDesc: string;
};

const specRows = [
  ["AGBLU-14", "14", "350", "50/60", "40", "3.2", "15/20", "24"],
  ["AGBLU-16", "16", "400", "50/60", "40", "3.6", "15/20", "28"],
  ["AGBLU-18", "18", "450", "50/60", "40", "3.8", "15/20", "32"],
];

const smallBladeRows = [
  ["SSB-T-040", "4", "105", "2.2", "10"],
  ["SSB-T-045", "4.5", "115", "2.2", "10"],
  ["SSB-T-050", "5", "125", "2.2", "10"],
  ["SSB-T-060", "6", "150", "2.4", "10"],
  ["SSB-T-070", "7", "180", "2.6", "10"],
  ["SSB-T-090", "9", "230", "2.8", "10"],
];

const smallBladeGuRows = [
  ["SSB-GU-045", "4.5", "115", "2.2", "8"],
  ["SSB-GU-050", "5", "125", "2.2", "8"],
  ["SSB-GU-070", "7", "180", "2.6", "8"],
  ["SSB-GU-090", "9", "230", "2.8", "8"],
];

const smallBladeTsRows = [
  ["SSB-TS-045", "4.5", "115", "2.2", "8"],
  ["SSB-TS-050", "5", "125", "2.2", "8"],
  ["SSB-TS-070", "7", "180", "2.6", "8"],
  ["SSB-TS-090", "9", "230", "2.8", "8"],
];

const arrowSpecRows = [
  ["AGBLU-14", "14", "350", "50/60", "40", "3.2", "15/20", "24"],
  ["AGBLU-16", "16", "400", "50/60", "40", "3.6", "15/20", "28"],
  ["AGBLU-18", "18", "450", "50/60", "40", "3.8", "15/20", "32"],
];

const orderedSpecRows = [
  ["GBLU-12", "12", "300", "50/60", "40", "3.0", "12/15", "21"],
  ["GBLU-14", "14", "350", "50/60", "40", "3.0/3.2", "12/15/20", "24"],
  ["GBLU-16", "16", "400", "50/60", "40", "3.4/3.6", "12/15/20", "28"],
  ["GBLU-18", "18", "450", "50/60", "40", "3.8", "15/20", "32"],
  ["GBLU-20", "20", "500", "50/60", "40", "4.2", "15/20", "30/36"],
  ["GBLU-24", "24", "600", "50/60", "40", "4.8", "15/20", "33/40"],
  ["GBLU-26", "26", "650", "50/60", "40", "5.0", "15/20", "40/46"],
  ["GBLU-28", "28", "700", "50/60", "40", "5.2", "15/20", "42/50"],
  ["GBLU-32", "32", "800", "50/60", "40", "5.8", "15/20", "46/57"],
];

const deepUSpecRows = [
  ["UGBLU-14", "14", "350", "50/60", "44.3/39.7", "3.2", "25", "24"],
  ["UGBLU-16", "16", "400", "50/60", "44.3/39.7", "3.8", "25", "28"],
  ["UGBLU-18", "18", "450", "50/60", "44.3/39.7", "4.0", "25", "32"],
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
        introImage: "/image/第5页-38.PNG",
        zoomImage: "/image/第5页-40.PNG",
        introTitle: locale === "zh" ? "V型有序排列花岗锯片规格表" : "Arix Granite Blade with V Segment Spec.",
        introDesc:
          locale === "zh"
            ? "适合切割：花岗石、人造石英石、天然石英石"
            : "Great for granite, quartz and quartzite",
      },
      {
        id: "small-blade",
        label: locale === "zh" ? "小锯片" : "Small Saw Blade",
        title: locale === "zh" ? "小锯片系列" : "Small Blade Series",
        subtitle: locale === "zh" ? "用于精细切割场景" : "For precision cutting scenarios",
        introImage: "/image/第8页-63.PNG",
        introTitle: locale === "zh" ? "薄型小锯片" : "Thin Small Blade",
        introDesc: locale === "zh" ? "适用于瓷砖、岩板及超薄材料精细加工。" : "For ceramic tile and sintered stone precision processing.",
      },
      {
        id: "big-blade",
        label: locale === "zh" ? "大锯片" : "Big Saw Blade",
        title: locale === "zh" ? "大锯片系列" : "Big Saw Blade Series",
        subtitle: locale === "zh" ? "用于高强度连续切割" : "For high-load continuous cutting",
        introImage: "/image/paixvjvpian.png",
        introTitle: locale === "zh" ? "高效大锯片" : "High-Efficiency Big Saw Blade",
        introDesc: locale === "zh" ? "适用于大规格石材板材的稳定切割与批量加工。" : "For stable cutting and mass processing of large-size stone slabs.",
      },
      {
        id: "wire-saw",
        label: locale === "zh" ? "绳锯" : "Diamond Wire Saw",
        title: locale === "zh" ? "金刚石绳锯" : "Diamond Wire Saw",
        subtitle: "MINING, PROFILING AND BLOCK CUTTING SOLUTIONS",
        introImage: "/image/concrete-tools.svg",
        introTitle: locale === "zh" ? "多场景绳锯方案" : "Multi-Scene Wire Solutions",
        introDesc: locale === "zh" ? "适用于矿山开采、异形加工、荒料整形与钢筋混凝土切割。" : "For mining, profiling, block trimming and reinforced concrete cutting.",
      },
      {
        id: "calibrating-wheel",
        label: locale === "zh" ? "定厚轮" : "Calibrating Wheel",
        title: locale === "zh" ? "定厚轮系列" : "Calibrating Wheel Series",
        subtitle: locale === "zh" ? "稳定修整与均匀去料" : "Stable calibrating and stock removal",
        introImage: "/image/xiantiaolun.png",
        introTitle: locale === "zh" ? "高效定厚轮" : "High-Efficiency Calibrating Wheel",
        introDesc: locale === "zh" ? "适用于石材板材连续定厚与表面预处理。" : "For slab calibrating and surface pre-processing.",
      },
      {
        id: "profile-wheel",
        label: locale === "zh" ? "线条轮" : "Profile Wheel",
        title: locale === "zh" ? "线条轮系列" : "Profile Wheel Series",
        subtitle: locale === "zh" ? "石材线条与造型加工" : "For stone edge profiling",
        introImage: "/image/xiantiaolun.png",
        introTitle: locale === "zh" ? "线条轮工具" : "Profile Wheel Tooling",
        introDesc: locale === "zh" ? "适配多种异形边缘加工，确保轮廓成型稳定。" : "Supports multiple edge profiles with stable shaping performance.",
      },
      {
        id: "electroplated-profile-wheel",
        label: locale === "zh" ? "电镀线条轮" : "Electroplated Profile Wheel",
        title: locale === "zh" ? "电镀线条轮" : "Electroplated Profile Wheel",
        subtitle: locale === "zh" ? "锋利切削与快速成型" : "Sharp cutting and rapid shaping",
        introImage: "/image/xiantiaolun.png",
        introTitle: locale === "zh" ? "电镀线条轮" : "Electroplated Profile Wheel",
        introDesc: locale === "zh" ? "适用于高精度轮廓加工与复杂曲线成型。" : "Suitable for precision profiling and complex curve shaping.",
      },
      {
        id: "router-bit",
        label: locale === "zh" ? "小金刚（锣边轮）" : "Router Bit",
        title: locale === "zh" ? "小金刚（锣边轮）" : "Router Bit",
        subtitle: locale === "zh" ? "边缘修整与倒角加工" : "For edge trimming and chamfering",
        introImage: "/image/xiantiaolun.png",
        introTitle: locale === "zh" ? "锣边加工工具" : "Router Edge Tooling",
        introDesc: locale === "zh" ? "用于石材边缘精细修整和稳定去料。" : "Used for fine stone edge trimming with stable stock removal.",
      },
      {
        id: "cnc-tools",
        label: locale === "zh" ? "CNC工具" : "CNC Tools",
        title: locale === "zh" ? "CNC工具" : "CNC Tools",
        subtitle: locale === "zh" ? "数控加工配套工具" : "Tooling for CNC processing",
        introImage: "/image/xiantiaolun.png",
        introTitle: locale === "zh" ? "CNC石材工具" : "CNC Stone Tooling",
        introDesc: locale === "zh" ? "覆盖开槽、成型、修边等CNC加工场景。" : "Covers grooving, shaping and edging scenarios on CNC machines.",
      },
      {
        id: "grinding-block",
        label: locale === "zh" ? "磨块" : "Grinding Block",
        title: locale === "zh" ? "磨块系列" : "Grinding Block Series",
        subtitle: locale === "zh" ? "高效粗磨与找平" : "For rough grinding and leveling",
        introImage: "/image/yanban.png",
        introTitle: locale === "zh" ? "磨块" : "Grinding Block",
        introDesc: locale === "zh" ? "适用于石材表面粗磨和基础找平处理。" : "Designed for rough grinding and base leveling of stone surfaces.",
      },
      {
        id: "cup-wheel",
        label: locale === "zh" ? "磨皿" : "Cup Wheel",
        title: locale === "zh" ? "磨皿系列" : "Cup Wheel Series",
        subtitle: locale === "zh" ? "高效去料与整平" : "For efficient stock removal",
        introImage: "/image/yanban.png",
        introTitle: locale === "zh" ? "磨皿" : "Cup Wheel",
        introDesc: locale === "zh" ? "适用于石材、混凝土等材料的快速研磨。" : "Suitable for rapid grinding on stone and concrete materials.",
      },
      {
        id: "grinding-disc",
        label: locale === "zh" ? "磨盘" : "Grinding Disc",
        title: locale === "zh" ? "磨盘系列" : "Grinding Disc Series",
        subtitle: locale === "zh" ? "稳定研磨与表面处理" : "For stable surface grinding",
        introImage: "/image/yanban.png",
        introTitle: locale === "zh" ? "磨盘" : "Grinding Disc",
        introDesc: locale === "zh" ? "适配多种工况，实现稳定表面处理效果。" : "Adapts to multiple working conditions for stable surface finishing.",
      },
      {
        id: "polishing-pad",
        label: locale === "zh" ? "软磨片" : "Polishing Pad",
        title: locale === "zh" ? "软磨片系列" : "Polishing Pad Series",
        subtitle: locale === "zh" ? "细磨抛光与光泽提升" : "Fine polishing and gloss improvement",
        introImage: "/image/yanban.png",
        introTitle: locale === "zh" ? "软磨片" : "Polishing Pad",
        introDesc: locale === "zh" ? "适用于石材细磨抛光，提升表面光泽一致性。" : "For fine polishing and consistent gloss on stone surfaces.",
      },
      {
        id: "antiquing-brush",
        label: locale === "zh" ? "仿古刷" : "Antiquing Brush",
        title: locale === "zh" ? "仿古刷系列" : "Antiquing Brush Series",
        subtitle: locale === "zh" ? "仿古纹理表面效果" : "For antique texture finishing",
        introImage: "/image/yanban.png",
        introTitle: locale === "zh" ? "仿古刷" : "Antiquing Brush",
        introDesc: locale === "zh" ? "用于石材仿古面纹理加工与质感提升。" : "Used to create antique textures and enhance material appearance.",
      },
      {
        id: "backer-pad",
        label: locale === "zh" ? "接头" : "Backer Pad",
        title: locale === "zh" ? "接头" : "Backer Pad",
        subtitle: locale === "zh" ? "抛磨连接与支撑组件" : "Polishing connection component",
        introImage: "/image/yanban.png",
        introTitle: locale === "zh" ? "接头组件" : "Backer Pad Component",
        introDesc: locale === "zh" ? "用于磨片与设备之间的稳定连接与支撑。" : "Provides stable connection and support between pads and machines.",
      },
      {
        id: "bush-hammer",
        label: locale === "zh" ? "荔枝面磨头" : "Bush Hammer",
        title: locale === "zh" ? "荔枝面磨头" : "Bush Hammer",
        subtitle: locale === "zh" ? "荔枝面纹理加工" : "For bush-hammered texture",
        introImage: "/image/yanban.png",
        introTitle: locale === "zh" ? "荔枝面磨头" : "Bush Hammer Head",
        introDesc: locale === "zh" ? "用于地面防滑纹理及荔枝面表面处理。" : "For anti-slip surface texturing and bush-hammered finishing.",
      },
      {
        id: "core-drill",
        label: locale === "zh" ? "钻筒" : "Core Drill",
        title: locale === "zh" ? "钻筒系列" : "Core Drill Series",
        subtitle: locale === "zh" ? "石材钻孔解决方案" : "Drilling solution for stone",
        introImage: "/image/yanban.png",
        introTitle: locale === "zh" ? "钻筒" : "Core Drill",
        introDesc: locale === "zh" ? "适用于石材及硬质材料的高效钻孔加工。" : "For efficient drilling in stone and other hard materials.",
      },
      {
        id: "concrete-ring-saw-machine",
        label: locale === "zh" ? "环锯机" : "Concrete Ring Saw Machine",
        title: locale === "zh" ? "环锯机" : "Concrete Ring Saw Machine",
        subtitle: locale === "zh" ? "混凝土深切割设备" : "Deep cutting equipment for concrete",
        introImage: "/image/concrete-tools.svg",
        introTitle: locale === "zh" ? "环锯机设备" : "Concrete Ring Saw Machine",
        introDesc: locale === "zh" ? "适用于墙体、地坪等混凝土构件切割作业。" : "Suitable for cutting walls, floors and concrete structures.",
      },
      {
        id: "concrete-saw-blade",
        label: locale === "zh" ? "混凝土锯片" : "Concrete Saw Blade",
        title: locale === "zh" ? "混凝土锯片" : "Concrete Saw Blade",
        subtitle: locale === "zh" ? "混凝土切割耗材" : "Consumables for concrete cutting",
        introImage: "/image/concrete-tools.svg",
        introTitle: locale === "zh" ? "混凝土锯片" : "Concrete Saw Blade",
        introDesc: locale === "zh" ? "用于混凝土与钢筋混凝土材料的稳定切割。" : "For stable cutting of concrete and reinforced concrete.",
      },
      {
        id: "air-tools",
        label: locale === "zh" ? "气动工具" : "Air Tools",
        title: locale === "zh" ? "气动工具" : "Air Tools",
        subtitle: locale === "zh" ? "轻量化气动解决方案" : "Lightweight pneumatic solutions",
        introImage: "/image/concrete-tools.svg",
        introTitle: locale === "zh" ? "气动工具" : "Air Tools",
        introDesc: locale === "zh" ? "适用于打磨、修整等多种气动加工场景。" : "Suitable for grinding and trimming in pneumatic scenarios.",
      },
    ],
    [locale],
  );

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const current = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const isSmallBlade = activeTab === "small-blade";
  const isMediumBlade = activeTab === "medium-blade";

  useEffect(() => {
    const el = tabsScrollRef.current;
    if (!el) return;

    const updateScrollButtons = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < maxScrollLeft - 1);
    };

    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [tabs]);

  const scrollTabs = (direction: "left" | "right") => {
    const el = tabsScrollRef.current;
    if (!el) return;
    const distance = Math.max(220, Math.floor(el.clientWidth * 0.55));
    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">
      <SiteHeader locale={locale} nav={nav} page="products" />

      <header className="mx-auto max-w-7xl px-6 pb-10 pt-28 text-center">
        <h1 className="text-4xl font-black text-white md:text-6xl">{labels.title}</h1>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-400">{labels.subtitle}</p>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-10 flex items-center gap-2 border-b border-white/10 pb-3">
          <button
            type="button"
            aria-label={locale === "zh" ? "向左滚动标签" : "Scroll tabs left"}
            onClick={() => scrollTabs("left")}
            disabled={!canScrollLeft}
            className="h-8 w-8 shrink-0 rounded border border-white/20 text-sm text-slate-300 transition hover:border-blue-400 hover:text-blue-300 disabled:cursor-not-allowed disabled:border-white/10 disabled:text-slate-600"
          >
            {"<"}
          </button>
          <div
            ref={tabsScrollRef}
            className="flex flex-1 gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
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
          <button
            type="button"
            aria-label={locale === "zh" ? "向右滚动标签" : "Scroll tabs right"}
            onClick={() => scrollTabs("right")}
            disabled={!canScrollRight}
            className="h-8 w-8 shrink-0 rounded border border-white/20 text-sm text-slate-300 transition hover:border-blue-400 hover:text-blue-300 disabled:cursor-not-allowed disabled:border-white/10 disabled:text-slate-600"
          >
            {">"}
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">{current.title}</h2>
          <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">{current.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <aside className="space-y-5 lg:col-span-1">
            <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
              <div className="relative">
                <img src={publicPath(current.introImage)} alt="" className="aspect-square w-full rounded object-cover" />
                {current.zoomImage ? (
                  <div className="absolute -left-2 -top-2 h-16 w-16 overflow-hidden rounded-full">
                    <img src={publicPath(current.zoomImage)} alt="" className="h-full w-full object-cover" />
                  </div>
                ) : null}
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{current.introTitle}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{current.introDesc}</p>
            </div>
          </aside>

          <div className="space-y-6 lg:col-span-3">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
                <span className="font-bold text-white">
                  {activeTab === "small-blade" ? "Turbo Dry Cutting Blade Spec." : "Arix Granite Blade Spec."}
                </span>
                <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  {activeTab === "small-blade" ? (
                    <>
                      <thead className="text-[10px] tracking-widest text-slate-400">
                        <tr>
                          <th className="p-4" rowSpan={2}>
                            产品编号
                            <br />
                            Item No.
                          </th>
                          <th className="p-4 text-center" colSpan={2}>
                            外径(D)
                            <br />
                            Outer diameter
                          </th>
                          <th className="p-4" rowSpan={2}>
                            锯齿厚度(T)
                            <br />
                            Segment thickness
                          </th>
                          <th className="p-4" rowSpan={2}>
                            锯齿高度(W)
                            <br />
                            Segment height
                          </th>
                        </tr>
                        <tr>
                          <th className="p-4">Inch</th>
                          <th className="p-4">mm</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-300">
                        {smallBladeRows.map((row) => (
                          <tr key={row[0]} className="border-t border-white/5">
                            {row.map((cell) => (
                              <td key={`${row[0]}-${cell}`} className="p-4">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </>
                  ) : (
                    <>
                      <thead className="text-[10px] tracking-widest text-slate-400">
                        <tr>
                          <th className="p-4" rowSpan={2}>
                            产品编号
                            <br />
                            Item No.
                          </th>
                          <th className="p-4 text-center" colSpan={2}>
                            外径(D)
                            <br />
                            Outer diameter
                          </th>
                          <th className="p-4" rowSpan={2}>
                            孔径(H)
                            <br />
                            Bore
                          </th>
                          <th className="p-4" rowSpan={2}>
                            锯齿长度(L)
                            <br />
                            Segment length
                          </th>
                          <th className="p-4" rowSpan={2}>
                            锯齿厚度(T)
                            <br />
                            Segment thickness
                          </th>
                          <th className="p-4" rowSpan={2}>
                            锯齿高度(W)
                            <br />
                            Segment height
                          </th>
                          <th className="p-4" rowSpan={2}>
                            齿数(S)
                            <br />
                            Segment quantity
                          </th>
                        </tr>
                        <tr>
                          <th className="p-4">Inch</th>
                          <th className="p-4">mm</th>
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
                    </>
                  )}
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-blue-500/60 bg-[rgba(10,22,56,0.66)] px-4 py-3">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                  {locale === "zh" ? "核心优势" : "Key Advantages"}
                </span>
                {isSmallBlade ? (
                  <>
                    <span>- {locale === "zh" ? "角磨机" : "Angle Grinder"}</span>
                    <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
                    <span>- {locale === "zh" ? "开槽锯" : "Slot Saw"}</span>
                    <span>- {locale === "zh" ? "干切" : "Dry Cutting"}</span>
                  </>
                ) : (
                  <>
                    <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
                    <span>- {locale === "zh" ? "框架锯" : "Frame Saw"}</span>
                    <span>- {locale === "zh" ? "高频焊" : "High-Frequency Welded"}</span>
                    <span>- {locale === "zh" ? "湿切" : "Wet Cutting"}</span>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
        {isSmallBlade ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
                <img src={publicPath("/image/第8页-64.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
                <h3 className="mt-4 text-lg font-bold text-white">{locale === "zh" ? "分齿式GU片规格表" : "GU Blade Spec."}</h3>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
                  <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
                    <span className="font-bold text-white">{locale === "zh" ? "分齿式GU片规格表" : "GU Blade Spec."}</span>
                    <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="text-[10px] tracking-widest text-slate-400">
                        <tr>
                          <th className="p-4" rowSpan={2}>
                            产品编号
                            <br />
                            Item No.
                          </th>
                          <th className="p-4 text-center" colSpan={2}>
                            外径(D)
                            <br />
                            Outer diameter
                          </th>
                          <th className="p-4" rowSpan={2}>
                            锯齿厚度(T)
                            <br />
                            Segment thickness
                          </th>
                          <th className="p-4" rowSpan={2}>
                            锯齿高度(W)
                            <br />
                            Segment height
                          </th>
                        </tr>
                        <tr>
                          <th className="p-4">Inch</th>
                          <th className="p-4">mm</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-300">
                        {smallBladeGuRows.map((row) => (
                          <tr key={`gu-${row[0]}`} className="border-t border-white/5">
                            {row.map((cell) => (
                              <td key={`${row[0]}-${cell}`} className="p-4">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-xl border border-blue-500/60 bg-[rgba(10,22,56,0.66)] px-4 py-3">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                      {locale === "zh" ? "核心优势" : "Key Advantages"}
                    </span>
                    <span>- {locale === "zh" ? "角磨机" : "Angle Grinder"}</span>
                    <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
                    <span>- {locale === "zh" ? "开槽锯" : "Slot Saw"}</span>
                    <span>- {locale === "zh" ? "干切" : "Dry Cutting"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {isSmallBlade ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
                <img src={publicPath("/image/第8页-65.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
                <h3 className="mt-4 text-lg font-bold text-white">
                  {locale === "zh" ? "冷压T齿凹形干片规格表" : "Cold-pressed Concave Blade with T Segment Spec."}
                </h3>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
                <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
                  <span className="font-bold text-white">
                    {locale === "zh" ? "冷压T齿凹形干片规格表" : "Cold-pressed Concave Blade with T Segment Spec."}
                  </span>
                  <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-[10px] tracking-widest text-slate-400">
                      <tr>
                        <th className="p-4" rowSpan={2}>
                          产品编号
                          <br />
                          Item No.
                        </th>
                        <th className="p-4 text-center" colSpan={2}>
                          外径(D)
                          <br />
                          Outer diameter
                        </th>
                        <th className="p-4" rowSpan={2}>
                          锯齿厚度(T)
                          <br />
                          Segment thickness
                        </th>
                        <th className="p-4" rowSpan={2}>
                          锯齿高度(W)
                          <br />
                          Segment height
                        </th>
                      </tr>
                      <tr>
                        <th className="p-4">Inch</th>
                        <th className="p-4">mm</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      {smallBladeTsRows.map((row) => (
                        <tr key={`ts-${row[0]}`} className="border-t border-white/5">
                          {row.map((cell) => (
                            <td key={`${row[0]}-${cell}`} className="p-4">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {isMediumBlade ? (
          <>
            <div className="mt-8 grid gap-6 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
              <img src={publicPath("/image/第5页-39.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
              <h3 className="mt-4 text-lg font-bold text-white">
                {locale === "zh" ? "箭头型有序排列花岗锯片规格表" : "Arix Granite Blade with Arrow Segment Spec."}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                {locale === "zh" ? "适合切割：花岗石、人造石英石" : "Great for granite and quartz"}
              </p>
            </div>
          </aside>

          <div className="space-y-6 lg:col-span-3">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
                <span className="font-bold text-white">Arix Granite Blade with Arrow Segment Spec.</span>
                <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-[10px] tracking-widest text-slate-400">
                    <tr>
                      <th className="p-4" rowSpan={2}>
                        产品编号
                        <br />
                        Item No.
                      </th>
                      <th className="p-4 text-center" colSpan={2}>
                        外径(D)
                        <br />
                        Outer diameter
                      </th>
                      <th className="p-4" rowSpan={2}>
                        孔径(H)
                        <br />
                        Bore
                      </th>
                      <th className="p-4" rowSpan={2}>
                        锯齿长度(L)
                        <br />
                        Segment length
                      </th>
                      <th className="p-4" rowSpan={2}>
                        锯齿厚度(T)
                        <br />
                        Segment thickness
                      </th>
                      <th className="p-4" rowSpan={2}>
                        锯齿高度(W)
                        <br />
                        Segment height
                      </th>
                      <th className="p-4" rowSpan={2}>
                        齿数(S)
                        <br />
                        Segment quantity
                      </th>
                    </tr>
                    <tr>
                      <th className="p-4">Inch</th>
                      <th className="p-4">mm</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {arrowSpecRows.map((row) => (
                      <tr key={`arrow-${row[0]}`} className="border-t border-white/5">
                        {row.map((cell) => (
                          <td key={`${row[0]}-${cell}`} className="p-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-blue-500/60 bg-[rgba(10,22,56,0.66)] px-4 py-3">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                  {locale === "zh" ? "核心优势" : "Key Advantages"}
                </span>
                <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
                <span>- {locale === "zh" ? "框架锯" : "Frame Saw"}</span>
                <span>- {locale === "zh" ? "高频焊" : "High-Frequency Welded"}</span>
                <span>- {locale === "zh" ? "湿切" : "Wet Cutting"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-start">
            <div className="w-[56%] overflow-hidden rounded-xl">
              <img src={publicPath("/image/huagangyan.png")} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="-ml-10 mt-32 w-[56%] overflow-hidden rounded-xl">
              <img src={publicPath("/image/paixvjvpian.png")} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
              <img src={publicPath("/image/第5页-38.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
              <h3 className="mt-4 text-lg font-bold text-white">
                {locale === "zh" ? "有序排列花岗锯片规格表" : "Arix Granite Blade Spec."}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                {locale === "zh"
                  ? "特点：刀头上的金刚石按一定的规律分布，最大限度的利用金刚石，切削效果更好，寿命更长。"
                  : "Advantage: Arix diamond on segments can make full use of diamond, to have better performance and longer life."}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                {locale === "zh" ? "适合切割：花岗石、大理石、人造石英石、天然石英石" : "Great for granite, marble quartz and quartzite"}
              </p>
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
                  <thead className="text-[10px] tracking-widest text-slate-400">
                    <tr>
                      <th className="p-4" rowSpan={2}>
                        产品编号
                        <br />
                        Item No.
                      </th>
                      <th className="p-4 text-center" colSpan={2}>
                        外径(D)
                        <br />
                        Outer diameter
                      </th>
                      <th className="p-4" rowSpan={2}>
                        孔径(H)
                        <br />
                        Bore
                      </th>
                      <th className="p-4" rowSpan={2}>
                        锯齿长度(L)
                        <br />
                        Segment length
                      </th>
                      <th className="p-4" rowSpan={2}>
                        锯齿厚度(T)
                        <br />
                        Segment thickness
                      </th>
                      <th className="p-4" rowSpan={2}>
                        锯齿高度(W)
                        <br />
                        Segment height
                      </th>
                      <th className="p-4" rowSpan={2}>
                        齿数(S)
                        <br />
                        Segment quantity
                      </th>
                    </tr>
                    <tr>
                      <th className="p-4">Inch</th>
                      <th className="p-4">mm</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {orderedSpecRows.map((row) => (
                      <tr key={`ordered-${row[0]}`} className="border-t border-white/5">
                        {row.map((cell) => (
                          <td key={`${row[0]}-${cell}`} className="p-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-blue-500/60 bg-[rgba(10,22,56,0.66)] px-4 py-3">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                  {locale === "zh" ? "核心优势" : "Key Advantages"}
                </span>
                <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
                <span>- {locale === "zh" ? "框架锯" : "Frame Saw"}</span>
                <span>- {locale === "zh" ? "高频焊" : "High-Frequency Welded"}</span>
                <span>- {locale === "zh" ? "湿切" : "Wet Cutting"}</span>
              </div>
            </div>
          </div>
        </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-4">
              <img src={publicPath("/image/第5页-41.PNG")} alt="" className="aspect-square w-full rounded object-cover" />
              <h3 className="mt-4 text-lg font-bold text-white">
                {locale === "zh" ? "深U型有序排列花岗锯片规格表" : "Arix Granite Blade with U Segment Spec."}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                {locale === "zh" ? "适合切割：花岗石、人造石英石、天然石英石" : "Great for granite, quartz and quartzite"}
              </p>
            </div>
          </aside>

          <div className="space-y-6 lg:col-span-3">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-blue-900/20 px-4 py-3">
                <span className="font-bold text-white">Arix Granite Blade with U Segment Spec.</span>
                <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">UNIT: mm</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-[10px] tracking-widest text-slate-400">
                    <tr>
                      <th className="p-4" rowSpan={2}>
                        产品编号
                        <br />
                        Item No.
                      </th>
                      <th className="p-4 text-center" colSpan={2}>
                        外径(D)
                        <br />
                        Outer diameter
                      </th>
                      <th className="p-4" rowSpan={2}>
                        孔径(H)
                        <br />
                        Bore
                      </th>
                      <th className="p-4" rowSpan={2}>
                        锯齿长度(L)
                        <br />
                        Segment length
                      </th>
                      <th className="p-4" rowSpan={2}>
                        锯齿厚度(T)
                        <br />
                        Segment thickness
                      </th>
                      <th className="p-4" rowSpan={2}>
                        锯齿高度(W)
                        <br />
                        Segment height
                      </th>
                      <th className="p-4" rowSpan={2}>
                        齿数(S)
                        <br />
                        Segment quantity
                      </th>
                    </tr>
                    <tr>
                      <th className="p-4">Inch</th>
                      <th className="p-4">mm</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {deepUSpecRows.map((row) => (
                      <tr key={`deep-u-${row[0]}`} className="border-t border-white/5">
                        {row.map((cell) => (
                          <td key={`${row[0]}-${cell}`} className="p-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-blue-500/60 bg-[rgba(10,22,56,0.66)] px-4 py-3">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                  {locale === "zh" ? "核心优势" : "Key Advantages"}
                </span>
                <span>- {locale === "zh" ? "台锯" : "Table Saw"}</span>
                <span>- {locale === "zh" ? "框架锯" : "Frame Saw"}</span>
                <span>- {locale === "zh" ? "高频焊" : "High-Frequency Welded"}</span>
                <span>- {locale === "zh" ? "湿切" : "Wet Cutting"}</span>
              </div>
            </div>
          </div>
            </div>
          </>
        ) : null}

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
        <p>© 2026 Zero Geometry (Xiamen) Diamond Technology Co., Ltd. TECHNICAL SPECIFICATIONS</p>
      </footer>
    </main>
  );
}

