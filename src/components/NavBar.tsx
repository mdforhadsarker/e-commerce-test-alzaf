import React from "react";
import Image from "next/image";
import HeroCategories from "./HeroCategories";

const NavBar = () => {
  return (
    <div className="relative text-sm container mx-auto w-full">
      {/* Bottom navbar */}
      <div className="container mx-auto h-[70px] flex items-center w-full px-4">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="text-xl font-semibold">
            <Image src="/logo.png" alt="Logo" width={100} height={40} />
          </div>

          {/* Search bar */}
          <div className="flex flex-grow items-center mx-4">
            <div className="ml-2">
              <input
                type="text"
                className="w-[704px] px-4 py-2 border rounded-lg"
                placeholder="Search..."
              />
              <Image
                src="/search.png" 
                className="cursor-pointer"
                alt="search"
                width={20}
                height={20}
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex space-x-6">
            <Image
              src="/profile.png"
              className="cursor-pointer"
              alt="profile"
              width={20}
              height={20}
            />
            <Image
              src="/heart.png"
              className="cursor-pointer"
              alt="heart"
              width={20}
              height={20}
            />
            <Image
              src="/cart.png"
              className="cursor-pointer"
              alt="cart"
              width={20}
              height={20}
            />
          </div>
          <Image
            src="/cloud.png"
            className="cursor-pointer"
            alt="cloud"
            width={200}
            height={20} 
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="absolute top-[70px] left-0 w-full">
        <HeroCategories />
      </div>
    </div>
  );
};

export default NavBar;
