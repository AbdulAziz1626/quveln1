import Link from "next/link";
import { siteConfig, liveAiHref } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-11 pb-9 text-ink">
      <div className="mx-auto w-full max-w-wrap px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-[10px] font-display text-[20px] font-bold tracking-[-0.01em]">
              <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-accent shadow-[0_2px_8px_rgba(37,99,235,0.35)]">
                <svg viewBox="0 0 24 24" fill="none" className="h-[19px] w-[19px]">
                  <circle cx="12" cy="11" r="6.2" stroke="#fff" strokeWidth="2.1" />
                  <circle cx="12" cy="11" r="2.2" fill="#fff" />
                  <path d="M16.6 15.6l3.2 3.2" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" />
                </svg>
              </span>
              Quvel
            </div>
            <div className="mt-1.5 text-[13px] text-ink-faint">{siteConfig.tagline}</div>
          </div>
          <div className="flex flex-wrap gap-[26px]">
            <a
              href={siteConfig.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              Book a Demo
            </a>
            <a href={liveAiHref} className="text-sm text-ink-soft transition-colors hover:text-ink">
              Call the AI Live
            </a>
            <Link href="/contact" className="text-sm text-ink-soft transition-colors hover:text-ink">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-ink-soft transition-colors hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-ink-soft transition-colors hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
        <div className="mt-[22px] w-full border-t border-line pt-[22px] text-[13px] text-ink-faint">
          © {new Date().getFullYear()} Quvel, a Brand of Hanvora Brand LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
