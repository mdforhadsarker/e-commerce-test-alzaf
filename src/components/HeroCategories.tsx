import React from "react";
import Image from "next/image";
import { fetchCategories } from "../api/api";
import SubCategoryMenu from "./SubCategoryMenu";
import Link from "next/link";

const HeroCategories = async () => {
  const categories = await fetchCategories();

  return (
    <div className="container mx-auto h-96">
      <ul className="w-64 bg-white shadow-md py-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className="py-2 px-4 hover:bg-gray-50 group relative"
          >
            <Link
              href={category.link}
              className="flex items-center space-x-2 text-sm"
            >
              {category.title}
            </Link>
            {category.childrens && (
              <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-md p-2 w-64">
                <SubCategoryMenu categories={category.childrens} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroCategories;
