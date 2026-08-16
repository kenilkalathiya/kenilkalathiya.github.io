import { FaCarSide, FaLayerGroup, FaCode, FaServer, FaArrowRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import SectionHeading from "../components/ui/SectionHeading";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import Container from "../components/ui/Container";
import { aboutMe } from "../data/site";

const ICONS = [FaCarSide, FaLayerGroup, FaCode, FaServer];

export default function About() {
  return (
    <section id="about" className="bg-night py-16 md:py-24">
      <Container>
        <SectionHeading title={aboutMe.title} subtitle={aboutMe.subtitle} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {aboutMe.services.map((service, index) => {
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
                  to="/#contact"
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
