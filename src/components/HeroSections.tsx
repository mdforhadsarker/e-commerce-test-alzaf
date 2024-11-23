"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = [
  "/banner.png",
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png",
];

const HeroSections: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* image Display */}
      <Image
        src={images[currentIndex]}
        alt="banner"
        width={5000}
        height={5000}
        priority
        className="w-full h-[391px] object-cover transition-opacity duration-1000"
      />

      {/* dots navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-[#F97316]" : "bg-[#D9D9D9]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSections;
