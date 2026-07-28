# Ahmad Taufiq Nashrulloh — Portfolio

Professional portfolio site with an **Editorial Dossier** theme — warm paper, ink black, and a
single brand red (`#D40E0F`) sampled from the portrait's background so the photo sits on a
colour-matched red plate. Serif display (Fraunces) over clean sans (Inter), asymmetric grid,
numbered sections. Deliberately print-inspired, not a generic template.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Edit content

All copy lives in [`lib/data.ts`](lib/data.ts) — typed profile, experiences, projects, skills,
education, certifications, and socials. Change it there; the markup stays untouched.

## Profile photo

The portrait `public/foto.png` keeps its **red passport background on purpose** — that red is the
brand colour, and the hero places the photo on a plate of the exact same red for a seamless bleed.

A legacy chroma-key script (`scripts/process-photo.mjs`) can produce a transparent/duotone variant
if a background-free version is ever needed; it is not used by the current design.

## Structure

```
app/            layout, page, global theme
components/
  sections/     Hero, Metrics, About, Experience, Projects, Skills, Education, Contact
  ui/           Panel, StatusDot, Meter, Tag, Reveal, Waveform, Icon, SectionHeading …
lib/data.ts     single source of content
public/         processed photo + CV PDF
scripts/        asset tooling
```

## Deploy

Push to a Git host and import into [Vercel](https://vercel.com) — zero config. The CV is served
from `public/Ahmad_Taufiq_CV.pdf`.
