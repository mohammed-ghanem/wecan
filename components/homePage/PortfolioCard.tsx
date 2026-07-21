"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type PortfolioCardProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  cta: string;
  /** Optional live project / app link */
  projectUrl?: string;
  /** Label shown for the project link */
  projectLabel?: string;
};

const PLACEHOLDER_ACCENT = "#9FE870";

export default function PortfolioCard({
  title,
  description,
  url,
  image,
  cta,
  projectUrl,
  projectLabel,
}: PortfolioCardProps) {
  const hasBehance = Boolean(url?.trim());
  const hasProject = Boolean(projectUrl?.trim());
  const mediaHref = hasBehance ? url : hasProject ? projectUrl : undefined;

  const mediaContent = image ? (
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover transition duration-500 group-hover:scale-[1.03]"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  ) : (
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(145deg, ${PLACEHOLDER_ACCENT}33 0%, #0a1a22 48%, #07131a 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(159,232,112,0.12),transparent_40%)]" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span
          className="inline-block h-1 w-12 rounded-full"
          style={{ background: PLACEHOLDER_ACCENT }}
          aria-hidden
        />
      </div>
    </div>
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5">
      {mediaHref ? (
        <a
          href={mediaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-16/10 overflow-hidden"
        >
          {mediaContent}
        </a>
      ) : (
        <div className="relative aspect-16/10 overflow-hidden">{mediaContent}</div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {hasBehance || hasProject ? (
          <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            {hasBehance ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-[#9FE870]"
              >
                {cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}

            {hasProject ? (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#9FE870]/90 transition hover:text-[#9FE870]"
              >
                {projectLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
