import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
      <div className="h-16 flex justify-between items-center px-10 border">
        <div className="flex gap-6 items-center outline-none relative">
          <h1 className="text-3xl font-bold font-serif text-gray-700">
            Medium
          </h1>
          <Search className="absolute left-40 text-gray-500" size={20} />
          <Input
            className="bg-gray-100 rounded-full px-8"
            placeholder="Search"
          />
        </div>

        <div>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
