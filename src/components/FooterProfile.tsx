"use client";
import { FollowUser } from "@/auth/action";
import { PostWithAll } from "@/auth/types";
import Image from "next/image";
import React from "react";

const FooterProfile = ({
  post,
  follower,
  followers,
}: {
  post: PostWithAll;
  follower: string;
  followers: number;
}) => {
  return (
    <div className="h-96 w-full items-center flex">
      <div className="">
        <div>
          <Image
            src={post.user.image!}
            alt=""
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="flex w-96 justify-between">
          <div>
            <h1 className="text-2xl text-gray-700 font-semibold my-2">
              Written by {post.user.name}
            </h1>
            <p className="text-sm">{followers} Followers</p>
          </div>
          <div>
            {follower ? (
              <>
                <button
                  onClick={() => FollowUser(post.user.id)}
                  className="text-green-500 text-sm bg-inherit border border-green-500 px-3 py-2 rounded-full"
                >
                  Following
                </button>
              </>
            ) : (
              <button
                className="text-sm text-white bg-green-500 border px-4 py-2 rounded-full "
                onClick={() => FollowUser(post.user.id)}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterProfile;
