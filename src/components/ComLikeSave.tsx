import { likePost } from "@/auth/action";
import { StarIcon } from "lucide-react";
import React from "react";
import { PiHandsClappingThin } from "react-icons/pi";
import Comment from "./Comment";
import { PostWithAll } from "@/auth/types";
import Timestamps from "@/components/Timestamps";
import { fetchFollower, fetchSaved } from "@/auth/fetch";

import SavedPostCom from "./SavePost";
import { SavedPost } from "@prisma/client";

const ComLikeSave = async ({ post }: { post: PostWithAll }) => {
  const savedpost = await fetchSaved(post.id) as SavedPost;
  const follower: any = await fetchFollower(post.user?.id);
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
          <Comment post={post} user={post.user} response={post.response} />
        </div>
      </div>

     <SavedPostCom savedpost={savedpost} post={post} follower={follower}/>
    </>
  );
};

export default ComLikeSave;
