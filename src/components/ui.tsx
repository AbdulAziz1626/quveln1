import Link from "next/link";
import { siteConfig, liveAiHref } from "@/config/site";
import { Icon } from "@/components/Icon";

export function DemoButton({
  label = "Book a Demo",
  variant = "primary",
}: {
  label?: string;
  variant?: "primary" | "light";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[14px] font-semibold text-base px-[26px] py-[15px] transition-transform transition-shadow duration-200 whitespace-nowrap max-[480px]:w-full";
  const style =
    variant === "light"
      ? "bg-white text-ink hover:-translate-y-0.5 hover:bg-[#ececf0]"
      : "bg-ink text-white shadow-sm hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_12px_28px_rgba(16,24,40,0.22)]";
  return (
    <a
      href={siteConfig.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${style}`}
    >
      {label}
    </a>
  );
}

export function CallButton({
  label = "Call the AI Live",
  variant = "outline",
}: {
  label?: string;
  variant?: "outline" | "dark";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[14px] font-semibold text-base px-[26px] py-[15px] transition-all duration-200 whitespace-nowrap max-[480px]:w-full";
  const style =
    variant === "dark"
      ? "bg-white/[0.06] text-white border border-white/[0.14] hover:bg-white/[0.12] hover:border-white/30 hover:-translate-y-0.5"
      : "bg-white text-accent border-[1.5px] border-line hover:border-accent hover:bg-accent-bg hover:-translate-y-0.5";
  return (
    <a href={liveAiHref} className={`${base} ${style}`}>
      <Icon name="phone" size={19} />
      <span>{label}</span>
    </a>
  );
}

export function CtaRow() {
  return (
    <div className="flex flex-wrap justify-center gap-[14px] max-[480px]:flex-col max-[480px]:w-full">
      <DemoButton />
      <CallButton />
    </div>
  );
}

export function IconSquare({
  name,
  large = false,
}: {
  name: Parameters<typeof Icon>[0]["name"];
  large?: boolean;
}) {
  return (
    <span
      className={`iq inline-flex items-center justify-center border border-accent/[0.14] bg-accent-bg text-accent transition-all duration-300 ${
        large ? "h-[60px] w-[60px] rounded-2xl" : "h-[52px] w-[52px] rounded-[14px]"
      }`}
    >
      <Icon name={name} size={large ? 28 : 24} />
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="reveal mx-auto mb-[60px] max-w-[660px] text-center">
      {eyebrow && (
        <p className="mb-[14px] text-[12.5px] font-semibold uppercase tracking-[0.1em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[clamp(28px,3.8vw,42px)] font-bold leading-[1.07] tracking-[-0.02em] text-balance">
        {title}
      </h2>
      {sub && (
        <p className="mx-auto mt-[18px] max-w-[600px] text-[clamp(16.5px,1.9vw,19px)] leading-[1.65] text-ink-soft">
          {sub}
        </p>
      )}
    </div>
  );
}

export function BackLink() {
  return (
    <Link
      href="/"
      className="mb-6 inline-flex items-center gap-2 text-sm text-ink-faint transition-colors hover:text-ink"
    >
      <Icon name="back" size={16} /> Back to home
    </Link>
  );
}
