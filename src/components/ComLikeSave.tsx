"use client";
import { likePost } from "@/auth/action";
import { StarIcon } from "lucide-react";
import React from "react";
import { PiHandsClappingThin } from "react-icons/pi";
import Comment from "./Comment";
import { PostWithAll } from "@/auth/types";
import Timestamps from "@/components/Timestamps";

import SavedPostCom from "./SavePost";
import { SavedPost } from "@prisma/client";

const ComLikeSave = ({
  post,
  savedPost,
  follower,
}: {
  post: PostWithAll;
  savedPost: SavedPost;
  follower: string;
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
        </button>
        <p className="text-gray-600 text-sm">{post.claps.length}</p>

        <div className="flex items-center gap-1">
          {/* <Comment post={post} user={post.user} response={post.response} /> */}
        </div>
        <SavedPostCom savedpost={savedPost} post={post} follower={follower} />
      </div>
    </>
  );
};

export default ComLikeSave;
