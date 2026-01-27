"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const sliderImages = [
  "/ruhanmedical1.jpg",
  "/ruhanmedical2.jpg",
  "/ruhanmedical3.jpg",
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10">
      {/* Image Slider */}
      <div className="relative w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
        <Image
          src={sliderImages[currentIndex]}
          alt="Ruhan Medical Complex"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
