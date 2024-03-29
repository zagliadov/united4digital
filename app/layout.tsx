import type { Metadata } from "next";
import { openSans } from "@/app/ui/fonts";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import CookiesConsent from "./ui/CookieConsent/CookieConsent";

export const metadata: Metadata = {
  title: {
    default: "United 4 Digital",
    template: "%s - United 4 Digital",
  },
  description: "Generated by create next app",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TTC44B3J" />
      <GoogleAnalytics gaId="G-M0HCH2F1PG" />
      <Analytics/>
      <SpeedInsights/>
      <body
        className={`${openSans.variable} flex flex-col min-h-screen antialiased`}
      >
        <CookiesConsent />
        {children}
      </body>
    </html>
  );
}
