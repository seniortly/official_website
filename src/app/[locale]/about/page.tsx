import { publicPath } from "@/lib/base-path";
import { siteContent, supportedLocales, type Locale } from "@/lib/site-content";
import { notFound } from "next/navigation";
import { SiteHeader } from "../SiteHeader";

type PageProps = {
  params: {
    locale: string;
  };
};

const aboutEquipmentCards = [
  {
    src: "/image/第3页-5.PNG",
    labelZh: "自动化激光焊接系统",
    labelEn: "Automated laser welding system",
  },
  {
    src: "/image/第3页-6.PNG",
    labelZh: "高精度有序排列机",
    labelEn: "High-precision ordered arrangement machine",
  },
  {
    src: "/image/第3页-7.PNG",
    labelZh: "全自动压机群",
    labelEn: "Fully automatic press bank",
  },
  {
    src: "/image/第3页-8.PNG",
    labelZh: "精密热处理炉",
    labelEn: "Precision heat treatment furnace",
  },
  {
    src: "/image/第3页-9.PNG",
    labelZh: "CNC 核心加工中心",
    labelEn: "CNC machining center",
  },
  {
    src: "/image/第3页-10.PNG",
    labelZh: "智能质检实验室",
    labelEn: "Intelligent QC laboratory",
  },
] as const;

export default function AboutPage({ params }: PageProps) {
  if (!supportedLocales.includes(params.locale as Locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = siteContent[locale];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">
      <SiteHeader locale={locale} nav={content.nav} page="about" />

      <section className="border-b border-white/5">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-black leading-tight text-white md:text-6xl">
              {locale === "zh" ? "精密制造" : "Precision Manufacturing"}
              <br />
              <span className="text-blue-500">{locale === "zh" ? "源于 1998" : "Since 1998"}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{content.aboutDesc}</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-400">
              <p>
                {locale === "zh"
                  ? "我们坚持技术驱动制造，持续引进自动化与高精度设备，不断优化从原料到成品的每个环节。"
                  : "We continuously invest in automation and high-precision equipment to optimize each step from raw material to finished product."}
              </p>
              <p>
                {locale === "zh"
                  ? "泰扬团队拥有资深工程师与完善质量体系，确保产品在锋利度、寿命与稳定性上的长期表现。"
                  : "Our senior engineering team and strict quality system ensure long-term performance in sharpness, durability and consistency."}
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={publicPath("/image/第3页-10.PNG")}
              alt={locale === "zh" ? "公司厂房外景" : "Exterior view of the company factory"}
              className="aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
            />
            <div className="absolute -right-4 -top-4 rounded-2xl bg-blue-600 px-8 py-6 shadow-[0_18px_45px_rgba(37,99,235,0.42)]">
              <p className="text-5xl font-black text-white">28</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-blue-100">Years of Expertise</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-white">{content.aboutEquipmentTitle}</h2>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">
              ADVANCED AUTOMATED PROFESSIONAL MANUFACTURING EQUIPMENT
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {aboutEquipmentCards.map((item) => {
              const label = locale === "zh" ? item.labelZh : item.labelEn;
              return (
                <div
                  key={item.src}
                  className="group relative overflow-hidden rounded-xl border border-white/5"
                >
                  <img
                    src={publicPath(item.src)}
                    alt={label}
                    className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/80 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-bold text-white">{label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold uppercase tracking-widest text-white">
            {locale === "zh" ? "发展历程" : "Timeline"}
          </h2>
          <div className="relative">
            <div className="absolute bottom-0 left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent" />

            {/* 1998：桌面左侧年+文，移动端仅右侧年+简文+标签 */}
            <div className="relative mb-12">
              <div className="flex flex-col items-center md:flex-row">
                <div className="hidden text-right md:block md:w-1/2 md:pr-12">
                  <h4 className="text-xl font-bold text-blue-500">1998</h4>
                  <p className="mt-2 text-sm text-slate-400">
                    {locale === "zh"
                      ? "厦门泰扬金刚石制品有限公司正式成立"
                      : "Taiyang Diamond Products founded in Xiamen"}
                  </p>
                </div>
                <div className="z-10 h-4 w-4 shrink-0 rounded-full border-4 border-slate-950 bg-blue-500" />
                <div className="text-center md:w-1/2 md:pl-12 md:text-left">
                  <h4 className="text-xl font-bold text-blue-500 md:hidden">1998</h4>
                  <p className="mt-2 text-sm text-slate-400 md:hidden">
                    {locale === "zh" ? "泰扬正式成立" : "Taiyang founded"}
                  </p>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                    {locale === "zh" ? "开启制造纪元" : "Manufacturing Begins"}
                  </span>
                </div>
              </div>
            </div>

            {/* 2005：左侧标签，右侧年+文 */}
            <div className="relative mb-12">
              <div className="flex flex-col items-center md:flex-row">
                <div className="text-center md:w-1/2 md:pr-12 md:text-right">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                    {locale === "zh" ? "技术跨越" : "Technology Leap"}
                  </span>
                </div>
                <div className="z-10 h-4 w-4 shrink-0 rounded-full border-4 border-slate-950 bg-blue-500" />
                <div className="text-center md:w-1/2 md:pl-12 md:text-left">
                  <h4 className="text-xl font-bold text-blue-500">2005</h4>
                  <p className="mt-2 text-sm text-slate-400">
                    {locale === "zh"
                      ? "全面引进自动化锯片压制系统，提升产能 300%"
                      : "Introduced automated blade pressing system, output +300%"}
                  </p>
                </div>
              </div>
            </div>

            {/* 2014：左侧年+文，右侧标签 */}
            <div className="relative mb-12">
              <div className="flex flex-col items-center md:flex-row">
                <div className="text-center md:w-1/2 md:pr-12 md:text-right">
                  <h4 className="text-xl font-bold text-blue-500">2014</h4>
                  <p className="mt-2 text-sm text-slate-400">
                    {locale === "zh"
                      ? "通过 ISO9001:2000 质量管理体系认证"
                      : "Passed ISO9001 quality management certification"}
                  </p>
                </div>
                <div className="z-10 h-4 w-4 shrink-0 rounded-full border-4 border-slate-950 bg-blue-500" />
                <div className="text-center md:w-1/2 md:pl-12 md:text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                    {locale === "zh" ? "合规化经营" : "Quality Compliance"}
                  </span>
                </div>
              </div>
            </div>

            {/* 2026：左侧标签，高亮节点，右侧年+文 */}
            <div className="relative">
              <div className="flex flex-col items-center md:flex-row">
                <div className="text-center md:w-1/2 md:pr-12 md:text-right">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                    {locale === "zh" ? "面向全球" : "Global Expansion"}
                  </span>
                </div>
                <div className="z-10 h-4 w-4 shrink-0 rounded-full border-4 border-slate-950 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                <div className="text-center md:w-1/2 md:pl-12 md:text-left">
                  <h4 className="text-xl font-bold text-blue-500">2026</h4>
                  <p className="mt-2 text-sm text-slate-400">
                    {locale === "zh"
                      ? "产品已覆盖 60+ 国家，成为全球工业工具核心供应商"
                      : "Products available in 60+ countries worldwide"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-slate-950 py-10 text-center text-xs tracking-widest text-slate-500">
        <p>© 2026 Xiamen Taiyang Diamond Products Co., Ltd. ABOUT US</p>
      </footer>
    </main>
  );
}
