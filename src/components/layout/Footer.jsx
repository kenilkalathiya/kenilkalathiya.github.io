import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import Container from "../ui/Container";
import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="border-t border-hairline bg-night">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs tracking-wide text-ink-muted">
          © {new Date().getFullYear()} Kenil Kalathiya
        </p>

        <SocialLinks className="flex items-center gap-6 text-lg text-ink-secondary" />

        <HashLink
          smooth
          to={`${pathname}#home`}
          className="font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary transition-colors hover:text-accent"
        >
          Back to top ↑
        </HashLink>
      </Container>
    </footer>
  );
}
