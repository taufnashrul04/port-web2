"use client";

import { motion } from "framer-motion";

/**
 * Thin editorial level bar — red fill over a hairline track,
 * grows on scroll into view.
 */
export function Meter({ level, delay = 0 }: { level: number; delay?: number }) {
  return (
    <div
      className="relative h-px w-full bg-line-strong"
      role="meter"
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.span
        className="absolute inset-y-0 left-0 bg-red"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
