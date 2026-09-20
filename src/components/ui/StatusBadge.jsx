// Pulsing "live" pill for projects that aren't finished yet — driven by the
// optional `status` field on a project in data/site.js.
export default function StatusBadge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-accent ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      {children}
    </span>
  );
}
