import { motion } from "framer-motion";
import { resume } from "../../data/site";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

// Categories in the order configured for the current view, with any category
// missing from that list appended rather than silently dropped.
function orderedCategories(track) {
  const order = resume.skillOrder[track] || resume.skillOrder.default;
  const all = Object.keys(resume.skills);
  return [...order.filter((c) => all.includes(c)), ...all.filter((c) => !order.includes(c))];
}

export default function Skills({ track }) {
  return (
    <div className="flex flex-col gap-8">
      {orderedCategories(track).map((category) => (
        <div key={category}>
          <h3 className="mb-4 border-b border-hairline pb-2 font-heading text-lg font-bold text-ink">
            {category}
          </h3>
          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {resume.skills[category].map((skill) => (
              <motion.div
                key={skill.name}
                variants={badgeVariants}
                className="rounded border border-hairline bg-panel-elev px-4 py-3 text-center text-sm font-semibold tracking-wide text-ink"
              >
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
