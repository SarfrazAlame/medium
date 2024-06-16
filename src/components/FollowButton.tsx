"use client";
import { FollowUser } from "@/auth/action";
import { Follows, User } from "@prisma/client";
import React from "react";

const FollowButton = ({ user, follows }: { user: User; follows: Follows }) => {
  return (
    <div>
      {follows ? (
        <button
          className="border border-gray-400 py-1.5 px-4 bg-black text-white rounded-full"
          onClick={() => FollowUser(user.id)}
        >
          Following
        </button>
      ) : (
        <button
          className="border border-gray-400 py-1.5 px-4 rounded-full"
          onClick={() => FollowUser(user.id)}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default FollowButton;
