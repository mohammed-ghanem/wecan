import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../../providers/Providers";
import { ReactNode } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  metadataBase: new URL("https://wecandevmode.online"),

  title: "WeCan For Development",

  description:
    "WeCan For Development is a software studio specializing in web development, UI/UX design, mobile applications, dashboards, and scalable digital products.",

  keywords: [
    "Software Company",
    "Software Studio",
    "Web Development",
    "Mobile App Development",
    "UI UX Design",
    "Laravel",
    "Next.js",
    "Dashboard Development",
  ],

  authors: [{ name: "WeCan For Development" }],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "WeCan For Development",
    description:
      "We design and develop websites, mobile apps, dashboards, and scalable digital products.",
    url: "https://wecandevmode.online",
    siteName: "WeCan For Development",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://wecandevmode.online/assets/images/meta.jpeg",
        width: 1200,
        height: 630,
        alt: "WeCan For Development Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WeCan For Development",
    description:
      "We design and develop websites, mobile apps, dashboards, and scalable digital products.",
    images: ["https://wecandevmode.online/assets/images/meta.jpeg"],
  },
};





export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <body className="overflow-x-hidden bg-[#07131a] text-slate-100 antialiased">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
