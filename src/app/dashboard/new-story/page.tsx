import { UserButton } from "@clerk/nextjs";
import { DraftingCompass, DraftingCompassIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <div className=" w-1/2 flex justify-between items-center mx-auto">
        <div>
          <Image src={"/logoipsum-274.svg"} height={45} width={45} alt="" />
        </div>
        <div>
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default page;
