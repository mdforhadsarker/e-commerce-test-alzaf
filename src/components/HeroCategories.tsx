import { Category, fetchCategories } from "../api/api";
import SubCategoryMenu from "./SubCategoryMenu";
import Link from "next/link";
import Image from "next/image";

const HeroCategories = async () => {
  let categories: Category[] = [];

  try {
    categories = await fetchCategories();
  } catch {
    categories = [];
  }

  return (
    <div className="max-w-[1220px] mx-auto h-auto">
      {categories.length === 0 ? (
        <div className="text-red-600">No categories available.</div>
      ) : (
        <ul className="w-[230px] bg-white shadow-md h-[381px]">
          {categories.map((category) => (
            <li key={category.id} className="px-2 group relative">
              <Link
                href={category.link}
                className="flex items-center space-x-2 text-sm text-black group-hover:text-[#F97316]"
              >
                <span className="flex-1 pt-[10px] text-xs">
                  {category.title}
                </span>

                {category.childrens && category.childrens.length > 0 && (
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity pt-[10px] ">
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

              {category.childrens && category.childrens.length > 0 && (
                <div className="absolute left-full top-0 hidden group-hover:block">
                  <SubCategoryMenu categories={category.childrens} />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeroCategories;
