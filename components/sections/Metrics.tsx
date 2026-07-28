import { metrics } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Metrics() {
  return (
    <section className="mx-auto max-w-page px-5 sm:px-8">
      <Reveal>
        <div className="grid grid-cols-2 border-y border-line sm:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`px-5 py-6 ${
                i !== metrics.length - 1 ? "border-b border-line sm:border-b-0 sm:border-r" : ""
              } ${i % 2 === 0 ? "border-r border-line sm:border-r" : ""}`}
            >
              <div className="kicker mb-3">{m.label}</div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-4xl font-medium tracking-tight text-ink">
                  {m.value}
                </span>
                {m.hint && <span className="font-mono text-2xs text-faint">{m.hint}</span>}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
