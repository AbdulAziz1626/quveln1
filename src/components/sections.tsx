import { IconSquare } from "@/components/ui";
import { CtaRow } from "@/components/ui";
import type { IconName } from "@/components/Icon";
import type { IndustryFeature, TranscriptLine } from "@/data/industries";

export function InfoCard({
  icon,
  title,
  desc,
  num,
}: {
  icon: IconName;
  title: string;
  desc: string;
  num?: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-[30px] shadow-card transition-all duration-300 hover:-translate-y-[5px] hover:shadow-hover">
      {num && (
        <div className="mb-[14px] font-display text-[12.5px] font-bold tracking-[0.05em] text-accent">
          {num}
        </div>
      )}
      <IconSquare name={icon} />
      <h3 className="mb-2 font-display text-[19px] font-bold tracking-[-0.02em]">{title}</h3>
      <p className="text-[15px] leading-[1.55] text-ink-soft">{desc}</p>
    </div>
  );
}

export function CardGrid({
  items,
  numbered = false,
}: {
  items: IndustryFeature[];
  numbered?: boolean;
}) {
  return (
    <div className="stagger grid gap-5 min-[861px]:grid-cols-3">
      {items.map((f, i) => (
        <InfoCard
          key={f.t}
          icon={f.icon}
          title={f.t}
          desc={f.d}
          num={numbered ? `0${i + 1}` : undefined}
        />
      ))}
    </div>
  );
}

export function Steps({ steps }: { steps: IndustryFeature[] }) {
  return (
    <div className="stagger flex flex-wrap items-stretch justify-center max-[860px]:flex-col max-[860px]:gap-3">
      {steps.map((s, i) => (
        <div key={s.t} className="contents">
          <div className="flex min-w-[220px] flex-1 flex-col items-center rounded-2xl border border-line bg-white px-6 py-8 text-center shadow-card transition-all duration-300 hover:-translate-y-[5px] hover:shadow-hover">
            <div className="mb-[18px]">
              <IconSquare name={s.icon} large />
            </div>
            <h3 className="mb-2 font-display text-[18.5px] font-bold tracking-[-0.02em]">{s.t}</h3>
            <p className="text-[15px] text-ink-soft">{s.d}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center justify-center px-[10px] text-ink-faint max-[860px]:rotate-90 max-[860px]:py-1">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Transcript({ lines }: { lines: TranscriptLine[] }) {
  return (
    <div className="reveal mx-auto max-w-[620px] rounded-2xl border border-line bg-white p-7 shadow-card">
      {lines.map((b, i) => (
        <div
          key={i}
          className={`mb-[15px] flex flex-col gap-1 last:mb-0 ${b.ai ? "items-end" : ""}`}
        >
          <span
            className={`text-[11.5px] font-semibold uppercase tracking-[0.05em] ${
              b.ai ? "text-accent" : "text-ink-faint"
            }`}
          >
            {b.who}
          </span>
          <span
            className={`max-w-[85%] rounded-xl px-4 py-3 text-[15px] leading-[1.5] ${
              b.ai
                ? "self-end rounded-br-[4px] bg-accent text-white"
                : "self-start rounded-bl-[4px] bg-bg-alt text-ink"
            }`}
          >
            {b.msg}
          </span>
        </div>
      ))}
    </div>
  );
}

export function FinalCta() {
  return (
    <section className="cta-section relative overflow-hidden px-0 pb-[110px] text-center max-[768px]:pb-[76px]">
      <div className="mx-auto w-full max-w-wrap px-6">
        <div className="reveal relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#0D1220] to-dark-panel px-10 py-20 text-white max-[600px]:px-[22px] max-[600px]:py-[60px]">
          <svg
            className="pointer-events-none absolute -bottom-[430px] left-1/2 h-[900px] w-[900px] -translate-x-1/2 opacity-50"
            viewBox="0 0 800 800"
            aria-hidden="true"
          >
            <circle cx="400" cy="400" r="180" fill="none" stroke="rgba(79,130,240,0.16)" />
            <circle cx="400" cy="400" r="280" fill="none" stroke="rgba(79,130,240,0.16)" />
            <circle cx="400" cy="400" r="390" fill="none" stroke="rgba(79,130,240,0.16)" />
          </svg>
          <div className="relative z-[2]">
            <h2 className="mb-4 font-display text-[clamp(28px,3.8vw,42px)] font-bold leading-[1.07] tracking-[-0.02em] text-white text-balance">
              Ready to Stop Missing Customers?
            </h2>
            <p className="mx-auto mb-9 max-w-[600px] text-[clamp(16.5px,1.9vw,19px)] leading-[1.65] text-[#9AA3B2]">
              Book a demo or experience Quvel live.
            </p>
            <div className="flex flex-wrap justify-center gap-[14px] max-[480px]:flex-col">
              <a
                href="https://cal.com/james-quvel/15minute-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-white px-[26px] py-[15px] text-base font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-[#ececf0] max-[480px]:w-full"
              >
                Book a Demo
              </a>
              <CtaDark />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaDark() {
  return (
    <a
      href="tel:+14582168617"
      className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-white/25 bg-transparent px-[26px] py-[15px] text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/[0.06] max-[480px]:w-full"
    >
      <svg viewBox="0 0 24 24" width={19} height={19} fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      Call the AI Live
    </a>
  );
}
