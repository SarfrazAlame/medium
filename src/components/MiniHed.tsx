import Link from "next/link";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const MiniHed = () => {
  return (
    <div className="flex justify-center h-28 items-center">
      <div className="flex gap-8 border-b pb-3">
        <CiCirclePlus className="cursor-pointer text-xl"/>
        <Link
          href={"/dashboard"}
          className="text-[15px] font-light text-gray-700"
        >
          For you
        </Link>
        <Link
          href={"/dashboard"}
          className="text-[15px] font-light text-gray-700"
        >
          Following
        </Link>
      </div>
    </div>
  );
};

export default MiniHed;
