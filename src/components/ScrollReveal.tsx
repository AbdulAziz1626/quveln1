"use client";

import { useEffect } from "react";

/**
 * Adds the `in` class to any element with `.reveal` or `.stagger`
 * when it scrolls into view. Mounted once in the root layout.
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .stagger"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  });

  return null;
}
