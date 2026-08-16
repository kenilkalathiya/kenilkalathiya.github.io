import RevealOnScroll from "../../components/ui/RevealOnScroll";

// Shared renderer for Education / Experience / Interests — each just maps
// its own data shape into { title, badge, subtitle, items } entries.
export default function TimelineList({ entries }) {
  return (
    <div className="flex flex-col gap-8">
      {entries.map((entry, i) => (
        <RevealOnScroll
          key={entry.title}
          delay={i * 0.06}
          className="relative border-l-2 border-hairline pl-8 last:border-transparent"
        >
          <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-[3px] border-panel-soft bg-accent" />

          <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
            <h3 className="font-heading text-lg font-bold text-ink">{entry.title}</h3>
            {entry.badge && (
              <span className="shrink-0 rounded border border-accent px-3 py-1 font-mono text-xs text-accent">
                {entry.badge}
              </span>
            )}
          </div>

          {entry.subtitle && (
            <p className="mb-3 font-semibold text-accent">{entry.subtitle}</p>
          )}

          {entry.items && (
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-secondary">
              {entry.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}
        </RevealOnScroll>
      ))}
    </div>
  );
}
