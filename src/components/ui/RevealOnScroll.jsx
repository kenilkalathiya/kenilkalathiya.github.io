import { motion } from "framer-motion";

// Shared scroll-in animation: fade + rise, plays once per element.
export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  y = 24,
  as = "div",
  ...rest
}) {
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
