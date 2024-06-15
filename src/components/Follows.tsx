import { FollowUser } from "@/auth/action";
import { PostWithAll } from "@/auth/types";
import React from "react";

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
          {" "}
          <button
            className="text-sm text-gray-600"
            onClick={() => FollowUser(post.user.id)}
          >
            Unfollow author
          </button>
        </>
      ) : (
        <>
          {" "}
          <button
            className="text-sm text-gray-600"
            onClick={() => FollowUser(post.user.id)}
          >
            Follow author
          </button>
        </>
      )}
    </div>
  );
};

export default Follows;
