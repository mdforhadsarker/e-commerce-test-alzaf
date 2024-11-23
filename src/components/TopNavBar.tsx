import Image from "next/image";

const TopNavBar = () => {
  return (
    <div className="bg-[#F0F1F1] h-[40px] flex items-center">
      <div className="min-w-[1220px] mx-auto flex justify-between items-center">
        {/* Left section */}
        <div className="space-x-8 text-xs text-gray-700 flex items-center">
          <div className="flex justify-between gap-2 items-center">
            <span className="cursor-pointer text-orange-500">English</span>
            <Image
              src="/Dropdown.png"
              alt="Arrow icon"
              width={500}
              height={500}
              className="w-full h-4 cursor-pointer"
            />
          </div>
          <span className="cursor-pointer">Help Center</span>
          <span className="cursor-pointer">Helpline: 0964781656</span>
        </div>

        {/* Right section */}
        <div className="space-x-8 text-xs text-gray-700">
          <span className="cursor-pointer">Become a Seller</span>
          <span className="cursor-pointer">Order Track</span>
          <span className="cursor-pointer text-orange-500">
            Sign up / Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
