import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  TbBrandReact,
  TbCar,
  TbCarSuv,
  TbCode,
  TbDatabase,
  TbDrone,
  TbServer,
  TbTerminal2,
} from "react-icons/tb";
import { resume } from "../../data/site";

// Slow-drifting silhouettes, fixed to the viewport at very low opacity — a
// quiet nod to the current track's theme that stays out of the way of actual
// content (pointer-events disabled, z-index sits between the section
// backgrounds and the z-10 content in Container). Each slot follows a
// multi-point loop rather than a straight back-and-forth, so the drift reads
// as wandering in an open direction instead of pacing a single line. Slots
// stay toward the edges (none in the center) and use moderate sizes, so the
// background never competes with the content in any view.
const SLOTS = [
  { top: "14%", left: "6%", size: "text-5xl", duration: 30, delay: 0, x: [0, 120, 90, -40, 0], y: [0, -60, 70, 40, 0] },
  { top: "20%", left: "84%", size: "text-4xl", duration: 20, delay: 1.5, x: [0, -90, -30, 60, 0], y: [0, 70, -50, -20, 0] },
  { top: "52%", left: "90%", size: "text-5xl", duration: 34, delay: 3, x: [0, -110, -50, 40, 0], y: [0, -50, 80, 20, 0] },
  { top: "80%", left: "8%", size: "text-4xl", duration: 24, delay: 0.8, x: [0, 80, -50, -20, 0], y: [0, -70, -30, 60, 0] },
  { top: "84%", left: "70%", size: "text-3xl", duration: 28, delay: 5, x: [0, -90, 40, 20, 0], y: [0, -60, -20, 30, 0] },
];

// One icon per slot for each theme. `spin` adds a gentle wobble (drones,
// the React atom); vehicles keep a level heading.
const THEMES = {
  automotive: [
    { Icon: TbCar },
    { Icon: TbDrone, spin: true },
    { Icon: TbCarSuv },
    { Icon: TbDrone, spin: true },
    { Icon: TbCar },
  ],
  software: [
    { Icon: TbCode },
    { Icon: TbBrandReact, spin: true },
    { Icon: TbDatabase },
    { Icon: TbTerminal2 },
    { Icon: TbServer },
  ],
  all: [
    { Icon: TbCar },
    { Icon: TbCode },
    { Icon: TbDrone, spin: true },
    { Icon: TbBrandReact, spin: true },
    { Icon: TbCarSuv },
  ],
};

const TRACK_THEMES = { "/autonomous-systems": "automotive", "/software": "software", "/all": "all" };

// Project pages take the theme of the project's own category.
function themeFor(pathname) {
  if (TRACK_THEMES[pathname]) return TRACK_THEMES[pathname];
  const projectId = pathname.match(/^\/project\/([^/]+)/)?.[1];
  const project = resume.projects.find((p) => p.id === projectId);
  return project?.category || "automotive";
}

export default function AmbientBackground() {
  const { pathname } = useLocation();
  const theme = themeFor(pathname);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {SLOTS.map(({ top, left, size, duration, delay, x, y }, i) => {
        const { Icon, spin } = THEMES[theme][i];
        return (
          // The drifting wrapper is keyed by slot only, so switching tracks
          // crossfades the icon inside it without restarting the drift.
          <motion.div
            key={i}
            className={`absolute text-accent ${size}`}
            style={{ top, left }}
            animate={{ x, y, rotate: spin ? [0, 15, -10, 8, 0] : 0 }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={`${theme}-${i}`}
                className="absolute left-0 top-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.22 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Icon />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
