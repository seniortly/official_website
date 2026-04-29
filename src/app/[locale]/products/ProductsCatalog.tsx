"use client";

import type { Locale } from "@/lib/site-content";
import { useEffect, useMemo, useRef, useState } from "react";
import { ContactMailForm, SiteHeader } from "../SiteHeader";
import { MediumBladeTab } from "./component/MediumBladeTab";
import { SmallBladeTab } from "./component/SmallBladeTab";
import { BigBladeTab } from "./component/BigBladeTab";
import { WireSawTab } from "./component/WireSawTab";
import { CalibratingWheelTab } from "./component/CalibratingWheelTab";
import { ProfileWheelTab } from "./component/ProfileWheelTab";
import { ElectroplatedProfileWheelTab } from "./component/ElectroplatedProfileWheelTab";
import { RouterBitTab } from "./component/RouterBitTab";
import { CNCToolsTab } from "./component/CNCToolsTab";
import { GrindingBlockTab } from "./component/GrindingBlockTab";
import { CupWheelTab } from "./component/CupWheelTab";
import { GrindingDiscTab } from "./component/GrindingDiscTab";
import { PolishingPadTab } from "./component/PolishingPadTab";
import { AntiquingBrushTab } from "./component/AntiquingBrushTab";
import { BackerPadTab } from "./component/BackerPadTab";
import { BushHammerTab } from "./component/BushHammerTab";
import { CoreDrillTab } from "./component/CoreDrillTab";
import { ConcreteRingSawMachineTab } from "./component/ConcreteRingSawMachineTab";
import { ConcreteSawBladeTab } from "./component/ConcreteSawBladeTab";
import { AirToolsTab } from "./component/AirToolsTab";

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

