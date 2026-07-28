import { socials } from "@/lib/data";
import { Icon } from "./Icon";

export function SocialLinks({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials
        .filter((s) => s.icon !== "mail")
        .map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} — ${s.handle}`}
            className="inline-flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors hover:border-red hover:text-red"
          >
            <Icon name={s.icon} size={size} />
          </a>
        ))}
    </div>
  );
}
