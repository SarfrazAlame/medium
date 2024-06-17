import Image from "next/image";
import React from "react";

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
        <p className="text-sm">Write</p>
        <p className="text-sm">Sign in</p>
        <button className="text-sm border px-3 py-2 rounded-full text-white bg-gray-900">
          Get started
        </button>
      </div>
    </div>
  );
};

export default BeforLoginheader;
