import { profile } from "@/lib/data";
import { SocialLinks } from "./ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center border border-ink font-serif text-2xs font-semibold text-ink">
            AT
          </span>
          <span className="font-mono text-2xs text-faint">
            © {year} {profile.name}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-2xs text-faint sm:block">
            Next.js · TypeScript · Tailwind
          </span>
          <SocialLinks size={16} />
        </div>
      </div>
    </footer>
  );
}
