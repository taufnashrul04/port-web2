import { education, certifications } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading index="02" title="Education & Training" caption="credentials" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <div className="border-t border-line pt-5">
            <h3 className="font-serif text-2xl font-medium text-ink">{education.school}</h3>
            <p className="mt-1 text-sm text-muted">{education.degree}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-2xs uppercase tracking-wide">
              <span className="text-faint">{education.period}</span>
              <span className="text-red">GPA {education.gpa}</span>
            </div>

            <p className="kicker mt-8 mb-3">Relevant Coursework</p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5 lg:pl-8">
          <div className="flex items-baseline justify-between border-t border-line pt-5">
            <p className="kicker">Certifications</p>
            <span className="font-mono text-2xs text-faint">{certifications.length} total</span>
          </div>
          <ul>
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex items-baseline justify-between gap-3 border-b border-line py-3"
              >
                <span className="text-sm text-ink">{c.name}</span>
                <span className="shrink-0 font-mono text-2xs uppercase tracking-wide text-faint">
                  {c.issuer}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
