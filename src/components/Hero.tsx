import { DemoButton, CallButton } from "@/components/ui";
import { Icon, type IconName } from "@/components/Icon";

const tiles: {
  icon: IconName;
  variant: "white" | "blue" | "ink";
  style: React.CSSProperties;
  hideMobile?: boolean;
}[] = [
  { icon: "phone", variant: "white", style: { top: "26%", left: "6%", "--tilt": "-10deg", animationDelay: "0s" } as React.CSSProperties },
  { icon: "calendar", variant: "blue", style: { top: "58%", left: "13%", "--tilt": "8deg", animationDelay: "1.2s" } as React.CSSProperties },
  { icon: "transfer", variant: "ink", style: { top: "74%", left: "5%", "--tilt": "-6deg", animationDelay: "2.1s" } as React.CSSProperties, hideMobile: true },
  { icon: "mic", variant: "blue", style: { top: "24%", right: "7%", "--tilt": "-9deg", animationDelay: "0.7s" } as React.CSSProperties },
  { icon: "clock", variant: "white", style: { top: "56%", right: "12%", "--tilt": "10deg", animationDelay: "1.7s" } as React.CSSProperties },
  { icon: "message", variant: "ink", style: { top: "76%", right: "6%", "--tilt": "7deg", animationDelay: "2.6s" } as React.CSSProperties, hideMobile: true },
];

function tileClass(variant: "white" | "blue" | "ink") {
  if (variant === "blue") return "bg-accent text-white shadow-[0_12px_32px_rgba(37,99,235,0.35)]";
  if (variant === "ink") return "bg-ink text-white shadow-[0_12px_32px_rgba(14,17,22,0.3)]";
  return "bg-white border border-line text-accent shadow-[0_10px_30px_rgba(16,24,40,0.14)]";
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-0 pb-20 pt-[130px] max-[1000px]:pb-16 max-[1000px]:pt-[120px]">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,24,40,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(16,24,40,0.035) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 50% 40%,#000 25%,transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 65% at 50% 40%,#000 25%,transparent 72%)",
          }}
        />
        <div
          className="absolute h-[520px] w-[520px] blur-[24px]"
          style={{
            top: "14%",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(circle,rgba(37,99,235,0.10) 0%,transparent 65%)",
          }}
        />
      </div>

      {tiles.map((t, i) => (
        <div
          key={i}
          style={t.style}
          className={`absolute z-[1] flex h-16 w-16 items-center justify-center rounded-[18px] animate-tileFloat max-[900px]:h-[50px] max-[900px]:w-[50px] max-[900px]:rounded-[14px] ${tileClass(
            t.variant
          )} ${t.hideMobile ? "max-[900px]:hidden" : ""}`}
        >
          <Icon name={t.icon} size={28} className="max-[900px]:h-[22px] max-[900px]:w-[22px]" />
        </div>
      ))}

      <div className="reveal in relative z-[2] mx-auto flex w-full max-w-wrap flex-col items-center px-6 text-center">
        <span className="mb-[26px] inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.07em] text-ink-soft shadow-sm">
          <span className="h-[7px] w-[7px] rounded-full bg-accent animate-pulse2" />
          AI Receptionists for Service Businesses
        </span>
        <h1 className="mb-[22px] max-w-[900px] font-display text-[clamp(38px,4.8vw,60px)] font-bold leading-[1.07] tracking-[-0.02em] text-balance">
          Never Miss Another Customer.
        </h1>
        <p className="mx-auto mb-[38px] max-w-[600px] text-[clamp(16.5px,1.9vw,19px)] leading-[1.65] text-ink-soft">
          Quvel answers every call, books appointments, qualifies leads, and works
          24/7—so your business never loses another customer.
        </p>
        <div className="flex flex-wrap justify-center gap-[14px] max-[480px]:w-full max-[480px]:flex-col">
          <DemoButton />
          <CallButton />
        </div>
        <div className="mt-[18px] flex items-center justify-center gap-2 text-[13.5px] text-ink-faint">
          <Icon name="mic" size={15} className="text-accent" />
          Don&apos;t take our word for it—call the number and talk to it.
        </div>
      </div>
    </section>
  );
}
