import { isTodo } from "../../utils/todo";

// Renders a data string, flagging TODO(Kenil) placeholders with a dashed
// outline so they stand out in development. Callers filter placeholders out
// of production builds with isVisible() before rendering this.
export default function TodoText({ children }) {
  if (!isTodo(children)) return children;
  return (
    <span className="rounded border border-dashed border-accent px-1.5 py-0.5 font-mono text-xs text-accent">
      {children}
    </span>
  );
}
