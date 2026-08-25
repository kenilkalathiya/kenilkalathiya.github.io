import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HashLink } from "react-router-hash-link";
import { SiInstagram, SiLinkedin, SiX, SiGithub } from "react-icons/si";
import { HiOutlineArrowDown } from "react-icons/hi";
import Button from "../components/ui/Button";
import profilePic from "../assets/home/profile-pic.png";

const SOCIALS = [
  { icon: SiGithub, href: "https://github.com/kenilkalathiya", label: "GitHub" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/kenil-kalathiya-9422021b6/", label: "LinkedIn" },
  { icon: SiInstagram, href: "https://www.instagram.com/kenil_kalathiya_007", label: "Instagram" },
  { icon: SiX, href: "https://twitter.com/KenilKalathiya1", label: "X" },
];

const STATS = [
  { value: "1+", label: "Years of Experience" },
  { value: "18+", label: "Completed Projects" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-night pt-24 pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-texture bg-grid opacity-60"
        style={{ maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)" }}
      />
      <div className="pointer-events-none absolute -left-40 -top-20 h-[420px] w-[420px] rounded-full bg-accent opacity-[0.14] blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[280px] w-[280px] rounded-full bg-accent opacity-[0.1] blur-[110px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-content grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <div className="mb-6 flex justify-center gap-5 text-xl text-ink-secondary lg:justify-start">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="transition-colors hover:text-accent">
                <Icon />
              </a>
            ))}
          </div>

          <p className="mb-2 font-mono text-sm tracking-[0.2em] text-ink-secondary">
            HI, MY NAME IS
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-6xl xl:text-7xl">
            Kenil Kalathiya
          </h1>

          <div className="mt-4 flex min-h-[2.5rem] items-center font-heading text-xl font-semibold text-accent sm:text-2xl lg:text-3xl">
            <span className="mr-2 text-ink-muted">I AM</span>
            <TypeAnimation
              sequence={[
                "ADAS Engineer",
                2000,
                "Autonomous Systems Engineer",
                2000,
                "Drone & Automation Enthusiast",
                2000,
                "Full-Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor
            />
          </div>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-secondary">
            Full-Stack Innovator &amp; Automotive Developer with a Passion for Problem Solving
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button hash="/#contact">Hire Me</Button>
            <Button variant="ghost" href="/Kenil-Kalathiya.pdf" download="Kenil-Kalathiya.pdf">
              Get Resume
            </Button>
          </div>

          <div className="mt-14 flex gap-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-mono text-3xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 max-w-[8rem] text-xs uppercase tracking-wide text-ink-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative order-1 mx-auto aspect-square w-full max-w-[220px] sm:max-w-[280px] lg:order-2 lg:max-w-[420px]"
        >
          <div className="absolute -inset-4 rounded-full border border-dashed border-strong" />
          <div className="absolute inset-0 overflow-hidden rounded-full border border-strong shadow-[0_0_60px_rgba(226,99,44,0.18)]">
            <img
              src={profilePic}
              alt="Kenil Kalathiya"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Corner ticks for the technical/HUD framing */}
          {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map(
            (pos) => (
              <span key={pos} className={`absolute h-6 w-6 border-accent ${pos}`} />
            )
          )}
        </motion.div>
      </div>

      <HashLink
        smooth
        to="/#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-ink-muted sm:block"
      >
        <HiOutlineArrowDown className="text-xl" />
      </HashLink>
    </section>
  );
}
