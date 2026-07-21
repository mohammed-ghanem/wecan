"use client";

import { Code2, LayoutTemplate, Smartphone, Sparkles } from "lucide-react";
import TranslateHook from "@/translate/TranslateHook";

const serviceIcons = [LayoutTemplate, Code2, Smartphone, Sparkles];

export default function ServicesSection() {
  const translate = TranslateHook();
  const t = translate?.wecan?.services;

  if (!t) return null;

  return (
    <section
      id="services"
      className="relative border-t border-white/10 bg-[#061018] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-slate-400 sm:text-lg">{t.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((service: { title: string; text: string }, index: number) => {
            const Icon = serviceIcons[index] ?? Sparkles;
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:border-white/20 hover:bg-white/5"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                  <Icon className="h-5 w-5 text-[#9FE870]" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
