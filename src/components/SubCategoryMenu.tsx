import React from "react";
import { Category } from "../api/api";
import Link from "next/link";

const SubCategoryMenu: React.FC<{ categories: Category[] }> = ({ categories }) => {
  return (
    <ul className="ml-4 border-l border-gray-200 pl-4">
      {categories.map((subCategory) => (
        <li key={subCategory.id} className="py-2 group relative">
          <Link  href={subCategory.link} className="flex items-center space-x-2 hover:underline text-sm">
         {subCategory.title}
          </Link>
          {subCategory.childrens && (
            <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-md p-2 w-64">
              <SubCategoryMenu categories={subCategory.childrens} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubCategoryMenu;

