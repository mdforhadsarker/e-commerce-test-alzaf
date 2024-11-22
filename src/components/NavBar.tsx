import Image from "next/image";
import HeroCategories from "./HeroCategories";

const NavBar = () => {
  return (
    <div className="relative z-20 text-sm container mx-auto w-full">
      {/* bottom navbar */}
      <div className="container mx-auto h-[70px] flex items-center w-full">
        <div className="flex justify-between items-center w-full">
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

          {/* search bar */}
          <div className="relative flex flex-grow items-center mx-4">
            <div className="ml-2 w-full">
              <input
                type="search"
                id="default-search"
                className="w-full mx-auto px-4 py-2 bg-[#EFF0F5] rounded-lg focus:outline-none focus:ring-0 focus:border-0"
                placeholder="Search Product"
                required
              />
              <button className="bg-[#F97316] p-2 rounded-md absolute top-1/2 transform -translate-y-1/2 right-0 focus:outline-none">
                <Image
                  src="/search.png"
                  className="cursor-pointer w-full h-5"
                  alt="search"
                  width={20}
                  height={20}
                  priority
                />
              </button>
            </div>
          </div>

          {/* icons */}
          <div className="flex space-x-8 items-center">
            <div className="gap-4 flex items-center">
              <div className="bg-[#F5F5F5] px-2 py-2 rounded-md">
                <Image
                  src="/profile.png"
                  className="cursor-pointer w-full h-5"
                  alt="profile"
                  width={20}
                  height={20}
                  priority
                />
              </div>
              <div className="bg-[#F5F5F5] px-2 py-2 rounded-md">
                <Image
                  src="/heart.png"
                  className="cursor-pointer w-full h-5"
                  alt="heart"
                  width={20}
                  height={20}
                  priority
                />
              </div>
              <div className="bg-[#F5F5F5] px-2 py-2 rounded-md">
                <Image
                  src="/cart.png"
                  className="cursor-pointer w-full h-5"
                  alt="cart"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>

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
      </div>

      {/* categories section */}
      <div className="absolute top-[70px] left-0 w-full">
        <HeroCategories />
      </div>
    </div>
  );
};

export default NavBar;
