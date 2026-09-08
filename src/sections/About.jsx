import { FaCarSide, FaLayerGroup, FaCode, FaServer, FaArrowRight } from "react-icons/fa";
import { TbDrone } from "react-icons/tb";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import Container from "../components/ui/Container";
import { aboutMe } from "../data/site";

// Position-matched to aboutMe.services — each service gets its own icon
// rather than cycling, now that there are 5 entries instead of 4.
const ICONS = [FaCarSide, TbDrone, FaLayerGroup, FaCode, FaServer];

export default function About({ track }) {
  const { pathname } = useLocation();
  const services = track ? aboutMe.services.filter((s) => s.category === track) : aboutMe.services;

  return (
    <section id="about" className="bg-night py-16 md:py-24">
      <Container>
        <SectionHeading title={aboutMe.title} subtitle={aboutMe.subtitle} />

        {/* auto-fit + justify-center (instead of a fixed column count) so a
            filtered track with only 2-3 cards centers itself in the row
            rather than sitting left-aligned with empty trailing columns. */}
        <div className="grid justify-center gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,300px))] md:gap-6">
          {services.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <RevealOnScroll
                key={service.title}
                delay={index * 0.08}
                className="group flex h-full flex-col rounded-lg border border-hairline border-l-2 border-l-accent-dim bg-panel p-5 shadow-panel transition-all duration-300 hover:-translate-y-2 hover:border-l-accent hover:shadow-glow md:min-h-[320px] md:p-6"
              >
                <div className="mb-4 flex items-start justify-between md:mb-6">
                  <Icon className="text-2xl text-accent" />
                  <span className="font-mono text-xs text-ink-muted">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                  {service.title}
                </h3>
                <h4 className="mt-3 font-heading text-lg font-bold text-ink md:mt-4">{service.stack}</h4>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-secondary md:mt-3">
                  {service.description}
                </p>

                <HashLink
                  smooth
                  to={`${pathname}#contact`}
                  className="mt-4 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-accent transition-colors hover:text-accent-bright md:mt-6"
                >
                  Contact me <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </HashLink>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
