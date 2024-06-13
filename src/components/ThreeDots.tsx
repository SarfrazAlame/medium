import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const ThreeDots = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BsThreeDots className="text-gray-600 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <button className="text-sm text-red-500">Delete</button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="text-sm text-gray-600 ">Follow author</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThreeDots;
