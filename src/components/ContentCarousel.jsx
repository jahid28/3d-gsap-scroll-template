import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ContentCarousel({
  slides = [],
  autoPlay = 5000,
}) {
  const [idx, setIdx] = useState(0);

  const prev = () => {
    setIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setIdx((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % slides.length);
    }, autoPlay);

    return () => clearInterval(interval);
  }, [slides.length, autoPlay]);

  const slide = slides[idx];

  return (
    <div className="relative w-full max-w-lg flex flex-col items-center">

      {/* IMAGE */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
        <img
          src={slide.image}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">
          ‹
        </button>

        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">
          ›
        </button>
      </div>

      {/* TEXT */}
      <div className="w-full bg-[#5A5A5A] rounded-xl mt-4 p-4 min-h-[180px]">
        {slide.title && (
          <div className="text-sm font-bold text-white mb-1">
            {slide.title}
          </div>
        )}

        {slide.subtitle && (
          <div className="text-xl font-extrabold text-white mb-2">
            {slide.subtitle}
          </div>
        )}

        <div className="text-sm text-white line-clamp-3">
          {slide.desc}
        </div>

        {slide.link && (
          <Link
            to={slide.link}
            className="mt-2 inline-block text-white hover:text-orange-500"
          >
            Read more →
          </Link>
        )}
      </div>

      {/* dots */}
      <div className="absolute bottom-3 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              i === idx ? "bg-orange-500" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}