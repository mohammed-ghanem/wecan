"use client";

import TranslateHook from "@/translate/TranslateHook";
import portfolioData from "@/data/projects.json";

/** Digits only for https://wa.me/<number> (include country code, no +). */
function toWhatsAppHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}`;
}

export default function ContactSection() {
  const translate = TranslateHook();
  const t = translate?.wecan?.contact;
  const { email, phone } = portfolioData.company;
  const whatsappHref = toWhatsAppHref(phone);

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

            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-[#9FE870]/50 hover:bg-white/10"
              >
                {t.whatsapp}
              </a>
            ) : null}
          </div>

          
        </div>
      </div>
    </section>
  );
}
