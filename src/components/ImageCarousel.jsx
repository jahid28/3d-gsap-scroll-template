import { useState, useEffect } from "react";

function isVideoMedia(media) {
  return media.type === "video" || /\.(mp4|webm|ogg)$/i.test(media.src);
}

export default function ImageCarousel({
  images = [],
  autoPlay = 4000,
  onMediaClick,
}) {
  const [idx, setIdx] = useState(0);
  const slides = images.map((image) => (
    typeof image === "string" ? { src: image } : image
  ));

  useEffect(() => {
    // Prevent interval if there are no images or only 1 image
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % slides.length);
    }, autoPlay);

    return () => clearInterval(interval);
  }, [slides.length, autoPlay]);

  if (!slides.length) return null;

  const slide = slides[idx];

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border border-white/15 bg-black/30">
      {/* Current Image */}
      <div className="relative aspect-video bg-black/30">
        <button
          type="button"
          onClick={() => onMediaClick?.(slide)}
          className="absolute inset-0 w-full h-full cursor-zoom-in"
          aria-label={`Open slide ${idx + 1}`}
        >
          {isVideoMedia(slide) ? (
            <video
              src={slide.src}
              className="w-full h-full object-contain"
              muted
              playsInline
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.alt ?? `Slide ${idx + 1}`}
              className="w-full h-full object-contain"
            />
          )}
        </button>

        {slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
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
        )}
      </div>

      {slide.caption && (
        <div className="bg-black/65 px-4 py-3 text-center text-sm sm:text-base text-white">
          {slide.caption}
        </div>
      )}
    </div>
  );
}
