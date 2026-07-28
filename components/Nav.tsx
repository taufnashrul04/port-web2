"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
import { Icon } from "./ui/Icon";

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Home">
          <span className="grid h-8 w-8 place-items-center border border-ink font-serif text-sm font-semibold text-ink">
            AT
          </span>
          <span className="hidden font-mono text-2xs uppercase tracking-[0.18em] text-muted sm:block">
            Ahmad Taufiq
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`group flex items-baseline gap-1.5 font-sans text-sm transition-colors ${
                active === n.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              <span
                className={`font-mono text-2xs ${
                  active === n.id ? "text-red" : "text-faint"
                }`}
              >
                {n.index}
              </span>
              {n.label}
            </a>
          ))}
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 bg-ink px-4 py-2 font-mono text-2xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-red"
          >
            <Icon name="download" size={13} />
            CV
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center border border-line text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon
            name="chevron"
            size={18}
            className={open ? "rotate-180 transition-transform" : "transition-transform"}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-5 py-3 md:hidden">
          <div className="grid grid-cols-2 gap-1">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-2 px-2 py-2 font-sans text-sm text-muted hover:text-red"
              >
                <span className="font-mono text-2xs text-faint">{n.index}</span>
                {n.label}
              </a>
            ))}
          </div>
          <a
            href={profile.cv}
            download
            className="mt-2 flex items-center justify-center gap-2 bg-ink px-4 py-2.5 font-mono text-2xs uppercase tracking-[0.14em] text-paper"
          >
            <Icon name="download" size={14} />
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
