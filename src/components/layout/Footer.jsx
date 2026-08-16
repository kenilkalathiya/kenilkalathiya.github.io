import { HashLink } from "react-router-hash-link";
import { SiInstagram, SiLinkedin, SiX, SiGithub } from "react-icons/si";
import Container from "../ui/Container";

const SOCIALS = [
  { icon: SiGithub, href: "https://github.com/kenilkalathiya", label: "GitHub" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/kenil-kalathiya-9422021b6/", label: "LinkedIn" },
  { icon: SiInstagram, href: "https://www.instagram.com/kenil_kalathiya_007", label: "Instagram" },
  { icon: SiX, href: "https://twitter.com/KenilKalathiya1", label: "X" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-night">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs tracking-wide text-ink-muted">
          © {new Date().getFullYear()} Kenil Kalathiya
        </p>

        <div className="flex items-center gap-6 text-lg text-ink-secondary">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} className="transition-colors hover:text-accent">
              <Icon />
            </a>
          ))}
        </div>

        <HashLink
          smooth
          to="/#home"
          className="font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary transition-colors hover:text-accent"
        >
          Back to top ↑
        </HashLink>
      </Container>
    </footer>
  );
}
