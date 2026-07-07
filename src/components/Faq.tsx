"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import type { FaqItem } from "@/data/industries";

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="reveal mx-auto max-w-[740px]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`mb-3 overflow-hidden rounded-[14px] border bg-white transition-all duration-200 ${
              isOpen ? "border-[#d7dce6] shadow-card" : "border-line shadow-sm hover:border-[#d7dce6]"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-[22px] py-5 text-left text-[16.5px] font-semibold text-ink"
            >
              <span>{it.q}</span>
              <span className={`flex-none text-ink-faint transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                <Icon name="chevron" size={20} />
              </span>
            </button>
            <div
              className="grid transition-all duration-300"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-[22px] pb-5 text-[15.5px] leading-[1.65] text-ink-soft">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
