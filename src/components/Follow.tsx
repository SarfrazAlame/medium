"use client";
import { FollowUser } from "@/auth/action";
import React from "react";
import toast from "react-hot-toast";

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
  const Follows = async () => {
    try {
      await FollowUser(user?.id);
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  };
  return (
    <div>
      {follower ? (
        <>
          <button onClick={Follows}>Following</button>
        </>
      ) : (
        <button className="text-sm text-green-500" onClick={Follows}>
          Follow
        </button>
      )}
    </div>
  );
};

export default Follow;
