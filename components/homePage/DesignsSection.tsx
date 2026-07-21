"use client";

import { ArrowUpRight } from "lucide-react";
import LangUseParams from "@/translate/LangUseParams";
import TranslateHook from "@/translate/TranslateHook";
import { defaultLocale } from "@/constants/locales";
import PortfolioCard from "./PortfolioCard";
import {
  behanceProfileUrl,
  designsData,
  pickLocalized,
} from "./StaticData";

export default function DesignsSection() {
  const lang = (LangUseParams() as string) || defaultLocale;
  const translate = TranslateHook();
  const t = translate?.wecan?.designs;

  if (!t) return null;

  return (
    <section
      id="works"
      className="relative border-t border-white/10 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(45,212,191,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-3 text-base text-slate-400 sm:text-lg">{t.subtitle}</p>
          </div>
          {/* {behanceProfileUrl ? (
            <a
              href={behanceProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-[#9FE870]/40 hover:text-[#9FE870]"
            >
              {t.viewAll}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null} */}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {designsData.map((design) => (
            <PortfolioCard
              key={design.id}
              title={pickLocalized(design.title, lang)}
              description={pickLocalized(design.description, lang)}
              url={design.behanceUrl || undefined}
              image={design.image || undefined}
              cta={t.openDesign}
              projectUrl={design.projectUrl || undefined}
              projectLabel={
                design.projectTitle
                  ? pickLocalized(design.projectTitle, lang)
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
