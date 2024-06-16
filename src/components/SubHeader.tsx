import { UserProps } from "@/app/dashboard/[id]/page";
import Lists from "@/components/Lists";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const SubHeader = async ({ ProfileUser }: { ProfileUser: UserProps }) => {
  return (
    <div>
      <div className="my-12 flex justify-between items-center mr-20">
        <p className="text-4xl font-bold text-gray-800">{ProfileUser?.name}</p>
        <BsThreeDots className="text-gray-700" size={20} />
      </div>
    </div>
  );
};

export default SubHeader;
