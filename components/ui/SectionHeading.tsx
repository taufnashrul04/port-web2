import { Reveal } from "./Reveal";

/**
 * Editorial section header:
 * 01 ─────────────────────────────
 * Title in serif            caption
 */
export function SectionHeading({
  index,
  title,
  caption,
}: {
  index: string;
  title: string;
  caption?: string;
}) {
  return (
    <Reveal className="mb-10">
      <div className="mb-3 flex items-center gap-4">
        <span className="index-mark">{index}</span>
        <span className="rule" />
        {caption && <span className="kicker shrink-0">{caption}</span>}
      </div>
      <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
