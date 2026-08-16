import RevealOnScroll from "./RevealOnScroll";

// Recurring section heading used to open every top-level section.
export default function SectionHeading({ title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <RevealOnScroll className={`mb-16 flex flex-col ${alignment}`}>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary sm:text-sm">
          {subtitle}
        </p>
      )}
      <span className="mt-6 h-px w-16 bg-accent" />
    </RevealOnScroll>
  );
}
