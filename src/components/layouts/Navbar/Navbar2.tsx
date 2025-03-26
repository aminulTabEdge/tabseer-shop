"usde client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
import SignIn from "./SignIn";

const Navbar2 = () => {
  return (
    <div className="bg-[#133E87]">
      <nav className="flex items-center justify-between  py-2  shadow-md container mx-auto">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={120}
              height={40}
              alt="Tabseershop logo"
              className="py-1"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Search your products"
            className="w-32 lg:w-lg bg-white"
          />
          <Button className=" w-10 h-10 flex items-center justify-center bg-amber-400 ">
            <Search className="text-black" size={18} />
          </Button>
        </div>

        {/* Sign In / Sign Up */}
        <SignIn />
      </nav>
    </div>
  );
};

export default Navbar2;
