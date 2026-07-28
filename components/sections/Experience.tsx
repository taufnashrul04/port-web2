import { experiences } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusDot } from "@/components/ui/StatusDot";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading index="03" title="Experience" caption="work · community · field" />

      <div className="border-t border-line">
        {experiences.map((x, i) => (
          <Reveal
            as="div"
            key={`${x.org}-${x.role}`}
            delay={i * 0.04}
            className="grid gap-4 border-b border-line py-8 sm:grid-cols-12 sm:gap-6"
          >
            {/* meta column */}
            <div className="sm:col-span-3">
              <p className="font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                {x.period}
              </p>
              <div className="mt-2">
                <StatusDot status={x.status} />
              </div>
            </div>

            {/* content */}
            <div className="sm:col-span-9">
              <h3 className="font-serif text-xl font-medium text-ink">
                {x.role} <span className="text-red">/</span> {x.org}
              </h3>
              <p className="mt-1 font-mono text-2xs uppercase tracking-wide text-faint">
                {x.kind}
              </p>
              <ul className="mt-4 space-y-2">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-px w-3 shrink-0 bg-red" />
                    {p}
                  </li>
                ))}
              </ul>
              {x.href && (
                <a
                  href={x.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-wide text-ink hover:text-red"
                >
                  Visit
                  <Icon name="arrowUpRight" size={13} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
