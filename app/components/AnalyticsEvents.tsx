"use client";

import { useEffect } from "react";

export default function AnalyticsEvents() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(
      'a[data-affiliate="true"]'
    );

    const handleClick = (event: MouseEvent) => {
      const link = event.currentTarget as HTMLAnchorElement;

      if (typeof window !== "undefined" && "gtag" in window) {
        (
          window as typeof window & {
            gtag?: (...args: unknown[]) => void;
          }
        ).gtag?.("event", "affiliate_click", {
          link_url: link.href,
          link_text: link.textContent?.trim() || "Affiliate Link",
        });
      }
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return null;
}