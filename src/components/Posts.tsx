import { PostWithAll } from "@/auth/types";
import Image from "next/image";
import React from "react";
import LowerSection from "./LowerSection";

const Posts = async ({ post }: { post: PostWithAll }) => {
  const user:any = []
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
        <div className="flex gap-8 items-center">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-gray-700">{post.title}</p>
            <p className="text-sm  text-zinc-600">{post.story}</p>
          </div>
          <div>
            {post?.fileUrl ? (
              <Image
                src={post.fileUrl || ""}
                alt="image"
                height="80"
                width="80"
              />
            ) : null}
          </div>
        </div>
        <div>
          <LowerSection post={post} />
        </div>
      </div>
    </div>
  );
};

export default Posts;