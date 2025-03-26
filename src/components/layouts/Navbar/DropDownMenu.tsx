/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

const DropDownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-4">
        {/* Shop by Category Button */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="flex items-center font-bold hover:text-blue-600">
            <Menu className="w-5 h-5 mr-2" />
            <span> SHOP BY CATEGORY</span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="">
              <div className="absolute  left-0 top-full w-48 bg-white shadow-lg rounded-md border border-gray-200 z-10">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link href={"/mens"}> Men's</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link href={"/women"}> Women</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link href={"/organic"}> Organic</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
