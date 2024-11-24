import Image from "next/image";
import Categories from "./Categories";
import { Category, fetchCategories } from "../api/api";



const NavBar = async () => {
  let categories: Category[] = [];

  try {
    categories = await fetchCategories();
  } catch {
    categories = [];
  }

  return (
    <div className="mx-auto w-full">
      {/* bottom navbar */}
      <div className="relative max-w-[1220px] mx-auto h-[70px] flex items-center w-full">
        <div className="flex justify-between items-center w-full ">
          {/* logo */}
          <div>
            <Image
              src="/logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="w-full h-10"
            />
          </div>
          <div className="w-full flex gap-8 items-center">
            {/* search bar */}
            <div className="relative flex flex-grow items-center mx-4">
              <div className="ml-2 w-full">
                <input
                  type="search"
                  id="default-search"
                  className="w-full text-sm mx-auto px-4 h-[44px] bg-[#EFF0F5] rounded-lg focus:outline-none focus:ring-0 focus:border-0"
                  placeholder="Search Product"
                  required
                />
                <button className="flex justify-center items-center bg-[#F97316] w-[47px] h-[44px] rounded-md absolute top-1/2 transform -translate-y-1/2 right-0 focus:outline-none">
                  <Image
                    src="/search.png"
                    className="cursor-pointer"
                    alt="search"
                    width={24}
                    height={24}
                    priority
                  />
                </button>
              </div>
            </div>
            {/* icons */}
            <div className="gap-3 flex items-center">
              <div className="bg-[#F5F5F5] px-2 py-2 rounded-lg">
                <Image
                  src="/profile.png"
                  className="cursor-pointer w-full h-5"
                  alt="profile"
                  width={18}
                  height={18}
                  priority
                />
              </div>
              <div className="bg-[#F5F5F5] px-2 py-2 rounded-lg">
                <Image
                  src="/heart.png"
                  className="cursor-pointer w-full h-5"
                  alt="heart"
                  width={18}
                  height={18}
                  priority
                />
              </div>
              <div className="bg-[#F5F5F5] px-2 py-2 rounded-lg">
                <Image
                  src="/cart.png"
                  className="cursor-pointer w-full h-5"
                  alt="cart"
                  width={18}
                  height={18}
                  priority
                />
              </div>
            </div>
            {/* cloud */}
            <div>
              <Image
                src="/cloud.png"
                className="cursor-pointer w-full h-14"
                alt="cloud"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
        {/* categories section */}
        <div className="absolute w-full z-20 top-[70px] left-0 ">
          <Categories categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
