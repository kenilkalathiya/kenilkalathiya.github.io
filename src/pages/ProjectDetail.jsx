import { useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaGithub, FaArrowLeft, FaArrowRight, FaLock } from "react-icons/fa";
import { resume, fieldNotes } from "../data/site";
import { isVisible } from "../utils/todo";
import TodoText from "../components/ui/TodoText";
import Container from "../components/ui/Container";
import Tag from "../components/ui/Tag";
import StatusBadge from "../components/ui/StatusBadge";
import MediaSlider from "../components/ui/MediaSlider";
import Button from "../components/ui/Button";
import RevealOnScroll from "../components/ui/RevealOnScroll";

// Videos first, then images. Captions line up per kind: videoCaptions[i] for
// the i-th video, imageCaptions[i] for the i-th image. (A legacy single
// `videoUrl` uses `imageUrl` as its poster rather than as a separate image.)
function getMediaItems(project) {
  const videos = project.videoUrls?.length ? project.videoUrls : project.videoUrl ? [project.videoUrl] : [];
  const images = project.imageUrls?.length
    ? project.imageUrls
    : project.imageUrl && !project.videoUrl
      ? [project.imageUrl]
      : [];

  return [
    ...videos.map((src, i) => ({
      type: "video",
      src,
      poster: project.videoUrl ? project.imageUrl : undefined,
      caption: project.videoCaptions?.[i],
    })),
    ...images.map((src, i) => ({ type: "image", src, caption: project.imageCaptions?.[i] })),
  ];
}

// Drops TODO(Kenil) placeholders that shouldn't render (production builds),
// and any section left with nothing to show.
function visibleDetails(details) {
  return details
    .map((section) => ({
      ...section,
      text: isVisible(section.text) ? section.text : undefined,
      bullets: section.bullets?.filter(isVisible),
      items: section.items?.filter((item) => isVisible(item.text)),
    }))
    .filter((section) => section.text || section.bullets?.length || section.items?.length);
}

const TRACK_PATHS = { automotive: "/autonomous-systems", software: "/software" };

function MediaItem({ item, alt }) {
  return (
    <figure className="flex flex-col justify-center bg-black">
      {item.type === "video" ? (
        <video controls poster={item.poster} className="aspect-video w-full bg-black object-contain">
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img src={item.src} alt={item.caption || alt} className="w-full object-contain" />
      )}
      {item.caption && (
        <figcaption className="px-4 py-2 text-center font-mono text-xs uppercase tracking-widest text-ink-secondary">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}

function ProjectMedia({ project }) {
  const items = getMediaItems(project);
  if (items.length === 0) return null;

  // Up to two items (videos and images together) sit side by side; more than
  // that gets a slider instead.
  if (items.length > 2) {
    return <MediaSlider items={items} alt={project.title} />;
  }
  return (
    <div className={`grid gap-0.5 ${items.length > 1 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item, index) => (
        <MediaItem key={index} item={item} alt={`${project.title} (${index + 1})`} />
      ))}
    </div>
  );
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
        <Link to="/autonomous-systems#projects" className="btn">
          Back to Home
        </Link>
      </Container>
    );
  }

  const hasMedia = getMediaItems(project).length > 0;
  const details = visibleDetails(project.details || []);
  const relatedNotes = (project.relatedNotes || [])
    .map((id) => fieldNotes.find((note) => note.id === id))
    .filter(Boolean);

  const handleBack = () => {
    // Prefer real browser "back" so the visitor lands exactly where they
    // left off in the Projects grid, not just the top of the section —
    // only falls back to a fresh jump if there's no in-app history (e.g. a
    // direct link straight to this project).
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/autonomous-systems#projects");
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-night pt-[70px]">
      <div
        ref={scrollRef}
        className="no-scrollbar relative z-10 mx-auto h-[calc(100vh-70px)] max-w-4xl overflow-y-auto"
      >
        {hasMedia && (
          <RevealOnScroll className="overflow-hidden border-b border-hairline bg-black">
            <ProjectMedia project={project} />
          </RevealOnScroll>
        )}

        <div className="px-6 py-8 sm:px-10">
          <RevealOnScroll>
            {project.status && <StatusBadge className="mb-4">{project.status}</StatusBadge>}
            <h1 className="font-heading text-2xl font-bold text-ink sm:text-3xl">{project.title}</h1>
            {isVisible(project.role) && (
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary sm:text-base">
                <span className="mr-2 font-mono text-xs uppercase tracking-widest text-accent">My Role</span>
                <TodoText>{project.role}</TodoText>
              </p>
            )}
            {details.length ? (
              <div className="mt-6 flex flex-col gap-8">
                {details.map((section) => (
                  <section
                    key={section.heading}
                    className={
                      section.highlight
                        ? "rounded-lg border border-accent bg-accent/10 p-5"
                        : undefined
                    }
                  >
                    <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                      {section.heading}
                    </p>
                    {section.text && (
                      <p className="text-sm leading-relaxed text-ink-secondary sm:text-base">
                        <TodoText>{section.text}</TodoText>
                      </p>
                    )}
                    {section.bullets && (
                      <ul className="flex flex-col gap-2">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="border-l-2 border-accent-dim pl-4 text-sm leading-relaxed text-ink-secondary sm:text-base"
                          >
                            <TodoText>{bullet}</TodoText>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.items && (
                      <ul className="flex flex-col gap-3">
                        {section.items.map((item) => (
                          <li
                            key={item.label}
                            className="border-l-2 border-accent-dim pl-4 text-sm leading-relaxed text-ink-secondary sm:text-base"
                          >
                            <span className="font-bold text-ink">{item.label}: </span>
                            <TodoText>{item.text}</TodoText>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary sm:text-base">
                {project.longDescription || project.description}
              </p>
            )}

            {relatedNotes.length > 0 && (
              <div className="mt-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">Related Field Notes</p>
                <ul className="flex flex-col gap-2">
                  {relatedNotes.map((note) => (
                    <li key={note.id}>
                      <HashLink
                        smooth
                        to={`${TRACK_PATHS[note.category]}#note-${note.id}`}
                        className="group inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-accent sm:text-base"
                      >
                        {note.title}
                        <FaArrowRight className="shrink-0 text-xs transition-transform group-hover:translate-x-1" />
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
              {project.github ? (
                <Button href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View on GitHub
                </Button>
              ) : (
                project.sourceNote && (
                  <span className="inline-flex items-center gap-2 self-center font-mono text-xs text-ink-muted sm:text-sm">
                    <FaLock /> {project.sourceNote}
                  </span>
                )
              )}
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
