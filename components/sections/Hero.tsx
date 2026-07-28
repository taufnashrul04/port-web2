"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, focusAreas } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks } from "@/components/ui/SocialLinks";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-page px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
      <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left — masthead */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="kicker mb-6 flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 bg-red" />
            Portfolio · {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            aria-label={profile.name}
            className="font-serif text-[3.25rem] font-medium leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-[5.25rem]"
          >
            Ahmad
            <br />
            Taufiq <span className="text-red">Nashrulloh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-7 max-w-xl"
          >
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-muted">
              {profile.roles.join("  /  ")}
            </p>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted">
              {profile.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-red"
            >
              Selected Work
              <Icon
                name="arrow"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 border border-ink px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-red hover:text-red"
            >
              <Icon name="download" size={16} />
              Download CV
            </a>
            <SocialLinks className="ml-1" />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.42, ease }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5"
          >
            {focusAreas.map((f) => (
              <li key={f} className="font-mono text-2xs uppercase tracking-wide text-faint">
                {f}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right — portrait on colour-matched red plate */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="lg:col-span-5"
        >
          <div className="relative ml-auto max-w-sm">
            {/* offset ink frame */}
            <span
              aria-hidden
              className="absolute -bottom-3 -right-3 h-full w-full border border-ink"
            />
            {/* red plate — same hue as the photo background, so edges bleed */}
            <div className="plate relative overflow-hidden px-7 pt-9">
              <span className="absolute left-4 top-3 font-mono text-2xs uppercase tracking-[0.2em] text-paper/70">
                Portrait / 2026
              </span>
              <Image
                src={profile.photo}
                alt={`${profile.name}, ${profile.title}`}
                width={366}
                height={484}
                priority
                className="mx-auto block w-full select-none"
              />
            </div>
          </div>
          <p className="mt-6 text-right font-mono text-2xs uppercase tracking-[0.16em] text-faint sm:mt-8">
            Electrical Engineer · Front-End Developer
          </p>
        </motion.div>
      </div>
    </section>
  );
}
