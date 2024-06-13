import { PostWithAll } from "@/auth/types";
import { User, clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import LowerSection from "./LowerSection";

const Posts = async ({ post }: { post: PostWithAll }) => {
  const user = await clerkClient.users.getUser(post.userId);
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-3 items-center">
          <div>
            <Image
              src={user.imageUrl}
              alt=""
              height={25}
              width={25}
              className="rounded-full"
            />
          </div>
          <p className="-mt-1 text-sm tracking-wide">{user.fullName}</p>
        </div>
        <div>
          <div className="flex flex-col ">
            <p className="text-2xl font-bold text-gray-700">{post.title}</p>
            <p className="text-sm  text-zinc-600">{post.story}</p>
          </div>
        </div>
        <div>
          <LowerSection/>
        </div>
      </div>
    </div>
  );
};

export default Posts;
