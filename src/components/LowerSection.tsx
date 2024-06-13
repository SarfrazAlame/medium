import { ReceiptPoundSterlingIcon, Save, Star, StarIcon } from "lucide-react";
import React from "react";
import Timestamps from "./Timestamps";
import { PostWithAll } from "@/auth/types";
import { PiHandsClappingThin, PiThreeD } from "react-icons/pi";
import { FaComment } from "react-icons/fa";
import { CiSaveUp1, CiSaveUp2 } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

const LowerSection = ({ post }: { post: PostWithAll }) => {
  return (
    <div className="flex   justify-between">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-6">
          <StarIcon size={10} className="cursor-pointer" />
          <Timestamps createdAt={post.createdAt} className="cursor-pointer" />
        </div>

        <div>
          <PiHandsClappingThin className="cursor-pointer" />
          <p>{post.Claps?.length}</p>
        </div>

        <div>
          <FaComment className="text-slate-500 cursor-pointer" />
          <p>{post.Response?.length}</p>
        </div>
      </div>

      <div className="flex gap-5">
        <CiSaveUp2 className="text-gray-600  cursor-pointer" />
        <BsThreeDots className="text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default LowerSection;
