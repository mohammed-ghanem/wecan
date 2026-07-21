"use client";

import { useRouter, usePathname } from "next/navigation";
import langIcon from "@/public/assets/images/lang.svg";
import Image from "next/image";
import LangUseParams from "@/translate/LangUseParams";
import { defaultLocale } from "@/constants/locales";

const GlobeBtn = () => {
  const lang = LangUseParams() ?? defaultLocale;
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] === "en" || segments[0] === "ar") {
      segments[0] = newLang;
    } else {
      segments.unshift(newLang);
    }

    const path = "/" + segments.join("/");
    const query = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(path + query + hash);
  };

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white transition hover:border-[#9FE870]/40 hover:bg-white/10 hover:text-[#9FE870]"
      onClick={toggleLanguage}
      aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <span>{lang === "en" ? "AR" : "EN"}</span>
      <Image
        src={langIcon}
        alt=""
        width={22}
        height={22}
        className="opacity-90 brightness-0 invert"
      />
    </button>
  );
};

export default GlobeBtn;
