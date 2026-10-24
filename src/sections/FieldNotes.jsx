import SectionHeading from "../components/ui/SectionHeading";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import Container from "../components/ui/Container";
import TodoText from "../components/ui/TodoText";
import { fieldNotes } from "../data/site";
import { isVisible } from "../utils/todo";

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// "Sep 2026" -> sortable number (year * 12 + month). Undated or unparseable
// entries get -1 so they sink to the end instead of breaking the order.
function dateKey(date) {
  const match = /^([a-z]{3})[a-z]*\s+(\d{4})$/i.exec(date || "");
  const month = match ? MONTHS.indexOf(match[1].toLowerCase()) : -1;
  return month === -1 ? -1 : Number(match[2]) * 12 + month;
}

export default function FieldNotes({ track }) {
  // Newest first; Array.prototype.sort is stable, so notes from the same
  // month keep their order from data/site.js.
  const notes = (track ? fieldNotes.filter((n) => n.category === track) : [...fieldNotes]).sort(
    (a, b) => dateKey(b.date) - dateKey(a.date)
  );

  if (notes.length === 0) return null;

  return (
    <section id="field-notes" className="bg-night py-16 md:py-24">
      <Container>
        <SectionHeading title="Field Notes" subtitle="Latest updates from this space" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {notes.map((note, index) => (
            <RevealOnScroll
              key={note.id}
              id={`note-${note.id}`}
              delay={index * 0.08}
              className="flex h-full scroll-mt-24 flex-col rounded-lg border border-hairline bg-panel p-5 shadow-panel md:p-6"
            >
              {isVisible(note.date) && (
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  <TodoText>{note.date}</TodoText>
                </p>
              )}
              <h3 className="mt-3 font-heading text-lg font-bold text-ink">{note.title}</h3>
              <p className="mt-2 flex-grow hyphens-auto text-justify text-sm leading-relaxed text-ink-secondary">{note.excerpt}</p>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
