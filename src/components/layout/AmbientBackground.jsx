import { motion } from "framer-motion";
import { TbCar, TbCarSuv, TbDrone } from "react-icons/tb";

// Slow-drifting car/drone silhouettes, fixed to the viewport at very low
// opacity — a quiet nod to the automotive/drone theme that stays out of the
// way of actual content (pointer-events disabled, z-index sits between the
// section backgrounds and the z-10 content in Container). Each item follows
// a multi-point loop rather than a straight back-and-forth, so the drift
// reads as wandering in an open direction instead of pacing a single line.
const ITEMS = [
  {
    Icon: TbCar,
    top: "14%",
    left: "6%",
    size: "text-6xl",
    duration: 30,
    delay: 0,
    x: [0, 120, 90, -40, 0],
    y: [0, -60, 70, 40, 0],
  },
  {
    Icon: TbDrone,
    top: "22%",
    left: "82%",
    size: "text-4xl",
    duration: 20,
    delay: 1.5,
    x: [0, -90, -30, 60, 0],
    y: [0, 70, -50, -20, 0],
    spin: true,
  },
  {
    Icon: TbCarSuv,
    top: "60%",
    left: "88%",
    size: "text-7xl",
    duration: 34,
    delay: 3,
    x: [0, -130, -60, 50, 0],
    y: [0, -50, 80, 20, 0],
    flip: true,
  },
  {
    Icon: TbDrone,
    top: "80%",
    left: "10%",
    size: "text-3xl",
    duration: 17,
    delay: 0.8,
    x: [0, 80, -50, -20, 0],
    y: [0, -70, -30, 60, 0],
    spin: true,
  },
  {
    Icon: TbCar,
    top: "42%",
    left: "46%",
    size: "text-5xl",
    duration: 32,
    delay: 5,
    x: [0, -100, 60, 30, 0],
    y: [0, 80, 50, -60, 0],
    flip: true,
  },
];

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {ITEMS.map(({ Icon, top, left, size, duration, delay, x, y, flip, spin }, i) => (
        <motion.div
          key={i}
          className={`absolute text-accent opacity-[0.22] ${size} ${flip ? "-scale-x-100" : ""}`}
          style={{ top, left }}
          animate={{
            x,
            y,
            rotate: spin ? [0, 15, -10, 8, 0] : 0,
          }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}
