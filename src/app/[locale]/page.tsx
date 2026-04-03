import { HeroTechBackdrop } from "@/components/HeroTechBackdrop";
import { notFound } from "next/navigation";
import { siteContent, supportedLocales, type Locale } from "@/lib/site-content";
import { ContactMailForm, SiteHeader } from "./SiteHeader";

type PageProps = {
  params: {
    locale: string;
  };
};

const heroBg = "/image/第1页-2.PNG";

export default function LocaleHomePage({ params }: PageProps) {
  if (!supportedLocales.includes(params.locale as Locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = siteContent[locale];
  const altLocale: Locale = locale === "zh" ? "en" : "zh";
  const altLabel = altLocale === "zh" ? "中文" : "English";

  const sectionClass = "scroll-mt-[76px]";

  return (
    <main className="text-slate-900">
      <SiteHeader locale={locale} nav={content.nav} altLocale={altLocale} altLabel={altLabel} />

      <section
        id="home"
        className={`relative ${sectionClass} flex min-h-[max(100vh,52rem)] flex-col justify-between overflow-hidden text-white`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#022c32]/92 via-[#063a4a]/82 to-[#020617]/95"
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

        <div className="relative z-10 flex flex-1 flex-col px-4 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14">
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center text-center">
            <div className="relative mb-8 mt-2 flex h-[13rem] w-full max-w-[28rem] items-center justify-center md:h-[15.5rem] md:max-w-[32rem]">
              <svg
                className="absolute h-[118%] w-[118%] max-w-none text-cyan-400/35 md:h-[120%] md:w-[120%]"
                viewBox="0 0 200 200"
                aria-hidden
              >
                <defs>
                  <radialGradient id="ty-aura" cx="50%" cy="50%" r="50%">
                    <stop offset="40%" stopColor="rgb(34, 211, 238)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="98" fill="url(#ty-aura)" />
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  opacity="0.5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="84"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeDasharray="10 9"
                  opacity="0.55"
                  className="text-cyan-300"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="76"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.6"
                  strokeDasharray="4 6"
                />
              </svg>
              <div
                className="absolute h-[9.5rem] w-[9.5rem] rounded-full border-2 border-cyan-400/40 bg-cyan-500/[0.07] shadow-[0_0_60px_rgba(34,211,238,0.45),inset_0_0_40px_rgba(103,232,249,0.08)] md:h-[11rem] md:w-[11rem]"
                aria-hidden
              />
              <div
                className="absolute h-[7.5rem] w-[7.5rem] rounded-full border border-dashed border-white/30 md:h-[8.5rem] md:w-[8.5rem]"
                aria-hidden
              />
              <span className="hero-ty-mark relative z-[1] text-[5rem] md:text-[6.25rem]">TY</span>
            </div>

            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.45em] text-cyan-100/95 md:text-xs md:tracking-[0.5em]">
              Xiamen Taiying Diamond Products Co., Ltd.
            </p>
            <div className="hero-title-3d-wrap mx-auto max-w-5xl px-1">
              <h1 className="hero-metallic-title text-[1.65rem] leading-[1.28] md:text-5xl md:leading-tight lg:text-[3.25rem]">
                {content.company}
              </h1>
            </div>
            <p className="mt-6 max-w-2xl text-sm font-medium tracking-wide text-cyan-50/95 md:text-lg md:tracking-wider">
              {content.slogan}
            </p>

            <div className="sci-fi-hex-strip mt-12 w-full max-w-6xl md:mt-16">
              <div className="flex flex-wrap items-end justify-center gap-x-2 gap-y-10 sm:gap-x-3 md:gap-x-4">
                {content.heroCategories.map((cat, i) => (
                  <a
                    key={cat.title}
                    href="#products"
                    className={`sci-fi-hex-card group flex w-[46%] max-w-[148px] flex-col items-center sm:w-auto sm:max-w-none md:max-w-[132px] ${
                      i % 2 === 1 ? "md:translate-y-6" : ""
                    }`}
                  >
                    <div className="hex-glow hex-frame sci-fi-hex-inner relative aspect-[190/220] w-full max-w-[138px] transition duration-300 group-hover:scale-[1.05] group-hover:shadow-[0_0_32px_rgba(34,211,238,0.45)] md:max-w-[132px]">
                      <div className="sci-fi-hex-scan" />
                      <div
                        className="pointer-events-none absolute inset-[5px] z-[3]"
                        aria-hidden
                      >
                        <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t border-cyan-300/90" />
                        <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r-2 border-t border-cyan-300/90" />
                        <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l-2 border-cyan-300/90" />
                        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r-2 border-cyan-300/90" />
                      </div>
                      <img
                        src={cat.image}
                        alt=""
                        className="relative z-0 h-full w-full object-cover opacity-90 transition duration-300 group-hover:opacity-100"
                      />
                    </div>
                    <p
                      className={`sci-fi-hex-label mt-3 text-center text-[10px] font-semibold leading-snug tracking-[0.12em] text-cyan-50 md:text-[11px] ${
                        locale === "en" ? "font-bold uppercase tracking-wider" : "tracking-[0.15em]"
                      }`}
                    >
                      {cat.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 flex w-full max-w-6xl justify-center px-2 md:mt-14">
            <a
              href="#contact"
              className="hero-cta-btn rounded-md bg-[#045a66] px-12 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#056f7d] md:text-sm md:tracking-[0.28em]"
            >
              {content.quoteLabel}
            </a>
          </div>
        </div>
      </section>

      <section id="about" className={`mx-auto max-w-6xl px-6 py-20 ${sectionClass}`}>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold">{content.aboutTitle}</h2>
            <p className="mt-5 leading-8 text-slate-700">{content.aboutDesc}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/image/第3页-3.PNG"
              alt="Taiying factory"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="products" className={`mx-auto max-w-6xl px-6 py-20 ${sectionClass}`}>
        <h2 className="text-3xl font-bold">{content.sections.productsTitle}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {content.sections.products.map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="technology" className={`bg-slate-900 py-20 text-slate-100 ${sectionClass}`}>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">{content.sections.technologyTitle}</h2>
            <p className="mt-4 text-slate-300">{content.sections.technologyDesc}</p>
          </div>
          <ul className="space-y-4 text-slate-200">
            {content.sections.capabilities.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-10 max-w-6xl px-6">
          <h3 className="text-xl font-semibold text-cyan-200">{content.sections.highlightsTitle}</h3>
          <ul className="mt-4 space-y-3 text-slate-200">
            {content.sections.highlights.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="network"
        className={`border-y border-slate-200 bg-gradient-to-br from-slate-50 to-cyan-50/40 py-16 ${sectionClass}`}
      >
        <div className="mx-auto max-w-6xl px-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-900">{content.sections.networkTitle}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 md:mx-0">
            {content.sections.networkDesc}
          </p>
        </div>
      </section>

      <section id="contact" className={`mx-auto max-w-6xl px-6 py-20 ${sectionClass}`}>
        <h2 className="text-3xl font-bold">{content.sections.contactTitle}</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-3 text-slate-700">
            <p>{content.sections.contactAddress}</p>
            <p>{content.sections.contactPhone}</p>
            <p>{content.sections.contactFax}</p>
            <p>{content.sections.contactEmail}</p>
            <p>{content.sections.contactWebsite}</p>
          </div>
          <ContactMailForm
            copy={{
              formName: content.sections.formName,
              formEmail: content.sections.formEmail,
              formMessage: content.sections.formMessage,
              formSubmit: content.sections.formSubmit,
            }}
          />
        </div>
      </section>
    </main>
  );
}
