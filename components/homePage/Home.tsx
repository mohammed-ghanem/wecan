"use client";

import TranslateHook from "@/translate/TranslateHook";
import HeroDigitalBackdrop from "./HeroDigitalBackdrop";
import ServicesSection from "./ServicesSection";
import DesignsSection from "./DesignsSection";
import ContactSection from "./ContactSection";

export default function Home() {
  const translate = TranslateHook();
  const t = translate?.wecan;

  if (!t) return null;

  return (
    <div className="wecan-page text-slate-100">
      <section
        id="home"
        className="relative isolate min-h-svh overflow-hidden pt-28 sm:pt-32"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#07131a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(159,232,112,0.12),transparent_45%)]" />
          <div className="wecan-grid absolute inset-0 opacity-[0.22]" />
          <div className="wecan-orb absolute -inset-s-24 top-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
          <div className="wecan-orb-delayed absolute -inset-e-16 bottom-10 h-80 w-80 rounded-full bg-lime-300/15 blur-3xl" />
          <HeroDigitalBackdrop />
        </div>

        <div className="mx-auto flex min-h-[calc(100svh-6rem)] max-w-6xl flex-col justify-center px-4 pb-20 sm:px-6 lg:px-8">
          <p className="wecan-fade-up mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-teal-200/80 delay-100 sm:text-sm">
            {t.hero.eyebrow}
          </p>

          <h1 className="wecan-fade-up font-display text-4xl font-bold leading-[1.05] tracking-tight text-white delay-100 sm:text-6xl lg:text-7xl">
            <span className="block text-[#9FE870]">WeCan</span>
            <span className="mt-2 block text-white/95">For Development</span>
          </h1>

          <p className="wecan-fade-up mt-6 max-w-2xl text-base leading-relaxed text-slate-300 delay-200 sm:text-xl">
            {t.hero.headline} {t.hero.support}
          </p>

          <div className="wecan-fade-up mt-10 flex flex-wrap gap-3 delay-300">
            <a
              href="#works"
              className="inline-flex items-center justify-center rounded-full bg-[#9FE870] px-6 py-3 text-sm font-semibold text-[#061018] transition hover:bg-[#b6f08f] hover:shadow-[0_0_30px_rgba(159,232,112,0.35)]"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-[#9FE870]/50 hover:bg-white/10"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Portfolio gallery — design, development & more */}
      <DesignsSection />

      <ContactSection />
    </div>
  );
}
