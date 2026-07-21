"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LangUseParams from "@/translate/LangUseParams";
import TranslateHook from "@/translate/TranslateHook";
import GlobeBtn from "./GlobeBtn";
import { defaultLocale } from "@/constants/locales";
import logo from "@/public/assets/images/logo.png";
import Image from "next/image";

export default function Header() {
  const lang = (LangUseParams() as string) || defaultLocale;
  const translate = TranslateHook();
  const t = translate?.wecan?.nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!t) return null;

  const homeHref = lang === "ar" || lang === defaultLocale ? "/" : `/${lang}`;

  const items = [
    { href: "#home", label: t.home },
    { href: "#services", label: t.services },
    { href: "#works", label: t.works },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#07131a]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <Link href={homeHref} className="group shrink-0" aria-label="WeCan For Development">
          <Image src={logo} alt="logo" width={180} height={187.5} />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-[#9FE870]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <GlobeBtn />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <GlobeBtn />
          <button
            type="button"
            aria-label="Menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#07131a]/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-[#9FE870]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
