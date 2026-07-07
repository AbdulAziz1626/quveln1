"use client";

import { useEffect, useState } from "react";
import { heroCall } from "@/data/industries";
import { Icon } from "@/components/Icon";
import { liveAiHref } from "@/config/site";

export function CallCard({ float = false, withCta = false }: { float?: boolean; withCta?: boolean }) {
  const total = heroCall.length + 1; // +1 for booked chip
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(total);
      return;
    }
    let timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setShown(0);
      for (let i = 1; i <= total; i++) {
        timers.push(setTimeout(() => setShown(i), 600 + i * 1400));
      }
      timers.push(setTimeout(run, 600 + total * 1400 + 4500));
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, [total]);

  return (
    <div
      className={`relative mx-auto w-full max-w-[470px] rounded-3xl bg-gradient-to-b from-[#0D1220] to-dark-panel p-[26px] text-white shadow-[0_24px_70px_rgba(13,18,32,0.35),0_2px_6px_rgba(13,18,32,0.2)] ${
        float ? "animate-cardFloat" : ""
      }`}
      aria-label="Example of Quvel answering a live call"
    >
      <div className="mb-[18px] flex items-center gap-[14px] border-b border-white/[0.08] pb-4">
        <span className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-xl bg-[#3b82f6]/[0.15] text-[#6C9AF7]">
          <Icon name="phone" size={20} />
        </span>
        <div>
          <div className="text-[15px] font-semibold text-white">Incoming call</div>
          <div className="flex items-center gap-1.5 text-[12.5px] text-[#8B93A1]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34d399]" />
            Quvel answered
          </div>
        </div>
        <div className="ml-auto flex h-[22px] items-center gap-[3px]" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="w-[3px] rounded-sm bg-[#4F82F0] animate-wavebar"
              style={{ animationDelay: `${i * 0.15}s`, height: 6 }}
            />
          ))}
        </div>
      </div>

      <div className="flex min-h-[230px] flex-col gap-[11px]">
        {heroCall.map((m, i) => (
          <div
            key={i}
            className={`max-w-[88%] rounded-2xl px-[15px] py-[11px] text-[14.5px] leading-[1.45] transition-all duration-[450ms] ${
              m.ai
                ? "self-end rounded-br-[4px] bg-accent text-white"
                : "self-start rounded-bl-[4px] bg-white/[0.07] text-[#E8EAEE]"
            } ${i < shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"}`}
          >
            <span className="mb-[3px] block text-[10.5px] font-semibold uppercase tracking-[0.06em] opacity-60">
              {m.who}
            </span>
            {m.msg}
          </div>
        ))}
        <div
          className={`inline-flex items-center gap-2 self-center rounded-full border border-[#34d399]/35 bg-[#34d399]/[0.12] px-4 py-[9px] text-[13px] font-semibold text-[#34d399] transition-all duration-[450ms] ${
            shown >= total ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"
          }`}
        >
          <Icon name="checkSm" size={15} /> Appointment booked — Thu 9:00 AM
        </div>
      </div>

      {withCta && (
        <div className="mt-[18px] border-t border-white/[0.08] pt-4">
          <a
            href={liveAiHref}
            className="flex w-full items-center justify-center gap-2 rounded-[14px] border border-white/[0.14] bg-white/[0.06] px-[26px] py-[15px] text-base font-semibold text-white transition-all hover:-translate-y-px hover:border-white/30 hover:bg-white/[0.12]"
          >
            <Icon name="phone" size={18} /> Call the AI Live
          </a>
        </div>
      )}
    </div>
  );
}
