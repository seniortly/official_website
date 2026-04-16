import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zero Geometry Diamond Technology",
    template: "%s | Zero Geometry Diamond Technology",
  },
  description: "Zero Geometry (Xiamen) Diamond Technology Co., Ltd. corporate website",
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
