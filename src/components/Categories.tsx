"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Category {
  id: string | number;
  title: string;
  link: string;
  childrens?: Category[];
}

interface CategoryMenuProps {
  categories: Category[];
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories }) => {
  const [hoveredHierarchy, setHoveredHierarchy] = useState<Category[]>([]);

  const handleMouseEnter = (levelIndex: number, category: Category) => {
    const newHierarchy = [...hoveredHierarchy];
    newHierarchy[levelIndex] = category;
    setHoveredHierarchy(newHierarchy.slice(0, levelIndex + 1));
  };

  const handleMenuMouseLeave = () => {
    setHoveredHierarchy([]);
  };

  const isHovered = (category: Category) => hoveredHierarchy.includes(category);
  const renderCategoryColumn = (categories: Category[], levelIndex: number) => (
    <div
      key={levelIndex}
      className={`flex flex-col w-[230px] h-[381px] bg-white ${
        levelIndex > 0 ? "border-l-[#D6D6D6] border-l" : ""
      }`}
    >
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className="group transition-all duration-150 ease-in"
          >
            <Link
              href={category.link}
              className={`flex flex-row justify-between items-center px-2 pt-[10px] group-hover:text-[#F97316] ${
                isHovered(category) ? "text-[#F97316]" : " text-black"
              }`}
              onMouseEnter={() => handleMouseEnter(levelIndex, category)}
            >
              <span className="text-xs">{category.title}</span>
              {category.childrens && category.childrens.length > 0 && (
                <div
                  className={`ml-2 transition-opacity ${
                    isHovered(category)
                      ? "group-hover:opacity-100"
                      : "opacity-0"
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
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex flex-row" onMouseLeave={handleMenuMouseLeave}>
      {/* first level */}
      {renderCategoryColumn(categories, 0)}

      {/* render subsequent levels dynamically */}
      {hoveredHierarchy.map(
        (hoveredCategory, index) =>
          hoveredCategory.childrens &&
          renderCategoryColumn(hoveredCategory.childrens, index + 1)
      )}
    </div>
  );
};

export default CategoryMenu;
