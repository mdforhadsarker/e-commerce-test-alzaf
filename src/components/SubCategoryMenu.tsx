"use client";
import { Category } from "../api/api";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const SubCategoryMenu: React.FC<{ categories: Category[] }> = ({
  categories,
}) => {
  return (
    <ul className="bg-white shadow-md p-2 w-64">
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
      className="py-2 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={subCategory.link}
        className={`flex items-center space-x-2 text-sm ${
          isHovered ? "text-[#F97316]" : "text-black"
        }`}
      >
        <span className="flex-1">{subCategory.title}</span>
        {subCategory.childrens && subCategory.childrens.length > 0 && (
          <div
            className={`ml-2 transition-opacity ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src="/arrow-right.png"
              alt="arrow icon"
              width={500}
              height={500}
              className="w-full h-6"
              priority
            />
          </div>
        )}
      </Link>

      {/* Render subcategories only when hovered */}
      {subCategory.childrens &&
        subCategory.childrens.length > 0 &&
        isHovered && (
          <ul className="absolute left-full top-0 z-10 mt-0 p-2 w-64">
            <SubCategoryMenu categories={subCategory.childrens} />
          </ul>
        )}
    </li>
  );
};

export default SubCategoryMenu;
