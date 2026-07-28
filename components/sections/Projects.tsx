import { projects } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusDot } from "@/components/ui/StatusDot";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading index="04" title="Selected Work" caption="shipped & in flight" />

      <div className="border-t border-line">
        {projects.map((p, i) => {
          const body = (
            <div className="grid gap-4 py-8 sm:grid-cols-12 sm:gap-6">
              <div className="flex items-start justify-between sm:col-span-3 sm:block">
                <span className="font-serif text-4xl font-medium text-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-3">
                  <StatusDot status={p.status} />
                </div>
              </div>

              <div className="sm:col-span-9">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl font-medium text-ink group-hover/card:text-red">
                    {p.name}
                  </h3>
                  {p.href && (
                    <Icon
                      name="arrowUpRight"
                      size={16}
                      className="text-faint transition-colors group-hover/card:text-red"
                    />
                  )}
                </div>
                <p className="mt-1 font-mono text-2xs uppercase tracking-wide text-faint">
                  {p.tagline} · {p.year}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </div>
          );

          return (
            <Reveal as="div" key={p.name} delay={i * 0.05}>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} — open project`}
                  className="group/card block border-b border-line transition-colors hover:bg-paper-tint"
                >
                  {body}
                </a>
              ) : (
                <div className="group/card border-b border-line">{body}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
