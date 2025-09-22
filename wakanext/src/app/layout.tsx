import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GridBackground } from "@/components/GridBackground";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "@/styles/globals.scss";

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

// Pixel fonts
const pixel12 = localFont({
  src: "../../public/x12y16pxMaruMonica.ttf",
  variable: "--font-pixel-12",
  weight: "400",
  style: "normal",
});

const pixel14 = localFont({
  src: "../../public/x14y24pxHeadUpDaisy.ttf",
  variable: "--font-pixel-14",
  weight: "400",
  style: "normal",
});

const pixel16 = localFont({
  src: "../../public/x16y32pxGridGazer.ttf",
  variable: "--font-pixel-16",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wakaport.com'),
  title: "Wakamatsu Yuki の部屋",
  description: "若松勇希のポートフォリオ。",
  authors: [{ name: "若松勇希", url: "https://wakaport.com" }],
  keywords: [
    "若松勇希", "ポートフォリオ", "Wakaport", "若松", "勇希",
    "Yuki Wakamatsu", "Wakamatsu Yuki", "wakaport.com", "wakaport",
    "名古屋大学", "情報学部", "人間社会情報学科", "名大", "名古屋大学生",
    "名古屋大学情報学部", "名古屋大学情報学部人間社会情報学科",
    "安田・遠藤・浦田研究室",
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://wakaport.com',
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://wakaport.com",
    siteName: "WakamatsuYukiの部屋.",
    title: "WakamatsuYukiの部屋.",
    description: "若松勇希のポートフォリオ。",
    images: [
      {
        url: "https://wakaport.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wakaport-若松勇希(waka320)のポートフォリオサイト",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
  },
  verification: {
    google: "uHgciCEhFSKuwPgbB9OP2oaSpx3LliNpxBX_NM1OCNc",
  },
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${pixel12.variable} ${pixel14.variable} ${pixel16.variable}`}
      suppressHydrationWarning
    >
      <body
        className="
          antialiased 
          bg-white 
          text-black 
          dark:bg-black 
          dark:text-white
          transition-colors duration-300
        "
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GridBackground>
            <div className="mx-auto flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </GridBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
