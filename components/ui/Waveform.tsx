"use client";

import { motion } from "framer-motion";

/**
 * Oscilloscope-style trace that draws itself in, then a scan pulse sweeps.
 * Decorative — hidden from assistive tech.
 */
export function Waveform({ className = "" }: { className?: string }) {
  const d =
    "M0 40 H60 L72 40 78 18 86 62 94 40 H150 L160 40 166 28 172 52 178 40 H240 L250 40 256 8 264 72 272 40 H340 L352 40 358 30 364 50 370 40 H460";
  return (
    <svg
      viewBox="0 0 460 80"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="40" x2="460" y2="40" stroke="#232833" strokeWidth="1" />
      <motion.path
        d={d}
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 0 4px rgba(56,189,248,0.5))" }}
      />
    </svg>
  );
}
