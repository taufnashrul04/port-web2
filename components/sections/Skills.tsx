import { skillGroups } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Meter } from "@/components/ui/Meter";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="05" title="Capabilities" caption="tools & disciplines" />

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal as="div" key={group.id} delay={gi * 0.04}>
            <div className="mb-4 flex items-baseline gap-3 border-b border-line pb-2">
              <span className="font-mono text-2xs text-red">
                {String(gi + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-lg font-medium text-ink">{group.label}</h3>
            </div>
            <ul className="space-y-4">
              {group.items.map((item, ii) => (
                <li key={item.name}>
                  <div className="mb-2 flex items-baseline justify-between gap-2">
                    <span className="text-sm text-ink">{item.name}</span>
                    <span className="font-mono text-2xs text-faint">{item.level}%</span>
                  </div>
                  <Meter level={item.level} delay={ii * 0.03} />
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
