import React from "react";
import Image from "next/image";

const TopNavBar = () => {
  return (
    <div className="bg-[#F0F1F1] h-[40px]">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Left section */}
        <div className="space-x-4 text-sm text-gray-700 flex items-center">
          <span className="cursor-pointer text-orange-500">English</span>
          <Image src="/arrow.png" alt="Arrow icon" width={16} height={16} />
          <span className="cursor-pointer">Help Center</span>
          <span className="cursor-pointer">Helpline: 0964781656</span>
        </div>

        {/* Right section */}
        <div className="space-x-4 text-sm text-gray-700">
          <span className="cursor-pointer">Become a Seller</span>
          <span className="cursor-pointer">Order Track</span>
          <span className="cursor-pointer text-orange-500">
            Sign up / Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
