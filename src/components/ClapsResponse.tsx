"use client";
import React from "react";
import { StarIcon } from "lucide-react";
import Timestamps from "./Timestamps";
import { PiHandsClappingThin } from "react-icons/pi";
import { FaComment } from "react-icons/fa";
import { CiSaveUp2 } from "react-icons/ci";
import ThreeDots from "./ThreeDots";
import { SavePost, likePost } from "@/auth/action";
import { PostWithAll } from "@/auth/types";

type User =
  | {
      id: string;
      name: string | null | undefined;
      email: string | null | undefined;
      image: string | null | undefined;
      username: string | null | undefined;
    }
  | undefined;

const ClapsResponse = ({
  post,
  user,
  follower,
}: {
  post: PostWithAll;
  user: User;
  follower: string;
}) => {
  return (
    <div className="flex   justify-between">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-6">
          <StarIcon size={10} className="cursor-pointer" />
          <Timestamps createdAt={post.createdAt} className="cursor-pointer" />
        </div>

        <button
          onClick={() => likePost(post.id)}
          className="flex items-center gap-1"
        >
          <PiHandsClappingThin className="cursor-pointer" />
          <p className="text-gray-600 text-sm">{post.claps.length}</p>
        </button>

        <div className="flex items-center gap-1">
          <FaComment className="text-slate-500 cursor-pointer text-sm" />
          <p className="text-gray-600 text-sm">{post.response?.length}</p>
        </div>
      </div>

      <div className="flex gap-5">
        <CiSaveUp2
          className="text-gray-600  cursor-pointer"
          onClick={() => SavePost(post.id)}
        />
        <ThreeDots post={post} user={user} follower={follower} />
      </div>
    </div>
  );
};

export default ClapsResponse;
