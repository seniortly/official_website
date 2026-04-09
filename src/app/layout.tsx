import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TY Diamond Tools",
    template: "%s | TY Diamond Tools",
  },
  description: "TY Diamond Tools corporate website template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
