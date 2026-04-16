import { HeroTechBackdrop } from "@/components/HeroTechBackdrop";
import { publicPath } from "@/lib/base-path";
import { siteContent, supportedLocales, type Locale } from "@/lib/site-content";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "./SiteHeader";

type PageProps = {
  params: {
    locale: string;
  };
};

export default function LocaleHomePage({ params }: PageProps) {
  if (!supportedLocales.includes(params.locale as Locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = siteContent[locale];
  const heroCategorySubs =
    locale === "zh"
      ? ["Stone Cutting", "Profiling Tools", "Polishing Tools", "Drilling Tools", "Air & Concrete"]
      : ["Stone Cutting", "Profiling Tools", "Polishing Tools", "Drilling Tools", "Air & Concrete"];
  const heroCategoryIcons = [
    // Stone Cutting
    <svg key="cutting" className="h-14 w-14 text-blue-400 transition-colors group-hover:text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>,
    // Profiling Tools
    <svg key="profiling" className="h-14 w-14 text-blue-400 transition-colors group-hover:text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 16c3-7 11-7 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>,
    // Polishing Tools
    <svg key="polishing" className="h-14 w-14 text-blue-400 transition-colors group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="m12 3 2.2 4.8L19 10l-4.8 2.2L12 17l-2.2-4.8L5 10l4.8-2.2L12 3Z" />
      <circle cx="18.5" cy="5.5" r="1.5" />
    </svg>,
    // Drilling Tools
    <svg key="drilling" className="h-14 w-14 text-blue-400 transition-colors group-hover:text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 4h8M9 8h6M10 12h4M11 16h2M12 20v-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 4l8 0-4 16Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>,
    // Air & Concrete
    <svg key="concrete" className="h-14 w-14 text-blue-400 transition-colors group-hover:text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="8" width="12" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 10h3l1 2v3h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="17.5" r="1.5" fill="currentColor" />
      <circle cx="17.5" cy="17.5" r="1.5" fill="currentColor" />
    </svg>,
  ];
  return (
    <main className="bg-[#020617] text-slate-200">
      <SiteHeader locale={locale} nav={content.nav} />

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20 text-white">
        <div className="absolute inset-0 bg-[#020617]" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)]"
          aria-hidden
        />
        <div className="absolute inset-0 z-[1] overflow-hidden" aria-hidden>
          <HeroTechBackdrop />
        </div>
        <div
          className="hero-ambient-pulse pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_90%_55%_at_50%_18%,rgba(34,211,238,0.22),transparent_58%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_70%_50%_at_80%_85%,rgba(6,182,212,0.12),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#020617] via-transparent to-[#0c4a6e]/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-1/4 left-0 z-[3] h-px w-1/3 bg-gradient-to-r from-blue-500/30 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-1/4 z-[3] h-px w-1/2 bg-gradient-to-l from-blue-500/50 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-10 md:py-12 lg:grid-cols-2">
          <div className="text-left lg:pl-10 xl:pl-14">
            <div className="mb-6 inline-flex items-center gap-2 rounded border border-blue-500/20 bg-blue-600/10 px-3 py-1 text-xs font-bold text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              {locale === "zh" ? "全球领先金刚石工具制造商" : "Leading Diamond Tool Maker"}
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight text-white lg:text-7xl">
              Custom-Built,
              <br />
              <span className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Expertly Made.
              </span>
            </h1>
            <p className="mb-10 max-w-lg text-xl leading-relaxed text-slate-400">
              {content.slogan}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href={`/${locale}/products#contact`}
                className="rounded-lg bg-blue-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-blue-600/40 transition-all hover:bg-blue-500"
              >
                Request A Quote
              </Link>
              <Link
                href={`/${locale}/products`}
                className="rounded-lg border border-white/20 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                {locale === "zh" ? "浏览产品手册" : "Browse Catalog"}
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={publicPath("/image/test.gif")}
              alt=""
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-slate-900/30 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="flex flex-col items-center">
              <div className="text-4xl font-black text-white">1998</div>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-400">SINCE</p>
          </div>
          <div className="flex flex-col items-center">
              <div className="text-4xl font-black text-white">30+</div>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-400">EQUIPMENT</p>
          </div>
          <div className="flex flex-col items-center">
              <div className="text-4xl font-black text-white">70%</div>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-400">EXPORT</p>
          </div>
          <div className="flex flex-col items-center">
              <div className="text-4xl font-black text-white">6</div>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-400">SENIOR ENGINEERS</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-stretch gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded bg-blue-600/20 px-3 py-1 text-xs font-bold text-blue-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                {locale === "zh" ? "品牌实力" : "Brand Strength"}
              </div>
              <h3 className="mb-6 text-4xl font-bold text-white">
                {locale === "zh" ? "深耕金刚石工具制造" : "Deep in Diamond Tool Manufacturing"}
                <br />
                <span className="text-blue-500">{locale === "zh" ? "专业制造积淀" : "Professional Manufacturing Expertise"}</span>
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-slate-400">
                {locale === "zh"
                  ? "零点几何（厦门）金刚石科技有限公司是一家专业从事金刚石工具研发、生产和销售的领先制造商。我们持续投入先进工艺与设备，目前拥有30余台自动化及半自动化设备，并通过ISO9001质量管理体系认证。"
                  : "Zero Geometry (Xiamen) Diamond Technology Co., Ltd. is a leading manufacturer focused on diamond tool R&D, production and sales. We continuously invest in advanced processes and equipment, operate 30+ automated/semi-automated machines, and maintain ISO9001 quality certification."}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-white/5 bg-slate-800/50 p-6">
                  <h4 className="mb-2 text-3xl font-bold text-white">30+</h4>
                  <p className="text-sm text-slate-400">
                    {locale === "zh" ? "先进自动化生产设备" : "Advanced Automated Equipment"}
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-slate-800/50 p-6">
                  <h4 className="mb-2 text-3xl font-bold text-white">70%</h4>
                  <p className="text-sm text-slate-400">
                    {locale === "zh" ? "产品远销全球市场" : "Products Exported Worldwide"}
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-slate-800/50 p-6">
                  <h4 className="mb-2 text-3xl font-bold text-white">{locale === "zh" ? "6名" : "6"}</h4>
                  <p className="text-sm text-slate-400">
                    {locale === "zh" ? "15年以上经验资深工程师" : "15+ Years Senior Engineers"}
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-slate-800/50 p-6">
                  <h4 className="mb-2 text-3xl font-bold text-white">ISO</h4>
                  <p className="text-sm text-slate-400">
                    {locale === "zh" ? "9001质量体系管理认证" : "ISO9001 Quality Management"}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-full">
              <img
                src={publicPath("/image/第3页-9.PNG")}
                alt=""
                className="h-full min-h-[460px] w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(15,23,42,0.82))] p-8 shadow-2xl backdrop-blur-md md:block">
                <ul className="space-y-4 text-base text-white">
                  <li className="flex items-center gap-3">
                    <svg className="h-4 w-4 shrink-0 text-blue-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 14.2-3.2-3.2 1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6z" />
                    </svg>
                    {locale === "zh" ? "先进的制造工艺及设备" : "Advanced Processes and Equipment"}
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-4 w-4 shrink-0 text-blue-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 14.2-3.2-3.2 1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6z" />
                    </svg>
                    {locale === "zh" ? "定制化研发支持 (OEM/ODM)" : "Customized R&D Support (OEM/ODM)"}
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-4 w-4 shrink-0 text-blue-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 14.2-3.2-3.2 1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6z" />
                    </svg>
                    {locale === "zh" ? "严格的质量保证体系" : "Strict Quality Assurance System"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
              {locale === "zh" ? "产品系列" : "Product Lines"}
            </p>
            <h2 className="text-4xl font-bold text-white">
              {locale === "zh" ? "核心产品系列" : "Core Product Lines"}
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-blue-600" />
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { zh: "石材切割", en: "Stone Cutting",       sub: "STONE CUTTING",   img: "/image/第10页-86.PNG" },
              { zh: "仿形铣磨", en: "Profiling & Milling", sub: "PROFILING TOOLS",  img: "/image/第3页-8.PNG"  },
              { zh: "研磨抛光", en: "Grinding & Polishing",sub: "POLISHING TOOLS",  img: "/image/第3页-7.PNG"  },
              { zh: "钻削工具", en: "Drilling Tools",      sub: "DRILLING TOOLS",   img: "/image/第3页-6.PNG"  },
              { zh: "气动与混凝土", en: "Air & Concrete",  sub: "AIR & CONCRETE",   img: "/image/第3页-4.PNG"  },
            ].map((item) => (
              <Link
                key={item.sub}
                href={`/${locale}/products`}
                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-xl border border-white/10 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                <img
                  src={publicPath(item.img)}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
                <div className="relative z-10 p-4">
                  <p className="text-sm font-bold text-white">{locale === "zh" ? item.zh : item.en}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">{item.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <img
              src={publicPath("/image/第3页-5.PNG")}
              alt=""
              className="h-full min-h-[540px] w-full rounded-2xl border border-white/10 object-cover shadow-[0_20px_80px_rgba(2,6,23,0.55)]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="mb-8 text-4xl font-bold text-white">{locale === "zh" ? "为什么选择零点几何？" : "Why Zero Geometry?"}</h3>
            <div className="space-y-6">
              <div className="flex gap-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.66)] p-6 transition-all hover:border-blue-500/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-blue-600/20">
                  <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M3 21h18v-2H3v2Zm2-4h14V7l-7-4-7 4v10Zm5-8h4v4h-4V9Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold text-white">
                    {locale === "zh" ? "先进制造工艺" : "Advanced Manufacturing"}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {locale === "zh"
                      ? "30余台自动化设备，采用国际尖端激光焊接与有序排列工艺。"
                      : "30+ automated machines with advanced laser welding and ordered segment process."}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.66)] p-6 transition-all hover:border-blue-500/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-blue-600/20">
                  <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2a5 5 0 0 0-5 5v2H5v13h14V9h-2V7a5 5 0 0 0-5-5Zm-3 7V7a3 3 0 1 1 6 0v2H9Zm3 4a2 2 0 1 1-.001 3.999A2 2 0 0 1 12 13Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold text-white">
                    {locale === "zh" ? "专家级工程师团队" : "Senior Engineering Team"}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {locale === "zh"
                      ? "6名机械工程师，均拥有15年以上金刚石工具研发经验。"
                      : "Six senior engineers with 15+ years of diamond tool R&D experience."}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-white/10 bg-[rgba(15,23,42,0.66)] p-6 transition-all hover:border-blue-500/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-blue-600/20">
                  <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="m19.14 12.94 1.43-1.43-1.41-2.44-2.02.34a6.98 6.98 0 0 0-1.2-.7l-.3-2.03h-2.82l-.3 2.03c-.43.18-.83.41-1.2.7l-2.02-.34-1.41 2.44 1.43 1.43c-.04.3-.07.62-.07.94s.03.64.07.94l-1.43 1.43 1.41 2.44 2.02-.34c.37.29.77.52 1.2.7l.3 2.03h2.82l.3-2.03c.43-.18.83-.41 1.2-.7l2.02.34 1.41-2.44-1.43-1.43c.04-.3.07-.62.07-.94s-.03-.64-.07-.94ZM14 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold text-white">
                    {locale === "zh" ? "深度定制支持" : "Deep Customization"}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {locale === "zh"
                      ? "支持特殊工况定制，从基体到胎体配方全维度适配。"
                      : "Custom support for special conditions from core body to bond formula."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="mb-4 text-3xl font-bold uppercase tracking-widest text-white">
            {locale === "zh" ? "先进的自动化专业制造设备" : "Advanced Automated Professional Manufacturing Equipment"}
          </h3>
          <p className="mb-12 text-slate-500">
            {locale === "zh"
              ? "Advanced Automated Professional Manufacturing Equipment"
              : "先进的自动化专业制造设备"}
          </p>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { labelZh: "精密数控加工", labelEn: "Precision CNC Machining", img: "/image/第10页-86.PNG" },
              { labelZh: "自动化装配", labelEn: "Automated Assembly", img: "/image/第3页-8.PNG" },
              { labelZh: "严苛质检中心", labelEn: "Strict Quality Inspection", img: "/image/第3页-7.PNG" },
              { labelZh: "热处理工艺", labelEn: "Heat Treatment Process", img: "/image/第3页-6.PNG" },
            ].map((item) => (
              <div
                key={item.labelEn}
                className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
              >
                <img
                  src={publicPath(item.img)}
                  alt={locale === "zh" ? item.labelZh : item.labelEn}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-600/40 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="border border-white px-4 py-2 font-bold text-white">
                    {locale === "zh" ? item.labelZh : item.labelEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-blue-600/10" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-black text-white md:text-5xl">
            {locale === "zh" ? "索取技术支持与报价" : "Request Technical Support & Quote"}
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            {locale === "zh"
              ? "无论您在哪个国家，零点几何的专家团队都准备好为您提供专业服务。"
              : "Wherever you are, Zero Geometry experts are ready to support your project."}
          </p>
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder={locale === "zh" ? "您的称呼 / 公司名称" : "Your Name / Company"}
              className="h-12 flex-1 rounded-lg border border-white/15 bg-slate-900/70 px-4 text-sm text-slate-100 outline-none ring-blue-500/40 focus:ring-2"
            />
            <Link
              href={`/${locale}/products#contact`}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-bold text-white shadow-[0_0_26px_rgba(37,99,235,0.42)] transition hover:bg-blue-500"
            >
              {locale === "zh" ? "提交申请" : "Submit"}
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded bg-blue-600 text-sm font-black italic text-white">ZG</span>
                <span className="text-base font-bold text-white">
                  {locale === "zh" ? "零点几何金刚石科技" : "Zero Geometry Diamond"}
                </span>
              </div>
              <p className="text-sm leading-7 text-slate-400">
                {locale === "zh"
                  ? "专注金刚石工具制造。通过ISO9001体系认证，产品长期出口至海外市场。"
                  : "Focused on diamond tool manufacturing with ISO9001 quality system and global export service."}
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
                {locale === "zh" ? "快速导航" : "Quick Links"}
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href={`/${locale}/about`} className="hover:text-blue-300">{locale === "zh" ? "关于我们" : "About Us"}</Link></li>
                <li><Link href={`/${locale}/products`} className="hover:text-blue-300">{locale === "zh" ? "产品中心" : "Products"}</Link></li>
                <li><Link href={`/${locale}/products#technology`} className="hover:text-blue-300">{locale === "zh" ? "技术规格表" : "Technology"}</Link></li>
                <li><Link href={`/${locale}/products#network`} className="hover:text-blue-300">{locale === "zh" ? "全球分销" : "Global Network"}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
                {locale === "zh" ? "主要产品" : "Main Products"}
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>{locale === "zh" ? "中径锯片 / Medium Saw Blade" : "Medium Saw Blade"}</li>
                <li>{locale === "zh" ? "金刚石绳锯 / Diamond Wire Saw" : "Diamond Wire Saw"}</li>
                <li>{locale === "zh" ? "花岗岩刀头 / Granite Segments" : "Granite Segments"}</li>
                <li>{locale === "zh" ? "定厚轮 / Calibrating Wheel" : "Calibrating Wheel"}</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
                {locale === "zh" ? "联系方式" : "Contact"}
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>WhatsApp: +86 15880255522</li>
                <li>{locale === "zh" ? "官网：暂无" : "Website: N/A"}</li>
                <li>
                  {locale === "zh"
                    ? "厦门市同安区西柯街道银城智谷A12栋1501室"
                    : "Room 1501, Building A12, Yincheng Zhigu, Xike Sub-district, Tong'an District, Xiamen City"}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs uppercase tracking-widest text-slate-500 md:flex-row">
            <p>© 2026 Zero Geometry (Xiamen) Diamond Technology Co., Ltd. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
