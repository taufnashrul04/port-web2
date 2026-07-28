import { profile, languages, focusAreas } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" title="About" caption="the short version" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <p className="lead">
            Electrical Engineering graduate bridging embedded systems and the modern web.
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {focusAreas.map((f) => (
              <Tag key={f}>{f}</Tag>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5 lg:pl-8">
          <dl className="border-t border-line">
            <Row k="Base" v={profile.location} />
            <Row k="Field" v="Electrical Engineering" />
            <Row k="Focus" v="Web · AI · Data" />
            {languages.map((l) => (
              <Row key={l.name} k={l.name} v={l.note} />
            ))}
            <Row k="Status" v="Open to roles" accent />
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

function Row({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-line py-3">
      <dt className="font-mono text-2xs uppercase tracking-[0.14em] text-faint">{k}</dt>
      <dd className={`font-sans text-sm ${accent ? "text-red" : "text-ink"}`}>{v}</dd>
    </div>
  );
}
