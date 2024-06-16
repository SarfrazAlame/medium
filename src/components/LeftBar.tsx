import { fetchAllPost, fetchAllUser, fetchFollower } from "@/auth/fetch";
import { getUserId } from "@/auth/getUserId";
import { PostWithAll } from "@/auth/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LeftFollow from "./LeftFollow";
import { User } from "@prisma/client";

const LeftBar = async () => {
  const posts = await fetchAllPost();
  const userId = await getUserId();
  const users = await fetchAllUser();
  // @ts-ignore
  const AllPostsExceptUserId = posts.filter(
    (post: PostWithAll) => post.user.id !== userId
  );
  const AllUsersExceptMe = users?.filter((user: User) => user.id !== userId);

  return (
    <div className="p-6">
      <div>
        <p className="font-semibold text-gray-800">Staff Picks</p>
      </div>
      <div className="my-6">
        {AllPostsExceptUserId.map((post: PostWithAll) => (
          <div className="my-5" key={post.id}>
            <div className="flex gap-2 text-[13px]">
              <Link href={`/`} className="flex gap-2 text-[13px]">
                <Image
                  src={post.user.image!}
                  alt=""
                  width={25}
                  height={25}
                  className="rounded-full"
                />
                <p>{post.user.name}</p>
              </Link>
            </div>
            <p className="my-2 text-md font-bold text-gray-700 font-sans">
              {post.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <p className="font-semibold text-gray-800">Who to follow</p>
      </div>
      <div className="my-6">
        {AllUsersExceptMe?.map((user: User) => (
          <div className="my-5" key={user.id}>
            <div className="flex gap-2 justify-between text-[13px]">
              <Link href={`/`} className="flex gap-2 text-[13px]">
                <div>
                  <Image
                    src={user.image!}
                    alt=""
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </div>
                <p>{user.name}</p>
              </Link>
              <LeftFollow user={user}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
