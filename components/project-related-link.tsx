import Image from "next/image";

const platforms = [
  { host: "instagram.com", name: "Instagram", icon: "instagram" },
  { host: "apps.apple.com", name: "App Store", icon: "appstore" },
  { host: "play.google.com", name: "Google Play", icon: "googleplay" },
  { host: "amazon.com.br", name: "Amazon", icon: "amazon" },
  { host: "amazon.com", name: "Amazon", icon: "amazon" },
];

export function ProjectRelatedLink({ href, label }: { href: string; label: string }) {
  const isWeb = /^https?:\/\//.test(href);
  const hostname = isWeb ? new URL(href).hostname.replace(/^www\./, "") : "";
  const platform = platforms.find(item => hostname === item.host);
  const name = platform?.name ?? (isWeb ? "Website" : label);
  return (
    <a href={href} className={platform ? "project-platform-link" : undefined}
      aria-label={name} title={name} target={isWeb ? "_blank" : undefined}
      rel={isWeb ? "noreferrer" : undefined}>
      {platform ? <Image src={`/assets/social/${platform.icon}.svg`} width={24} height={24} alt="" /> : name}
    </a>
  );
}
