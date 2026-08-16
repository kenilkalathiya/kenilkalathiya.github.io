import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbCar } from "react-icons/tb";

const MIN_VISIBLE_MS = 1400; // keeps the animation from just flashing on fast loads
const SAFETY_TIMEOUT_MS = 6000; // hides it regardless if "load" is ever delayed

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const remaining = Math.max(MIN_VISIBLE_MS - (Date.now() - start), 0);
      window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }
    const safety = window.setTimeout(finish, SAFETY_TIMEOUT_MS);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", isLoading);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-night"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <p className="font-heading text-2xl font-bold uppercase tracking-widest text-ink">
            Kenil<span className="text-accent">.</span>
          </p>

          {/* Car runs left-to-right along the track, looping while loading is
              in progress — an indeterminate indicator rather than a literal
              byte-count, since that's not meaningfully knowable up front. */}
          <div className="relative h-7 w-60 sm:w-72">
            <div className="absolute bottom-0 h-px w-full bg-hairline" />
            <motion.div
              className="absolute bottom-0 text-2xl text-accent"
              animate={{ left: ["0%", "calc(100% - 1.75rem)"] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
            >
              <TbCar />
            </motion.div>
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-secondary">
            Loading
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
