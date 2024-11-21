import { Category } from "../api/api";
import Link from "next/link";
import Image from "next/image";

const SubCategoryMenu: React.FC<{ categories: Category[] }> = ({
  categories,
}) => {
  return (
    <ul className="absolute left-full top-0 hidden group-hover:block bg-white shadow-md p-2 w-64 z-10 flex-col">
      {categories.map((subCategory) => (
        <li key={subCategory.id} className="py-2 group relative">
          <Link
            href={subCategory.link}
            className={`flex items-center space-x-2 text-sm`}
          >
            <span className="felx-1">{subCategory.title}</span>

            {subCategory.childrens && subCategory.childrens.length > 0 && (
              <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Image
                  src="/arrow-right.png"
                  alt="arrow icon"
                  width={16}
                  height={16}
                />
              </div>
            )}
          </Link>
          {subCategory.childrens && (
            <div className="absolute left-full top-0 hidden group-hover:block">
              <SubCategoryMenu categories={subCategory.childrens} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubCategoryMenu;
