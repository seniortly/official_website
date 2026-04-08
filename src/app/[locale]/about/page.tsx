import { notFound } from "next/navigation";
import { siteContent, supportedLocales, type Locale } from "@/lib/site-content";
import { SiteHeader } from "../SiteHeader";

type PageProps = {
  params: {
    locale: string;
  };
};

const aboutImages = [
  "/image/第3页-5.PNG",
  "/image/第3页-6.PNG",
  "/image/第3页-7.PNG",
  "/image/第3页-8.PNG",
  "/image/第3页-9.PNG",
  "/image/第3页-10.PNG",
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
              src="/image/about-factory.svg"
              alt=""
              className="w-full rounded-3xl border border-white/10 bg-slate-100 object-cover p-8 shadow-2xl"
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
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {aboutImages.map((src) => (
              <div key={src} className="overflow-hidden rounded-xl border border-white/10">
                <img src={src} alt="" className="aspect-[4/3] w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-14 text-center text-4xl font-bold text-white">{locale === "zh" ? "发展历程" : "Timeline"}</h2>
          <div className="relative">
            <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent" />

            <TimelineRow
              year="1998"
              leftText={locale === "zh" ? "厦门泰扬金刚石制品有限公司正式成立" : "Taiyang Diamond Products founded in Xiamen"}
              rightTag={locale === "zh" ? "开启制造纪元" : "Manufacturing Begins"}
            />
            <TimelineRow
              year="2005"
              leftText={locale === "zh" ? "全面引进自动化锯片压制系统，提升产能 300%" : "Introduced automated blade pressing system, output +300%"}
              rightTag={locale === "zh" ? "技术跨越" : "Technology Leap"}
              reverse
            />
            <TimelineRow
              year="2014"
              leftText={locale === "zh" ? "通过 ISO9001:2000 质量管理体系认证" : "Passed ISO9001 quality management certification"}
              rightTag={locale === "zh" ? "合规化经营" : "Quality Compliance"}
            />
            <TimelineRow
              year="2026"
              leftText={locale === "zh" ? "产品已覆盖 60+ 国家，成为全球工业工具核心供应商" : "Products available in 60+ countries worldwide"}
              rightTag={locale === "zh" ? "面向全球" : "Global Expansion"}
              reverse
              highlight
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-slate-950 py-10 text-center text-xs tracking-widest text-slate-500">
        <p>© 2026 Xiamen Taiyang Diamond Products Co., Ltd. ABOUT US</p>
      </footer>
    </main>
  );
}

function TimelineRow({
  year,
  leftText,
  rightTag,
  reverse = false,
  highlight = false,
}: {
  year: string;
  leftText: string;
  rightTag: string;
  reverse?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="relative mb-12">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
        <div className={reverse ? "text-right" : ""}>
          {reverse ? (
            <span className="text-xs uppercase tracking-widest text-slate-500">{rightTag}</span>
          ) : (
            <>
              <h4 className="text-3xl font-bold text-blue-400">{year}</h4>
              <p className="mt-2 text-sm text-slate-400">{leftText}</p>
            </>
          )}
        </div>
        <div
          className={`z-[1] h-4 w-4 rounded-full border-4 border-[#020617] ${
            highlight ? "bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.85)]" : "bg-blue-500"
          }`}
        />
        <div className={!reverse ? "text-left" : ""}>
          {!reverse ? (
            <span className="text-xs uppercase tracking-widest text-slate-500">{rightTag}</span>
          ) : (
            <>
              <h4 className="text-3xl font-bold text-blue-400">{year}</h4>
              <p className="mt-2 text-sm text-slate-400">{leftText}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
