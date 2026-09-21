import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SWIPE_THRESHOLD = 50;

// Slide track + arrows + dots for a project's videos and images. `items` is
// [{ type: "video" | "image", src, poster?, caption? }]. Every slide sits in
// the same 16:9 frame with object-contain, so media of different shapes
// (screenshots, crops, wide diagrams, videos) is letterboxed, never cropped.
export default function MediaSlider({ items, alt }) {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const trackRef = useRef(null);
  const count = items.length;

  const goTo = (next) => setIndex((next + count) % count);

  // Sliding away from a playing video shouldn't leave its audio running.
  useEffect(() => {
    trackRef.current?.querySelectorAll("video").forEach((video) => video.pause());
  }, [index]);

  const handleKeyDown = (e) => {
    // Let a focused video's own controls use the arrow keys for seeking.
    if (e.target.tagName === "VIDEO") return;
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > SWIPE_THRESHOLD) goTo(delta < 0 ? index + 1 : index - 1);
    setTouchStartX(null);
  };

  const current = items[index];

  return (
    <div
      className="relative bg-black outline-none"
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label={alt}
      onKeyDown={handleKeyDown}
      onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative aspect-video overflow-hidden">
        <div
          ref={trackRef}
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) =>
            item.type === "video" ? (
              <video
                key={i}
                controls
                poster={item.poster}
                preload="metadata"
                className="h-full w-full shrink-0 bg-black object-contain"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img
                key={i}
                src={item.src}
                alt={item.caption || `${alt} (${i + 1})`}
                draggable={false}
                className="h-full w-full shrink-0 object-contain"
              />
            )
          )}
        </div>

        {["prev", "next"].map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => goTo(dir === "prev" ? index - 1 : index + 1)}
            aria-label={dir === "prev" ? "Previous slide" : "Next slide"}
            className={`absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-night/70 text-ink backdrop-blur transition-colors hover:border-accent hover:text-accent ${
              dir === "prev" ? "left-3" : "right-3"
            }`}
          >
            {dir === "prev" ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        ))}

        <span className="absolute right-3 top-3 rounded bg-night/70 px-2 py-1 font-mono text-xs text-ink-secondary backdrop-blur">
          {current.type === "video" ? "Video · " : ""}
          {index + 1} / {count}
        </span>
      </div>

      <div className="flex flex-col items-center gap-3 px-4 py-3">
        {current.caption && (
          <p className="text-center font-mono text-xs uppercase tracking-widest text-ink-secondary">
            {current.caption}
          </p>
        )}
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-2 bg-hairline hover:bg-accent-dim"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
