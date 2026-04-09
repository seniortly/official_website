import { supportedLocales } from "@/lib/site-content";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
