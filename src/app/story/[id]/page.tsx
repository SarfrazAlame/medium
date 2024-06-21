import { getAuthOptions } from "@/auth/auth";
import {
  fetchFollower,
  fetchFollowerByIdLength,
  fetchPostByPostId,
  fetchResponseByPostId,
} from "@/auth/fetch";
import Follow from "@/components/Follow";
import FooterProfile from "@/components/FooterProfile";
import ShowIcons from "@/components/ShowIcons";
import Timestamp from "@/components/Timestamps";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const { post } = await fetchPostByPostId(id);
  const name = post?.user.name;
  // @ts-ignore
  const CapName = name?.charAt(0).toUpperCase() + name?.slice(1);

  const session = await getAuthOptions();
  const user = session?.user;

  const response = await fetchResponseByPostId(id);

  // @ts-ignore
  const follower: any = await fetchFollower(post?.user.id);
  // @ts-ignore
  const followers = await fetchFollowerByIdLength(post?.user?.id);

  return (
    <div className="mt-14 md:w-[46rem] w-full">
      {post?.fileUrl && (
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <Image src={post?.fileUrl} alt="" width={500} height={500} />
          </AspectRatio>
        </div>
      )}
      <div className="lg:text-4xl text-3xl">
        <p className=" font-bold text-gray-700 my-2"> {post?.title}</p>
      </div>
      <div className="flex items-center my-7 gap-4">
        <div>
          <Image
            src={post?.user.image!}
            alt=""
            width={45}
            height={45}
            className="rounded-full"
          />
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <div>
              <p className="">{CapName}</p>
            </div>
            <p className="-mt-2">.</p>
            {/* @ts-ignore */}
            <Follow user={post?.user} follower={follower} />
          </div>
          <div className="flex items-center gap-4 mt-1">
            <p className="text-[13px] text-gray-600">4 min read</p>
            <p className="-mt-2">.</p>
            {post?.createdAt ? (
              <Timestamp createdAt={post?.createdAt} className="" />
            ) : null}
          </div>
        </div>
      </div>

      <div className="border-b border-t py-3">
        <ShowIcons
          // @ts-ignore
          post={post}
          // @ts-ignore
          response={response}
          user={user}
          follower={follower}
        />
      </div>
      <p className="text-xl text-slate-500 my-6">{post?.story}</p>

      <div>
        {/* @ts-ignore */}
        <FooterProfile post={post} follower={follower} followers={followers} />
      </div>
    </div>
  );
};

export default page;
