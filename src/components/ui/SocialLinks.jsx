import { SiGithub, SiLinkedin } from "react-icons/si";
import { socials } from "../../data/site";

const ICONS = { github: SiGithub, linkedin: SiLinkedin };

// Shared by the hero, footer and mobile menu so the list lives in one place
// (data/site.js); each caller only supplies its own layout classes.
export default function SocialLinks({ className = "" }) {
  return (
    <div className={className}>
      {socials.map(({ id, href, label }) => {
        const Icon = ICONS[id];
        return (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-colors hover:text-accent"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
