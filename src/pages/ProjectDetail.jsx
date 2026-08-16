import { useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const project = resume.projects.find((p) => p.id === projectId);

  // Guards the (currently theoretical, since nothing links project-to-project
  // directly) case of navigating between two project pages without an
  // unmount — keeps this page's own scroll starting at the top either way.
  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [projectId]);

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

  const handleBack = () => {
    // Prefer real browser "back" so the visitor lands exactly where they
    // left off in the Projects grid, not just the top of the section —
    // only falls back to a fresh jump if there's no in-app history (e.g. a
    // direct link straight to this project).
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/#projects");
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-night pt-[70px]">
      <div
        ref={scrollRef}
        className="no-scrollbar relative z-10 mx-auto h-[calc(100vh-70px)] max-w-4xl overflow-y-auto"
      >
        <RevealOnScroll className="overflow-hidden border-b border-hairline bg-black">
          <ProjectMedia project={project} />
        </RevealOnScroll>

        <div className="px-6 py-8 sm:px-10">
          <RevealOnScroll>
            <h1 className="font-heading text-2xl font-bold text-ink sm:text-3xl">{project.title}</h1>
            <p className="mt-4 text-sm leading-relaxed text-ink-secondary sm:text-base">
              {project.description}
            </p>

            <div className="mt-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-secondary">
                Technologies Used
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View on GitHub
              </Button>
              <Button variant="ghost" onClick={handleBack}>
                <FaArrowLeft /> Back to Projects
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
