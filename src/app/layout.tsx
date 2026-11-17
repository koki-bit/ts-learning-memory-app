import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "学習記録アプリ",
  description: "学習内容を記録するアプリ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
