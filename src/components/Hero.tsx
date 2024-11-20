import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full">
      <Image
        src="/banner.png"
        alt="Background"
        className="w-full h-[530px] object-cover"
        width={5000}
        height={5000}
        priority
      />
    </div>
  );
};

export default Hero;
