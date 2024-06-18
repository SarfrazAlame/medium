'use client'
import { FollowUser } from "@/auth/action";
import { PostWithAll } from "@/auth/types";
import React from "react";
import toast from "react-hot-toast";

const Follows = ({
  post,
  follower,
}: {
  post: PostWithAll;
  follower: string;
}) => {
  return (
    <div>
      {follower ? (
        <>
          <button
            className="text-sm text-gray-600"
            onClick={() => {
              FollowUser(post?.user?.id);
              toast.success(`you've unfollowed ${post.user.name}`);
            }}
          >
            Unfollow author
          </button>
        </>
      ) : (
        <>
          <button
            className="text-sm text-gray-600"
            onClick={() => {
              FollowUser(post?.user?.id);
              toast.success(`you'r now following ${post.user?.name}`);
            }}
          >
            Follow author
          </button>
        </>
      )}
    </div>
  );
};

export default Follows;
