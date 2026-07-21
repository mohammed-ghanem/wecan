"use client";

const CODE_LINES = [
  "const product = await ship({ design: true, code: true });",
  "ui.compose(tokens).withMotion(subtle)",
  "route('/ar') → rtl · route('/en') → ltr",
  "build → test → deploy → iterate",
  "<App lang={locale} performance=\"high\" />",
  "api.fetch('/projects').then(render)",
];

export default function HeroDigitalBackdrop() {
  return (
    <div className="wecan-hero-digital absolute inset-0 overflow-hidden" aria-hidden>
      <div className="wecan-scanlines absolute inset-0 opacity-[0.025]" />

      <div className="absolute inset-y-[8%] inset-e-0 w-[min(62%,46rem)] pe-2 sm:pe-6">
        <div className="wecan-code-rail absolute inset-0 opacity-40">
          {CODE_LINES.map((line, index) => (
            <p
              key={line}
              className="wecan-code-line font-mono text-[11px] leading-7 text-teal-200/35 sm:text-xs sm:leading-8"
              style={{ animationDelay: `${index * 0.45}s` }}
            >
              <span className="text-[#9FE870]/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="ms-3 text-slate-400/40">{line}</span>
            </p>
          ))}
        </div>

        <svg
          className="wecan-wire absolute inset-0 h-full w-full opacity-80"
          viewBox="0 0 640 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid meet"
        >
          <rect
            x="168"
            y="110"
            width="380"
            height="260"
            rx="18"
            stroke="rgba(159,232,112,0.22)"
            strokeWidth="1.25"
            className="wecan-frame"
          />
          <rect
            x="188"
            y="138"
            width="140"
            height="12"
            rx="6"
            fill="rgba(45,212,191,0.18)"
            className="wecan-pulse-bar"
          />
          <rect
            x="188"
            y="168"
            width="280"
            height="8"
            rx="4"
            fill="rgba(148,163,184,0.14)"
          />
          <rect
            x="188"
            y="188"
            width="220"
            height="8"
            rx="4"
            fill="rgba(148,163,184,0.1)"
          />
          <rect
            x="188"
            y="230"
            width="90"
            height="28"
            rx="14"
            fill="rgba(159,232,112,0.2)"
            className="wecan-pulse-bar"
            style={{ animationDelay: "0.8s" }}
          />
          <rect
            x="292"
            y="230"
            width="90"
            height="28"
            rx="14"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />

          <rect
            x="248"
            y="320"
            width="300"
            height="210"
            rx="16"
            stroke="rgba(45,212,191,0.18)"
            strokeWidth="1.25"
            className="wecan-frame-delayed"
          />
          <circle cx="276" cy="348" r="5" fill="rgba(159,232,112,0.45)" className="wecan-node" />
          <circle
            cx="300"
            cy="348"
            r="5"
            fill="rgba(45,212,191,0.35)"
            className="wecan-node"
            style={{ animationDelay: "0.4s" }}
          />
          <circle
            cx="324"
            cy="348"
            r="5"
            fill="rgba(148,163,184,0.35)"
            className="wecan-node"
            style={{ animationDelay: "0.8s" }}
          />
          <path
            d="M276 390 H500 M276 420 H460 M276 450 H420"
            stroke="rgba(148,163,184,0.16)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <path
            d="M80 180 C160 140, 220 240, 300 210"
            stroke="rgba(159,232,112,0.2)"
            strokeWidth="1.25"
            strokeDasharray="5 8"
            className="wecan-dash"
          />
          <path
            d="M120 480 C220 430, 280 560, 420 500"
            stroke="rgba(45,212,191,0.18)"
            strokeWidth="1.25"
            strokeDasharray="4 10"
            className="wecan-dash-reverse"
          />

          <text
            x="180"
            y="520"
            fill="rgba(159,232,112,0.28)"
            className="wecan-glyph font-mono text-[42px]"
          >
            {"</>"}
          </text>
          <text
            x="470"
            y="160"
            fill="rgba(45,212,191,0.22)"
            className="wecan-glyph-delayed font-mono text-[28px]"
          >
            {"{}"}
          </text>
        </svg>
      </div>
    </div>
  );
}
