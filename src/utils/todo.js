// Data strings starting with this marker are placeholders for real values
// that still need to be filled in (see the note at the top of data/site.js).
const TODO_MARKER = "TODO(Kenil)";

export const isTodo = (value) => typeof value === "string" && value.startsWith(TODO_MARKER);

// Placeholders are visible while developing so they're easy to spot, but
// never shipped: a production build drops them as if the field were empty.
export const SHOW_TODOS = process.env.NODE_ENV !== "production";

export const isVisible = (value) => Boolean(value) && (SHOW_TODOS || !isTodo(value));
