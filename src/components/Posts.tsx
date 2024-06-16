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
    <div className="flex gap-x-8   justify-between border-b my-3">
      <div
        className={
          post.fileUrl
            ? "h-36 w-full flex flex-col gap-y-6 pb-16"
            : "h-36 w-4/5 flex flex-col gap-y-6 pb-6 my-3"
        }>
        <Link href={`/story/${post.id}`} className="w-full flex flex-col">
          <div className="flex gap-3 items-center">
            <Link
              href={`/dashboard/${post.user.id}`}
              className="flex gap-3 items-center"
            >
              <div>
                <Image
                  src={post.user.image || ""}
                  alt=""
                  height={25}
                  width={25}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="-mt-1 text-sm tracking-wide">{post.user.name}</p>
              </div>
            </Link>
          </div>
          <div className="flex gap-8 items-center my-2 ">
            <div
              className={
                post?.fileUrl
                  ? "flex flex-col gap-y-2"
                  : "flex flex-col gap-y-2"
              }
            >
              <p className="text-2xl font-bold text-gray-700">{post.title}</p>
              <p className="text-sm  text-zinc-600">{stories}</p>
            </div>
          </div>
        </Link>
        <div className="-mt-3 flex justify-between pb-10">
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
      <div className={post.fileUrl ? "mt-4" : ""}>
        {post?.fileUrl ? (
          <Image
            src={post.fileUrl || ""}
            alt="image"
            height="160"
            width="160"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Posts;
