import type { Metadata } from "next";
import { openSans } from "@/app/ui/fonts";

import Footer from "@/app/ui/Footer/Footer";
import Header from "@/app/ui/Header/Header";

export const metadata: Metadata = {
  title: "Glossary",
  description: "Glossary page",
};

export default function GlossaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} flex flex-col min-h-screen antialiased`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}