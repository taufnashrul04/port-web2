import { profile, socials } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

export function Contact() {
  const email = socials.find((s) => s.icon === "mail")!;
  return (
    <Section id="contact">
      <SectionHeading index="06" title="Contact" caption="open a channel" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-6">
          <p className="lead max-w-md">
            Looking for someone who bridges hardware and the web?
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            Grab the full résumé or send a message. I reply fast.
          </p>
          <a
            href={profile.cv}
            download
            className="mt-8 inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-red"
          >
            <Icon name="download" size={16} />
            Download CV
          </a>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-6">
          <div className="border-t border-line">
            <Channel icon="mail" label="Email" value={profile.email} href={email.href} />
            <Channel
              icon="phone"
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            />
            {socials
              .filter((s) => s.icon !== "mail")
              .map((s) => (
                <Channel
                  key={s.label}
                  icon={s.icon}
                  label={s.label}
                  value={`@${s.handle}`}
                  href={s.href}
                  external
                />
              ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Channel({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 border-b border-line py-4 transition-colors hover:text-red"
    >
      <span className="text-ink transition-colors group-hover:text-red">
        <Icon name={icon} size={18} />
      </span>
      <span className="w-20 shrink-0 font-mono text-2xs uppercase tracking-[0.14em] text-faint">
        {label}
      </span>
      <span className="min-w-0 flex-1 truncate text-sm text-ink transition-colors group-hover:text-red">
        {value}
      </span>
      <Icon
        name="arrowUpRight"
        size={15}
        className="text-faint transition-all group-hover:translate-x-0.5 group-hover:text-red"
      />
    </a>
  );
}
