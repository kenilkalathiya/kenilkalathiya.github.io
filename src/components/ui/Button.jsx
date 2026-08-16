import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Polymorphic CTA button: renders as <button>, <a>, a HashLink, or a router Link
// depending on the props it receives, but always shares the same visual system.
export default function Button({
  children,
  variant = "solid",
  to,
  hash,
  href,
  className = "",
  ...rest
}) {
  const classes = `btn ${variant === "ghost" ? "btn-ghost" : ""} ${className}`;

  if (hash) {
    return (
      <HashLink smooth to={hash} className={classes} {...rest}>
        {children}
      </HashLink>
    );
  }
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
