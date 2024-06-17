import Image from "next/image";
import React from "react";
import LoginWith from "./LoginWith";

const BeforLoginheader = () => {
  return (
    <div className="flex justify-around h-20 border-b border-gray-600">
      <div className="flex items-center">
        <div>
          <Image src={"/logoipsum-274.svg"} height={45} width={45} alt="" />
        </div>
        <p className="mx-2 text-3xl font-bold font-serif">Medium</p>
      </div>
      <div className="flex items-center gap-6">
        <LoginWith text="Write" className="text-sm" />
        <LoginWith text="Sign in" className="text-sm" />
        <LoginWith
          text="Get started"
          className="border px-7 text-white py-3 rounded-full bg-gray-900"
        />
      </div>
    </div>
  );
};

export default BeforLoginheader;
