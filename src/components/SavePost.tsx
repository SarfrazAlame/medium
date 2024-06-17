"use client";
import { SavePost } from "@/auth/action";
import { Post, SavedPost } from "@prisma/client";
import React from "react";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import ThreeDots from "./ThreeDots";
import { PostWithAll } from "@/auth/types";

const SavedPostCom = ({
  savedpost,
  post,
  follower,
}: {
  savedpost: SavedPost;
  post: PostWithAll;
  follower: string;
}) => {
  return (
    <div>
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
        <ThreeDots post={post} user={post.user} follower={follower} />
      </div>
    </div>
  );
};

export default SavedPostCom;
