import SectionHeading from "../components/ui/SectionHeading";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import Container from "../components/ui/Container";
import { blog } from "../data/site";

export default function Blog({ track }) {
  const posts = track ? blog.filter((p) => p.category === track) : blog;

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="bg-night py-16 md:py-24">
      <Container>
        <SectionHeading title="Field Notes" subtitle="Latest updates from this space" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {posts.map((post, index) => (
            <RevealOnScroll
              key={post.id}
              delay={index * 0.08}
              className="flex h-full flex-col rounded-lg border border-hairline bg-panel p-5 shadow-panel md:p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-accent">{post.date}</p>
              <h3 className="mt-3 font-heading text-lg font-bold text-ink">{post.title}</h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-ink-secondary">{post.excerpt}</p>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
