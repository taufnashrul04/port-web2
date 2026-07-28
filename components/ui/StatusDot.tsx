import type { Status } from "@/lib/data";

const map: Record<Status | "available", { color: string; label: string }> = {
  live: { color: "bg-red", label: "LIVE" },
  active: { color: "bg-red", label: "ACTIVE" },
  learning: { color: "bg-ink", label: "LEARNING" },
  past: { color: "bg-faint", label: "ARCHIVED" },
  available: { color: "bg-red", label: "AVAILABLE" },
};

/**
 * Editorial status marker — a small square + mono label. No motion.
 */
export function StatusDot({
  status = "active",
  label,
  className = "",
}: {
  status?: Status | "available";
  label?: string;
  className?: string;
}) {
  const meta = map[status];
  const text = label ?? meta.label;
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`h-1.5 w-1.5 ${meta.color}`} />
      <span className="font-mono text-2xs uppercase tracking-[0.16em] text-muted">
        {text}
      </span>
    </span>
  );
}
