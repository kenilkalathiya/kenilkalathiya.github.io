import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaPalette } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import SectionHeading from "../components/ui/SectionHeading";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import Container from "../components/ui/Container";
import Education from "./resume/Education";
import Experience from "./resume/Experience";
import Skills from "./resume/Skills";
import Interests from "./resume/Interests";

const TABS = [
  { name: "Education", icon: FaUserGraduate, component: Education },
  { name: "Experience", icon: MdWorkOutline, component: Experience },
  { name: "Skills", icon: FaLaptopCode, component: Skills },
  { name: "Interests", icon: FaPalette, component: Interests },
];

export default function Resume() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveComponent = TABS[activeIndex].component;

  return (
    <section id="resume" className="bg-night py-16 md:py-24">
      <Container>
        <SectionHeading title="Resume" subtitle="My formal bio details" />

        <RevealOnScroll className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-lg border border-hairline shadow-panel md:flex-row">
          {/* All four tabs stay visible at once on mobile (equal-width row) so
              there's never a hidden option behind a scroll the user has to
              discover; desktop keeps the vertical icon+label sidebar. */}
          <div className="grid shrink-0 grid-cols-4 border-b border-hairline bg-panel md:flex md:w-64 md:flex-col md:border-b-0 md:border-r">
            {TABS.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col items-center justify-center gap-1 px-2 py-4 font-mono text-[11px] uppercase tracking-tight transition-colors sm:text-xs md:flex-row md:justify-start md:gap-3 md:px-6 md:py-5 md:text-sm md:tracking-wide ${
                    isActive
                      ? "bg-accent text-night"
                      : "text-ink-secondary hover:bg-panel-elev hover:text-ink"
                  }`}
                >
                  <Icon className="text-base" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Fixed height (not min-height) so every tab occupies the same
              space — content that runs longer (like Skills) scrolls inside
              this box instead of growing the whole section. */}
          <div className="no-scrollbar relative h-[380px] w-full overflow-y-auto bg-panel-soft p-5 sm:p-6 md:h-[440px] md:w-auto md:flex-1 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
