"use client";
import { Category } from "../api/api";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const SubCategoryMenu: React.FC<{ categories: Category[] }> = ({
  categories,
}) => {
  return (
    <ul className="bg-white shadow-md w-[230px] h-[381px] px-2 border-l-[#D6D6D6] border-l-2">
      {categories.map((subCategory) => (
        <SubCategoryItem key={subCategory.id} subCategory={subCategory} />
      ))}
    </ul>
  );
};

const SubCategoryItem: React.FC<{ subCategory: Category }> = ({
  subCategory,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={subCategory.link}
        className={`flex items-center text-xs ${
          isHovered ? "text-[#F97316]" : "text-black"
        }`}
      >
        <span className="flex-1 pt-[10px]">{subCategory.title}</span>
        {subCategory.childrens && subCategory.childrens.length > 0 && (
          <div
            className={`ml-2 transition-opacity pt-[10px] ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src="/arrow-right.png"
              alt="arrow icon"
              width={500}
              height={500}
              className="w-full h-4"
              priority
            />
          </div>
        )}
      </Link>

      {subCategory.childrens &&
        subCategory.childrens.length > 0 &&
        isHovered && (
          <div className="absolute left-full top-0 z-10 h-full">
            <SubCategoryMenu categories={subCategory.childrens} />
          </div>
        )}
    </li>
  );
};

export default SubCategoryMenu;
