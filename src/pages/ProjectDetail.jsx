import { useParams, Link } from "react-router-dom";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { resume } from "../data/site";
import Container from "../components/ui/Container";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import RevealOnScroll from "../components/ui/RevealOnScroll";

function ProjectMedia({ project }) {
  if (project.videoUrls?.length) {
    return (
      <div className={`grid gap-0.5 ${project.videoUrls.length > 1 ? "sm:grid-cols-2" : ""}`}>
        {project.videoUrls.map((video, index) => (
          <video key={index} controls className="aspect-video w-full bg-black object-contain">
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
    );
  }
  if (project.videoUrl) {
    return (
      <video controls poster={project.imageUrl} className="aspect-video w-full bg-black object-contain">
        <source src={project.videoUrl} type="video/mp4" />
      </video>
    );
  }
  if (project.imageUrl) {
    return <img src={project.imageUrl} alt={project.title} className="w-full object-contain" />;
  }
  return null;
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = resume.projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Container className="flex min-h-screen flex-col items-center justify-center gap-6 pt-24 text-center">
        <h2 className="font-heading text-3xl font-bold text-ink">Project not found</h2>
        <Link to="/#projects" className="btn">
          Back to Home
        </Link>
      </Container>
    );
  }

  return (
    <div className="min-h-screen bg-night pt-[70px]">
      <RevealOnScroll className="relative z-10 overflow-hidden border-b border-hairline bg-black">
        <ProjectMedia project={project} />
      </RevealOnScroll>

      <Container className="py-16">
        <RevealOnScroll className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">{project.title}</h1>
          <p className="mt-6 text-base leading-relaxed text-ink-secondary">{project.description}</p>

          <div className="mt-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-secondary">
              Technologies Used
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub /> View on GitHub
            </Button>
            <Button variant="ghost" hash="/#projects">
              <FaArrowLeft /> Back to Projects
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  );
}
