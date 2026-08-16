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

export default function Skills() {
  return (
    <div className="flex flex-col gap-8">
      {Object.entries(resume.skills).map(([category, skills]) => (
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
            {skills.map((skill) => (
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
