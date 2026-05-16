import { useState, useEffect } from "react";

export default function ImageCarousel({
  images = [],
  autoPlay = 4000,
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    // Prevent interval if there are no images or only 1 image
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, autoPlay);

    return () => clearInterval(interval);
  }, [images.length, autoPlay]);

  if (!images.length) return null;

  return (
    <div className="relative w-full max-w-lg aspect-[16/9] overflow-hidden rounded-xl">
      {/* Current Image */}
      <img
        src={images[idx]}
        alt={`Slide ${idx + 1}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dots navigation */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === idx ? "bg-orange-500" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}