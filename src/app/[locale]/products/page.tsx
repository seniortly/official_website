import { notFound } from "next/navigation";
import { siteContent, supportedLocales, type Locale } from "@/lib/site-content";
import { ProductsCatalog } from "./ProductsCatalog";

type PageProps = {
  params: {
    locale: string;
  };
};

export default function ProductsPage({ params }: PageProps) {
  if (!supportedLocales.includes(params.locale as Locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = siteContent[locale];

  return (
    <ProductsCatalog
      locale={locale}
      nav={content.nav}
      labels={{
        title: content.sections.productsTitle,
        subtitle: "TECHNICAL SPECIFICATIONS & PRODUCT CATALOG",
        highlightsTitle: content.sections.highlightsTitle,
        highlights: content.sections.highlights,
        networkTitle: content.sections.networkTitle,
        networkDesc: content.sections.networkDesc,
        contactTitle: content.sections.contactTitle,
        contactAddress: content.sections.contactAddress,
        contactPhone: content.sections.contactPhone,
        contactFax: content.sections.contactFax,
        contactEmail: content.sections.contactEmail,
        contactWebsite: content.sections.contactWebsite,
        formName: content.sections.formName,
        formEmail: content.sections.formEmail,
        formMessage: content.sections.formMessage,
        formSubmit: content.sections.formSubmit,
      }}
    />
  );
}
