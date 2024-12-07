import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import { ThemeWrapper } from '@/components/theme/theme-wrapper';
import { Footer } from '@/components/footer';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import siteConfig from "./metadata";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ewerediagboya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-mono antialiased`}
      >
        <ThemeWrapper>
          <div className="px-4 py-8">
            <div className="max-w-screen-md mx-auto min-h-dvh">
              <div className="flex justify-end mb-8">
                <ThemeToggle />
              </div>
              {children}
            </div>
          </div>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
