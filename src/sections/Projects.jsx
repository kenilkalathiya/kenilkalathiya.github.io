import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaPlay } from "react-icons/fa";
import SectionHeading from "../components/ui/SectionHeading";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import Container from "../components/ui/Container";
import Tag from "../components/ui/Tag";
import { resume } from "../data/site";

const FEATURED_COUNT = 2;

// isa-cruise-control's clip is a confirmed true 16:9 capture with useful
// content anchored top-left and an L-shaped dead margin baked into the
// footage on the right/bottom — cropping from the top-left compensates for
// that specific recording. Other projects' videos haven't been checked for
// the same issue (UAV1.mp4, for one, is a ~1.94:1 capture, not 16:9), so
// this crop is scoped to that one project rather than applied blanket.
const TOP_LEFT_CROP_PROJECT_IDS = ["isa-cruise-control"];

function FeaturedMedia({ project }) {
  if (project.videoUrls?.length) {
    const useTopLeftCrop = TOP_LEFT_CROP_PROJECT_IDS.includes(project.id);
    // No autoPlay: forcing a big video to stream immediately on page load
    // is both bad for performance and unreliable against CRA's dev server
    // for large files — this links through to the real player instead.
    return (
      <Link to={`/project/${project.id}`} className="group relative block h-full w-full">
        <video
          className={`h-full w-full object-cover ${
            useTopLeftCrop ? "origin-top-left scale-[1.35] object-left-top" : ""
          }`}
          src={project.videoUrls[0]}
          muted
          loop
          playsInline
          preload="metadata"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-night/40 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-night text-accent">
            <FaPlay className="ml-1" />
          </span>
        </span>
      </Link>
    );
  }
  if (project.imageUrl) {
    return <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover" />;
  }
  return null;
}

function FeaturedProject({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <RevealOnScroll
      className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
        reversed ? "" : ""
      }`}
    >
      <div className={`aspect-video overflow-hidden rounded-lg border border-hairline bg-black shadow-panel ${
        reversed ? "lg:order-2" : ""
      }`}>
        <FeaturedMedia project={project} />
      </div>

      <div className={reversed ? "lg:order-1 lg:text-right" : ""}>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Featured Project
        </p>
        <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">{project.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-ink-secondary sm:text-base">
          {project.description}
        </p>
        <div className={`mt-5 flex flex-wrap gap-2 ${reversed ? "lg:justify-end" : ""}`}>
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className={`mt-6 flex flex-wrap gap-5 ${reversed ? "lg:justify-end" : ""}`}>
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wide text-accent transition-colors hover:text-accent-bright"
          >
            View Project <FaArrowRight />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-ink-secondary transition-colors hover:text-ink"
          >
            <FaGithub /> Source
          </a>
        </div>
      </div>
    </RevealOnScroll>
  );
}

function ProjectCard({ id, title, description, tech }) {
  return (
    <RevealOnScroll
      as="div"
      className="group flex h-full flex-col rounded-lg border border-hairline bg-panel p-5 shadow-panel transition-all duration-300 hover:-translate-y-2 hover:border-accent-dim hover:shadow-glow md:p-6"
    >
      <Link to={`/project/${id}`} className="flex h-full flex-col">
        <h3 className="font-heading text-lg font-bold text-ink">{title}</h3>
        <p className="mt-3 flex-grow text-sm leading-relaxed text-ink-secondary">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-accent opacity-0 transition-opacity group-hover:opacity-100">
          View Project <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </RevealOnScroll>
  );
}

function MoreProjectsCard({ github }) {
  return (
    <RevealOnScroll as="a" href={github} target="_blank" rel="noopener noreferrer"
      className="flex h-full flex-col items-center justify-center gap-4 rounded-lg border border-accent-dim bg-panel p-5 text-center text-accent transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:bg-accent hover:text-night hover:shadow-glow md:p-6"
    >
      <h3 className="font-heading text-lg font-bold">More projects on GitHub</h3>
      <FaArrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
    </RevealOnScroll>
  );
}

export default function Projects() {
  const featured = resume.projects.filter((p) => !p.isGithubLink).slice(0, FEATURED_COUNT);
  const rest = resume.projects.filter((p) => !p.isGithubLink).slice(FEATURED_COUNT);
  const githubEntry = resume.projects.find((p) => p.isGithubLink);

  return (
    <section id="projects" className="bg-night py-16 md:py-24">
      <Container>
        <SectionHeading title="Projects" subtitle="A selection of my recent work" />

        <div className="flex flex-col gap-14 md:gap-24">
          {featured.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-24 md:gap-6 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
            {githubEntry && <MoreProjectsCard github={githubEntry.github} />}
          </div>
        )}
      </Container>
    </section>
  );
}