const tabComponentMap: Record<string, React.FC<{ locale: Locale }>> = {
  "medium-blade": MediumBladeTab,
  "small-blade": SmallBladeTab,
  "big-blade": BigBladeTab,
  "wire-saw": WireSawTab,
  "calibrating-wheel": CalibratingWheelTab,
  "profile-wheel": ProfileWheelTab,
  "electroplated-profile-wheel": ElectroplatedProfileWheelTab,
  "router-bit": RouterBitTab,
  "cnc-tools": CNCToolsTab,
  "grinding-block": GrindingBlockTab,
  "cup-wheel": CupWheelTab,
  "grinding-disc": GrindingDiscTab,
  "polishing-pad": PolishingPadTab,
  "antiquing-brush": AntiquingBrushTab,
  "backer-pad": BackerPadTab,
  "bush-hammer": BushHammerTab,
  "core-drill": CoreDrillTab,
  "concrete-ring-saw-machine": ConcreteRingSawMachineTab,
  "concrete-saw-blade": ConcreteSawBladeTab,
  "air-tools": AirToolsTab,
};

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
        introImage: "/image/第11页-92.PNG",
        introTitle: locale === "zh" ? "高效定厚轮" : "High-Efficiency Calibrating Wheel",
        introDesc: locale === "zh" ? "适用于石材板材连续定厚与表面预处理。" : "For slab calibrating and surface pre-processing.",
      },
      {
        id: "profile-wheel",
        label: locale === "zh" ? "线条轮" : "Profile Wheel",
        title: locale === "zh" ? "线条轮系列" : "Profile Wheel Series",
        subtitle: locale === "zh" ? "石材线条与造型加工" : "For stone edge profiling",
        introImage: "/image/第12页-105.PNG",
        introTitle: locale === "zh" ? "线条轮工具" : "Profile Wheel Tooling",
        introDesc: locale === "zh" ? "适配多种异形边缘加工，确保轮廓成型稳定。" : "Supports multiple edge profiles with stable shaping performance.",
      },
      {
        id: "electroplated-profile-wheel",
        label: locale === "zh" ? "电镀线条轮" : "Electroplated Profile Wheel",
        title: locale === "zh" ? "电镀线条轮" : "Electroplated Profile Wheel",
        subtitle: locale === "zh" ? "锋利切削与快速成型" : "Sharp cutting and rapid shaping",
        introImage: "/image/第12页-100.PNG",
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
        introImage: "/image/第14页-131.PNG",
        introTitle: locale === "zh" ? "CNC石材工具" : "CNC Stone Tooling",
        introDesc: locale === "zh" ? "覆盖开槽、成型、修边等CNC加工场景。" : "Covers grooving, shaping and edging scenarios on CNC machines.",
      },
      {
        id: "grinding-block",
        label: locale === "zh" ? "磨块" : "Grinding Block",
        title: locale === "zh" ? "磨块" : "Grinding Block",
        subtitle: locale === "zh" ? "高效粗磨与找平" : "For rough grinding and leveling",
        introImage: "/image/第17页-158.PNG",
        introTitle: locale === "zh" ? "磨块" : "Grinding Block",
        introDesc: locale === "zh" ? "适用于石材表面粗磨和基础找平处理。" : "Designed for rough grinding and base leveling of stone surfaces.",
      },
      {
        id: "cup-wheel",
        label: locale === "zh" ? "磨皿" : "Cup Wheel",
        title: locale === "zh" ? "磨皿系列" : "Cup Wheel Series",
        subtitle: locale === "zh" ? "高效去料与整平" : "For efficient stock removal",
        introImage: "/image/第17页-166.PNG",
        introTitle: locale === "zh" ? "磨皿" : "Cup Wheel",
        introDesc: locale === "zh" ? "适用于石材、混凝土等材料的快速研磨。" : "Suitable for rapid grinding on stone and concrete materials.",
      },
      {
        id: "grinding-disc",
        label: locale === "zh" ? "磨盘" : "Grinding Disc",
        title: locale === "zh" ? "磨盘系列" : "Grinding Disc Series",
        subtitle: locale === "zh" ? "稳定研磨与表面处理" : "For stable surface grinding",
        introImage: "/image/第18页-173.PNG",
        introTitle: locale === "zh" ? "磨盘" : "Grinding Disc",
        introDesc: locale === "zh" ? "适配多种工况，实现稳定表面处理效果。" : "Adapts to multiple working conditions for stable surface finishing.",
      },
      {
        id: "polishing-pad",
        label: locale === "zh" ? "软磨片" : "Polishing Pad",
        title: locale === "zh" ? "软磨片系列" : "Polishing Pad Series",
        subtitle: locale === "zh" ? "细磨抛光与光泽提升" : "Fine polishing and gloss improvement",
        introImage: "/image/第19页-185.PNG",
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
  const tabsBarRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const current = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const headerHeight = 80;

    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 0, rootMargin: `-${headerHeight}px 0px 0px 0px` },
    );
    observer.observe(sentinel);

    let rafId: number;
    const updateCollapse = () => {
      const rect = sentinel.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / headerHeight));
      document.documentElement.style.setProperty("--header-collapse", String(progress));
    };
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCollapse);
    };

    updateCollapse();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      document.documentElement.style.removeProperty("--header-collapse");
    };
  }, []);

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

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTabs = (direction: "left" | "right") => {
    const el = tabsScrollRef.current;
    if (!el) return;
    const distance = Math.max(220, Math.floor(el.clientWidth * 0.55));
    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const TabComponent = tabComponentMap[activeTab];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">
      <SiteHeader locale={locale} nav={nav} page="products" />

      <header className="mx-auto max-w-7xl px-6 pb-10 pt-28 text-center">
        <h1 className="text-4xl font-black text-white md:text-6xl">{labels.title}</h1>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-400">{labels.subtitle}</p>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div ref={sentinelRef} className="h-0" />
        <div
          ref={tabsBarRef}
          className={`sticky z-40 flex items-center gap-2 border-b py-3 transition-colors duration-200 ${
            isStuck
              ? "bg-[rgba(2,8,30,0.95)] backdrop-blur-md border-white/10 -mx-6 px-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              : "border-white/10"
          } ${isStuck ? "" : "mb-10"}`}
          style={{ top: `calc(80px * (1 - var(--header-collapse, 0)))` }}
        >
          <button
            type="button"
            aria-label={locale === "zh" ? "向左滚动标签" : "Scroll tabs left"}
            onClick={() => scrollTabs("left")}
            disabled={!canScrollLeft}
            className="-mt-2.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm text-slate-300 transition hover:bg-white/20 hover:text-blue-300 disabled:cursor-not-allowed disabled:bg-white/5 disabled:text-slate-600"
          >
            <img src="/leftarrow.svg" alt="" className="h-3 w-3" />
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
            className="-mt-2.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm text-slate-300 transition hover:bg-white/20 hover:text-blue-300 disabled:cursor-not-allowed disabled:bg-white/5 disabled:text-slate-600"
          >
            <img src="/rightarrow.svg" alt="" className="h-3 w-3" />
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">{current.title}</h2>
          <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">{current.subtitle}</p>
        </div>

        {TabComponent ? <TabComponent locale={locale} /> : null}
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
        {/* <div className="rounded-xl border border-white/10 bg-[rgba(15,23,42,0.58)] p-5">
          <ContactMailForm
            copy={{
              formName: labels.formName,
              formEmail: labels.formEmail,
              formMessage: labels.formMessage,
              formSubmit: labels.formSubmit,
            }}
          />
        </div> */}
      </section>

      <footer className="border-t border-white/5 bg-slate-950 py-10 text-center text-xs tracking-widest text-slate-500">
        <p>© 2026 Zero Geometry (Xiamen) Diamond Technology Co., Ltd. TECHNICAL SPECIFICATIONS</p>
      </footer>

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/80 shadow-lg backdrop-blur transition hover:bg-blue-500 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <img src="/toparrow.svg" alt="" className="h-5 w-5" />
        </button>
      )}
    </main>
  );
}
