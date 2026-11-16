import type { Metadata, Viewport } from "next";
import { Amiri, IBM_Plex_Sans_Arabic, Instrument_Serif, Manrope, Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { HeaderFallback, SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/locale";
import { getSiteUrl } from "@/content/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-family",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-family",
  display: "swap",
});

const editorial = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-editorial-family",
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic-family",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri-family",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return {
    metadataBase: new URL(getSiteUrl()),
    title: { default: t.meta.defaultTitle, template: t.meta.template },
    description: t.meta.description,
    applicationName: "Momentum",
    authors: [{ name: "Momentum", url: "https://www.linkedin.com/company/momentumkwt/" }],
    openGraph: {
      title: t.meta.defaultTitle,
      description: t.meta.description,
      siteName: "Momentum",
      locale: locale === "ar" ? "ar_KW" : "en_US",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: t.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.defaultTitle,
      description: t.meta.description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, dir, t } = await getDictionary();

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${display.variable} ${body.variable} ${editorial.variable} ${arabic.variable} ${amiri.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col overflow-x-clip">
        <JsonLd description={t.meta.description} locale={locale} />
        <a href="#content" className="skip-link">
          {t.a11y.skip}
        </a>
        <Suspense fallback={<HeaderFallback />}>
          <SiteHeader locale={locale} t={t} />
        </Suspense>
        <main id="content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter locale={locale} t={t} />
      </body>
    </html>
  );
}
