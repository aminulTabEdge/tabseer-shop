/* eslint-disable react/no-unescaped-entities */
"use client";

import DropDownMenu from "./DropDownMenu";

const Navbar3 = () => {
  return (
    <div className="bg-white ">
      <div className="border-b border-[#2D2C86] py-2 flex items-center justify-between  relative container mx-auto ">
        {/* Left Side */}
        <DropDownMenu />
        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#" className="hover:text-blue-600 ">
            RAMADAN SPECIAL
          </a>
          <a href="#" className="hover:text-blue-600">
            GREAT DEALS
          </a>
          <a href="#" className="hover:text-blue-600">
            UNILEVER'S WINTER SALE
          </a>
          <a href="#" className="hover:text-blue-600">
            BUY & SAVE MORE
          </a>
          <a href="#" className="hover:text-blue-600">
            WOMEN'S CORNER
          </a>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex gap-4 text-gray-600 text-xs">
          <a href="#" className="hover:underline flex items-center">
            🏬 Our outlets
          </a>
          <a href="#" className="hover:underline flex items-center">
            ℹ️ Help line
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar3;
