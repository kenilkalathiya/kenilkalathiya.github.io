import { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import useActiveSection from "../../hooks/useActiveSection";
import ThemeToggle from "../ui/ThemeToggle";
import SocialLinks from "../ui/SocialLinks";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "field-notes", label: "Field Notes" },
  { id: "contact", label: "Contact" },
];
const SECTION_IDS = NAV_LINKS.map((link) => link.id);

// The tracks, each its own route (Home reused with a `track` prop, "All"
// leaves it unset for the combined/unfiltered view) — separate from
// NAV_LINKS, which just scroll within whichever page is currently active.
const TRACKS = [
  { path: "/all", label: "All" },
  { path: "/software", label: "Software" },
  { path: "/autonomous-systems", label: "Autonomous Systems" },
];

function TrackLinks({ className = "", pillClassName = "", onNavigate }) {
  const { pathname } = useLocation();
  return (
    <div className={className}>
      {TRACKS.map((t) => (
        <Link
          key={t.path}
          to={t.path}
          onClick={onNavigate}
          className={`whitespace-nowrap rounded font-mono uppercase tracking-wide transition-colors ${pillClassName} ${
            pathname === t.path
              ? "bg-accent text-night"
              : "text-ink-secondary hover:bg-panel-elev hover:text-ink"
          }`}
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isProjectPage = pathname.startsWith("/project/");

  // Section links (and the logo) always target a track page: on a project
  // page that's the track the visitor came from, or the default track for a
  // direct link. Updated during render so it's current for this very render.
  const lastTrackRef = useRef("/autonomous-systems");
  if (TRACKS.some((t) => t.path === pathname)) lastTrackRef.current = pathname;
  const basePath = isProjectPage ? lastTrackRef.current : pathname;

  // A project page has none of the scroll-spied sections, so mark "Projects"
  // as the section it belongs to instead of whatever was last in view.
  const spiedId = useActiveSection(SECTION_IDS, pathname);
  const activeId = isProjectPage ? "projects" : spiedId;

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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-hairline bg-night/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-content items-center justify-between px-6 sm:px-10 lg:px-16">
          <HashLink smooth to={`${basePath}#home`} className="flex shrink-0 items-baseline gap-2">
            <span className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-accent sm:text-base">
              Mr.
            </span>
            <span className="font-heading text-3xl font-bold uppercase tracking-wide text-ink drop-shadow-[0_0_20px_rgba(226,99,44,0.25)] sm:text-4xl">
              Kenil
            </span>
          </HashLink>

          <div className="ml-8 hidden items-center gap-5 xl:flex">
            <TrackLinks className="flex items-center gap-1 rounded border border-hairline p-1" pillClassName="px-3 py-1.5 text-xs" />
            <span className="h-6 w-px bg-hairline" />
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <HashLink
                  key={link.id}
                  smooth
                  to={`${basePath}#${link.id}`}
                  className={`whitespace-nowrap font-mono text-sm uppercase tracking-[0.1em] transition-colors ${
                    activeId === link.id ? "text-accent" : "text-ink-secondary hover:text-ink"
                  }`}
                >
                  {link.label}
                </HashLink>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <ThemeToggle />
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="relative z-[60] text-2xl text-ink"
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/tablet menu — a sibling of <header>, not nested inside it, and
          only mounted at all while open (via AnimatePresence) rather than
          hidden with a CSS transform. That rules out the whole class of
          "technically hidden but still interfering" bugs this element kept
          hitting. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 70,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 40,
              backgroundColor: "rgb(var(--color-night))",
            }}
            className="flex flex-col justify-between border-l border-hairline xl:hidden"
          >
            <div className="flex flex-col items-center gap-8 pt-16">
              <TrackLinks
                className="flex flex-wrap items-center justify-center gap-2 px-4"
                pillClassName="border border-hairline px-3 py-2 text-xs"
                onNavigate={() => setIsOpen(false)}
              />

              <nav className="flex w-full flex-col items-center gap-3">
                {NAV_LINKS.map((link) => (
                  <HashLink
                    key={link.id}
                    smooth
                    to={`${basePath}#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`w-4/5 max-w-xs whitespace-nowrap rounded px-6 py-3 text-center font-mono text-xl uppercase tracking-[0.15em] transition-colors ${
                      activeId === link.id
                        ? "bg-accent text-night"
                        : "text-ink-secondary hover:bg-panel-elev hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </HashLink>
                ))}
              </nav>
            </div>
            <SocialLinks className="flex justify-center gap-8 pb-12 text-2xl text-ink-secondary" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
