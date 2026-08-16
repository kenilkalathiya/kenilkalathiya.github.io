// z-10 keeps section content painting above the fixed AmbientBackground
// decoration layer (z-[1]) that sits behind every section's own background.
export default function Container({ children, className = "" }) {
  return (
    <div className={`relative z-10 mx-auto w-full max-w-content px-6 sm:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
