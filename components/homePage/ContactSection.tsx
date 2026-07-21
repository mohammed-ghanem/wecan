"use client";

import TranslateHook from "@/translate/TranslateHook";
import portfolioData from "@/data/projects.json";

export default function ContactSection() {
  const translate = TranslateHook();
  const t = translate?.wecan?.contact;
  const email = portfolioData.company.email;

  if (!t) return null;

  return (
    <section
      id="contact"
      className="relative border-t border-white/10 bg-[#050d12] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(135deg,rgba(159,232,112,0.12),rgba(45,212,191,0.08)_45%,rgba(7,19,26,0.9))] p-8 sm:p-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 max-w-xl text-base text-slate-300 sm:text-lg">{t.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center rounded-full bg-[#9FE870] px-6 py-3 text-sm font-semibold text-[#061018] transition hover:bg-[#b6f08f]"
            >
              {t.cta}
            </a>
            <p className="text-sm text-slate-400" dir="ltr">
              {email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
