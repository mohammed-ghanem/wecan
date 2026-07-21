"use client";

import Link from "next/link";
import LangUseParams from "@/translate/LangUseParams";
import TranslateHook from "@/translate/TranslateHook";
import { defaultLocale } from "@/constants/locales";
import logo from "@/public/assets/images/logo.png";
import Image from "next/image";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Footer() {
  const lang = (LangUseParams() as string) || defaultLocale;
  const translate = TranslateHook();
  const t = translate?.wecan;
  const year = new Date().getFullYear();
  const homeHref = lang === "ar" || lang === defaultLocale ? "/" : `/${lang}`;

  if (!t) return null;

  return (
    <footer className="border-t border-white/10 bg-[#050d12] text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-md">
          <Link
            href={homeHref}
            className="inline-block"
            aria-label="WeCan For Development"
          >
            <Image src={logo} alt="logo" width={180} height={187.5} />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {t.footer.blurb}
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm font-medium">
          <a href="#services" className="transition hover:text-[#9FE870]">
            {t.nav.services}
          </a>
          <a href="#works" className="transition hover:text-[#9FE870]">
            {t.nav.works}
          </a>
          <a href="#contact" className="transition hover:text-[#9FE870]">
            {t.nav.contact}
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div
          className="mx-auto flex max-w-6xl flex-col
         gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center
          sm:justify-center sm:px-6 lg:px-8"
        >
          <p>{t.footer.rights}</p>
          <Link href={homeHref} className="text-[#8bc76d]">
            WeCan For Development
            <span className=" text-slate-500">
              {" "}
              © {year} - {new Date().getFullYear()} .
            </span>
          </Link>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
