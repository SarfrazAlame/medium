"use client";
import React from "react";
import { StarIcon } from "lucide-react";
import Timestamps from "./Timestamps";
import { PiHandsClappingThin } from "react-icons/pi";
import ThreeDots from "./ThreeDots";
import { SavePost, likePost } from "@/auth/action";
import { PostWithAll } from "@/auth/types";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import Comment from "./Comment";
import { Response } from "@prisma/client";

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
  savedpost,
  response,
}: {
  post: PostWithAll;
  user: User;
  follower: string;
  savedpost: string;
  response: Response;
}) => {
  return (
    <>
      <div className="flex gap-10">
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
          <Comment post={post} user={user} response={response} />
        </div>
      </div>

      <div className="flex gap-5">
        {savedpost ? (
          <>
            <GoBookmarkFill
              className="text-gray-600 text-xl  cursor-pointer"
              onClick={() => SavePost(post.id)}
            />
          </>
        ) : (
          <>
            <GoBookmark
              className="text-gray-600 text-xl  cursor-pointer"
              onClick={() => SavePost(post.id)}
            />
          </>
        )}
        <ThreeDots post={post} user={user} follower={follower} />
      </div>
    </>
  );
};

export default ClapsResponse;
