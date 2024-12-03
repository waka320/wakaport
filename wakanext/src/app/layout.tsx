import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "waka320",
  description: "若松勇希のポートフォリオ",
  authors: [{ name: "Yuki Wakamatsu" }],
  keywords: ["ポートフォリオ", "Web開発", "Next.js", "TypeScript"],
  openGraph: {
    title: "若松勇希について",
    description: "ポートフォリオサイト",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className="
          antialiased 
          bg-white 
          text-black 
          dark:bg-black 
          dark:text-white
        "
      >
        {children}
      </body>
    </html>
  );
}
