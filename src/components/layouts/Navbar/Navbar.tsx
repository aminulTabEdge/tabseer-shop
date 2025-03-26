"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu, ShoppingCart, User } from "lucide-react";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Mens", path: "/mens" },
  { name: "Women", path: "/women" },
  { name: "Health & Beauty", path: "/about" },
  { name: "Organic", path: "/organic" },
];

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full sticky top-0 left-0 z-50 bg-white shadow-md px-4 md:px-8">
      {/* Logo */}
      <div className="relative w-[120px] h-[40px] md:w-[160px] md:h-[70px]">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="TabEdge Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700 text-lg">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="hover:text-blue-500 transition cursor-pointer"
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Account Button */}
      <div className="space-x-4">
        <Link href="https://portal.tabedge.com">
          <button className="hover:cursor-pointer">
            <User size={30} />
          </button>
        </Link>

        <button>
          <ShoppingCart size={30} />
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <Menu
        className="text-2xl text-gray-700 cursor-pointer md:hidden"
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 transform transition-transform duration-300 ${
          mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 text-2xl"
          onClick={() => setMobileSidebarOpen(false)}
        >
          &times;
        </button>
        <ul className="mt-10 space-y-4 text-gray-700">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-blue-500 transition cursor-pointer"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}

          <li className="hover:text-blue-500 transition cursor-pointer">
            <Link href="http://localhost:5000/login">
              <button>
                <User />
              </button>
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
