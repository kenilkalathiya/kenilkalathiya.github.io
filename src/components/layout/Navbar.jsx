import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { SiInstagram, SiLinkedin, SiX, SiGithub } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";
import useActiveSection from "../../hooks/useActiveSection";
import ThemeToggle from "../ui/ThemeToggle";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  { icon: SiGithub, href: "https://github.com/kenilkalathiya", label: "GitHub" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/kenil-kalathiya-9422021b6/", label: "LinkedIn" },
  { icon: SiInstagram, href: "https://www.instagram.com/kenil_kalathiya_007", label: "Instagram" },
  { icon: SiX, href: "https://twitter.com/KenilKalathiya1", label: "X" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", isOpen);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-hairline bg-night/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[70px] max-w-content items-center justify-between px-6 sm:px-10 lg:px-16">
        <HashLink smooth to="/#home" className="flex items-baseline gap-2">
          <span className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-accent sm:text-base">
            Mr.
          </span>
          <span className="font-heading text-3xl font-bold uppercase tracking-wide text-ink drop-shadow-[0_0_20px_rgba(226,99,44,0.25)] sm:text-4xl">
            Kenil
          </span>
        </HashLink>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <HashLink
                key={link.id}
                smooth
                to={`/#${link.id}`}
                className={`font-mono text-base uppercase tracking-[0.1em] transition-colors ${
                  activeId === link.id ? "text-accent" : "text-ink-secondary hover:text-ink"
                }`}
              >
                {link.label}
              </HashLink>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-2xl text-ink"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu — fully opaque (not translucent) so it's readable
          regardless of what's scrolled behind it */}
      <div
        className={`fixed inset-0 top-[70px] flex flex-col justify-between border-l border-hairline bg-night transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-3 pt-16">
          {NAV_LINKS.map((link) => (
            <HashLink
              key={link.id}
              smooth
              to={`/#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`w-4/5 max-w-xs rounded px-6 py-3 text-center font-mono text-xl uppercase tracking-[0.15em] transition-colors ${
                activeId === link.id
                  ? "bg-accent text-night"
                  : "text-ink-secondary hover:bg-panel-elev hover:text-ink"
              }`}
            >
              {link.label}
            </HashLink>
          ))}
        </nav>
        <div className="flex justify-center gap-8 pb-12 text-2xl text-ink-secondary">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} className="transition-colors hover:text-accent">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
