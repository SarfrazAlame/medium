import React from "react";
import { Input } from "./ui/input";
import { BellDot, BellDotIcon, BellElectric, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { PiBellThin } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="h-16 flex justify-between items-center px-10 border">
        <div className="flex gap-6 items-center outline-none relative">
          <Link href={"/"}>
            <h1 className="text-3xl font-bold font-serif text-gray-700">
              Medium
            </h1>
          </Link>
          <Search className="absolute left-40 text-gray-500" size={20} />
          <Input
            className="bg-gray-100 rounded-full px-8"
            placeholder="Search"
          />
        </div>

        <div></div>

        <div className="flex items-center gap-8">
          <Link href="/new-story">
            <div className="flex gap-2">
              <TfiWrite size={20} className="cursor-pointer text-gray-400" />
              <p className="text-sm text-slate-500">Write</p>
            </div>
          </Link>
          <PiBellThin size={24} className="cursor-pointer" />
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;