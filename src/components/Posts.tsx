import { PostWithAll } from "@/auth/types";
import Image from "next/image";
import React from "react";
import LowerSection from "./LowerSection";
import Link from "next/link";
import { getAuthOptions } from "@/auth/auth";
import { fetchFollower, fetchResponseByPostId, fetchSaved } from "@/auth/fetch";

const Posts = async ({ post }: { post: PostWithAll }) => {
  const session = await getAuthOptions();
  const user = session?.user;
  const follower: any = await fetchFollower(post.user.id);
  const savedpost: any = await fetchSaved(post.id);

  const stories = post.story.slice(0, 70);
  const response = await fetchResponseByPostId(post.id);

  return (
    <div className="flex flex-col gap-y-4 border-b my-3 pb-3">
      <Link href={`/story/${post.id}`}>
        <div className="flex gap-3 items-center">
          <div>
            <Image
              src={post.user.image || ""}
              alt=""
              height={25}
              width={25}
              className="rounded-full"
            />
          </div>
          <p className="-mt-1 text-sm tracking-wide">{post.user.name}</p>
        </div>
        <div className="flex gap-8 items-center my-2 ">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-bold text-gray-700">{post.title}</p>
            <p className="text-sm  text-zinc-600">{stories}</p>
          </div>
          <div>
            {post?.fileUrl ? (
              <Image
                src={post.fileUrl || ""}
                alt="image"
                height="300"
                width="300"
              />
            ) : null}
          </div>
        </div>
      </Link>
      <div>
        <LowerSection
          post={post}
          user={user}
          follower={follower}
          savedpost={savedpost}
          // @ts-ignore
          response={response}
        />
      </div>
    </div>
  );
};

export default Posts;
