import Image from "next/image";
import React from "react";
import ComLikeSave from "./ComLikeSave";
import { PostWithAll } from "@/auth/types";
import { fetchFollower, fetchSaved } from "@/auth/fetch";
import { SavedPost } from "@prisma/client";

type UserProps = {
  following: {
    claps: ({
      user: {
        id: string;
        name: string;
        email: string;
        emailVerified: Date | null;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
      };
    } & {} & {
      id: string;
      userId: string;
      createdAt: Date;
      updatedAt: Date;
      postId: string;
    })[];
    response: ({} & {})[];
    posts: {}[];
    saved: {}[];
  } & {
    id: string;
    name: string;
    email: string;
    emailVerified: Date | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
};

const PostOfFollowings = async ({ user }: { user: UserProps }) => {
  const savedpost = (await fetchSaved(user?.following?.id)) as SavedPost;
  const follower: any = await fetchFollower(user?.following?.id);
  return (
    <div className="mb-8 border-b pb-4">
      <div className="flex gap-3">
        <div>
          <Image
            src={user?.following?.image!}
            alt=""
            width={25}
            height={25}
            className="rounded-full"
          />
        </div>
        <p className="text-sm text-gray-800">{user?.following?.name}</p>
      </div>
      <div>
        {/* @ts-ignore */}
        {user?.following?.posts?.map((post: PostWithAll) => (
          <div key={post?.id} className="flex justify-between mr-12">
            <div key={post?.id} className="flex flex-col gap-3 mt-3">
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {post?.title}
                </p>
                <p className="text-sm text-gray-600">
                  {post?.story.slice(0, 60)}
                </p>
              </div>
              <ComLikeSave
                post={post}
                savedPost={savedpost}
                follower={follower}
              />
            </div>
            <div>
              {post.fileUrl && (
                <Image src={post?.fileUrl!} alt="" width={130} height={130} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostOfFollowings;
