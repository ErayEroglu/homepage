import "./globals.css";
import "@upstash/claps/style.css";

import { ClerkProvider } from "@clerk/nextjs";
import AnalyticsWrapper from "./analytics";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import cx from "@/lib/cx";

const title = "Adem ilter";
const description = "Designer, developer, creator and photographer.";
const url = "https://ademilter.com";
const locale = "tr_TR";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    site: "@ademilter",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icons/icon-android-chrome-192x192.png",
    apple: "/icons/icon-apple-touch-icon.png",
  },
  manifest: `${url}/manifest.json`,
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html
        lang="tr"
        className={cx(
          "scroll-smooth bg-zinc-50 text-zinc-800",
          "dark:bg-zinc-900 dark:text-zinc-200",
          displayFont.variable,
          defaultFont.variable,
        )}
      >
        <body className="antialiased ">
          <div className="flex min-h-screen flex-col pb-14 pt-10">
            <Header />
            <main className="mt-10 grow sm:mt-20">{children}</main>
            <Footer />
          </div>

          <Script
            src="https://widgets.superpeer.com/widget.js"
            strategy="beforeInteractive"
          />
          <AnalyticsWrapper />
        </body>
      </html>
    </ClerkProvider>
  );
}

const defaultFont = Inter({
  variable: "--font-inter",
  display: "swap",
  style: "normal",
  subsets: ["latin-ext"],
});

const displayFont = localFont({
  variable: "--font-display",
  src: [
    { path: "./fonts/InterDisplay-Regular.woff2", weight: "400" },
    {
      path: "./fonts/InterDisplay-SemiBold.woff2",
      weight: "600",
    },
  ],
  display: "swap",
  style: "normal",
});
