"use client";
import { PostWithAll } from "@/auth/types";
import React from "react";
import { CiSaveUp2 } from "react-icons/ci";
import { PiHandsClappingThin } from "react-icons/pi";
import ThreeDots from "./ThreeDots";
import { likePost } from "@/auth/action";
import { Response } from "@prisma/client";
import Comment from "./Comment";

type User =
  | {
      id: string;
      name: string | null | undefined;
      email: string | null | undefined;
      image: string | null | undefined;
      username: string | null | undefined;
    }
  | undefined;

const ShowIcons = ({
  post,
  user,
  response,
  follower,
}: {
  post: PostWithAll;
  user: User;
  response: Response;
  follower: string;
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-10">
        <button
          onClick={() => likePost(post?.id)}
          className="flex items-center gap-1"
        >
          <PiHandsClappingThin className="cursor-pointer" />
          <p className="text-gray-600 text-sm">{post?.claps.length}</p>
        </button>

        <Comment post={post} user={user} response={response} />
      </div>

      <div className="flex gap-5">
        <CiSaveUp2 className="text-gray-600  cursor-pointer" />
        <ThreeDots post={post} user={user} follower={follower} />
      </div>
    </div>
  );
};

export default ShowIcons;
