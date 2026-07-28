import type { ReactNode } from "react";

interface PanelProps {
  label?: string;
  code?: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  as?: "div" | "article" | "section" | "li";
}

/**
 * Editorial block: hairline border on paper, squared corners.
 * Optional mono label row with an underline rule — reads like a
 * catalogue entry, not a console panel.
 */
export function Panel({
  label,
  code,
  right,
  children,
  className = "",
  bodyClassName = "",
  as: Tag = "div",
}: PanelProps) {
  return (
    <Tag className={`border border-line bg-paper ${className}`}>
      {(label || right || code) && (
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3">
          <div className="flex items-center gap-2.5">
            {code && <span className="font-mono text-2xs text-red">{code}</span>}
            {label && (
              <span className="kicker text-ink-soft">{label}</span>
            )}
          </div>
          {right && <div className="shrink-0">{right}</div>}
        </div>
      )}
      <div className={`px-5 py-5 ${bodyClassName}`}>{children}</div>
    </Tag>
  );
}
