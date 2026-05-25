"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { GALLERY_IMAGES } from "@/lib/site";

export function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, close]);

  const active =
    lightboxIndex !== null ? GALLERY_IMAGES[lightboxIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
        {GALLERY_IMAGES.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg ring-2 ring-[#c9a227]/30 transition hover:ring-[#c9a227] focus:outline-none focus-visible:ring-[#c9a227]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur hover:bg-white/20"
          >
            Close
          </button>
          <div
            className="relative h-[min(85vh,700px)] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
