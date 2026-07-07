"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/#how", label: "How it Works" },
  { href: "/#features", label: "Features" },
  { href: "/#industries", label: "Industries" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-[100] bg-white/[0.82] backdrop-blur-[14px] transition-[border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-line shadow-[0_1px_12px_rgba(16,24,40,0.04)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid h-[70px] w-full max-w-wrap grid-cols-[auto_1fr_auto] items-center gap-4 px-6 min-[1001px]:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="flex items-center gap-[10px] justify-self-start font-display text-[20px] font-bold tracking-[-0.01em] text-ink"
          aria-label="Quvel home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-accent shadow-[0_2px_8px_rgba(37,99,235,0.35)]">
            <svg viewBox="0 0 24 24" fill="none" className="h-[19px] w-[19px]">
              <circle cx="12" cy="11" r="6.2" stroke="#fff" strokeWidth="2.1" />
              <circle cx="12" cy="11" r="2.2" fill="#fff" />
              <path d="M16.6 15.6l3.2 3.2" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" />
            </svg>
          </span>
          Quvel
        </Link>

        <div
          className={`justify-self-center max-[1000px]:fixed max-[1000px]:inset-x-0 max-[1000px]:top-[70px] max-[1000px]:flex-col max-[1000px]:items-stretch max-[1000px]:gap-0 max-[1000px]:border-b max-[1000px]:border-line max-[1000px]:bg-white/[0.98] max-[1000px]:py-2 max-[1000px]:backdrop-blur-[14px] max-[1000px]:transition-transform max-[1000px]:duration-300 flex items-center gap-8 ${
            open ? "max-[1000px]:translate-y-0" : "max-[1000px]:-translate-y-[130%]"
          }`}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink max-[1000px]:px-6 max-[1000px]:py-[15px] max-[1000px]:text-base"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={siteConfig.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-center font-semibold max-[1000px]:mx-6 max-[1000px]:mb-3 max-[1000px]:mt-2 max-[1000px]:block max-[1000px]:rounded-xl max-[1000px]:bg-ink max-[1000px]:p-[13px] max-[1000px]:text-white"
          >
            Book a Demo
          </a>
        </div>

        <div className="flex items-center gap-3 justify-self-end">
          <a
            href={siteConfig.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-ink px-[18px] py-[10px] text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-black hover:shadow-[0_8px_20px_rgba(16,24,40,0.18)] max-[1000px]:hidden"
          >
            Book a Demo
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="hidden h-10 w-10 items-center justify-center text-ink max-[1000px]:flex"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
