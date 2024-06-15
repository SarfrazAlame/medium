"use client";
import { FollowUser } from "@/auth/action";
import React from "react";

type userProps = {
  id: string;
  name: string;
  email: string;
  emailVerified: Date | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
};

const Follow = ({ user, follower }: { user: userProps; follower: string }) => {
  console.log(follower);
  console.log(user.id);
  return (
    <div>
      {follower ? (
        <>
          <button
            onClick={() => FollowUser(user.id)}
            className="text-gray-500 text-sm"
          >
            Following
          </button>
        </>
      ) : (
        <button
          className="text-sm text-green-500"
          onClick={() => FollowUser(user.id)}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default Follow;
