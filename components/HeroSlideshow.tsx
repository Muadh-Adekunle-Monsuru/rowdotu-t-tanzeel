"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GALLERY_IMAGES, SLIDESHOW_INTERVAL_MS } from "@/lib/site";

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % GALLERY_IMAGES.length);
    }, SLIDESHOW_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden>
      {GALLERY_IMAGES.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-[#0c1f4a]/70" />
    </div>
  );
}
