import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiBellThin } from "react-icons/pi";

const WriteHeader = () => {
  return (
    <div className="w-full">
      <div className=" w-1/2  h-20 flex justify-between items-center mx-auto">
        <Link href={"/"}>
          <div className="flex items-center gap-2 mt-1">
            <Image src={"/logoipsum-274.svg"} height={45} width={45} alt="" />
            <p className="text-sm text-slate-600">Draft</p>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <BsThreeDots className="cursor-pointer" />
          <PiBellThin size={24} className="cursor-pointer" />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default WriteHeader;
