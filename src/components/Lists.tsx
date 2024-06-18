"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Timestamps from "./Timestamps";
import { BsSave, BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { ProfileUserProps } from "./GetData";
import { Post } from "@prisma/client";

const Lists = ({
  id,
  user,
  userId,
  followingLengths,
}: {
  id: string;
  user: ProfileUserProps;
  userId: string;
  followingLengths: number;
}) => {
  const [data, setData] = useState("");

  const [item, setItem] = useState(false);

  useEffect(() => {
    setData("Home");
  }, []);
  return (
    <div className="w-full">
      <div className="flex gap-8 border-b pb-5 mr-20">
        <button
          onClick={() => setData("Home")}
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          Home
        </button>
        {userId === id && (
          <>
            <button
              onClick={() => setData("List")}
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              List
            </button>
          </>
        )}
        <button
          onClick={() => setData("About")}
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          About
        </button>
      </div>
      {data === "Home" && (
        <div className="w-full mt-12 flex-col gap-y-4">
          <div className="flex gap-2 items-center">
            {user?.image && (
              <Image
                src={user?.image!}
                alt=""
                width={25}
                height={25}
                className="rounded-full"
              />
            )}
            <p className="text-sm">{user?.name}</p>
          </div>
          <div className="mt-4 mr-20 border-b pb-12">
            {/* @ts-ignore */}
            {user?.posts?.map((post: Post) => (
              <div>
                <div className="flex w-full justify-between">
                  <Link href={`/story/${post.id}`}>
                    <p className="text-xl font-bold text-gray-700">
                      {post.title}
                    </p>
                    <p className="mt-2 text-sm  text-gray-600">
                      {post.story.slice(0, 50)}
                    </p>
                  </Link>
                  <div>
                    {post?.fileUrl && (
                      <Image
                        src={post.fileUrl!}
                        alt=""
                        width={120}
                        height={120}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <Timestamps createdAt={post.createdAt} className="" />
                </div>
                <div className="mt-5 flex justify-end gap-6 mx-20">
                  <BsSave />
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <BsThreeDots />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-44">
                      {id === userId ? (
                        <>
                          <DropdownMenuItem>
                            <p className="my-4 cursor-pointer mx-4 text-sm hover:text-gray-900 text-gray-500">
                              Edit story
                            </p>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <p className="my-4 cursor-pointer mx-4 text-sm hover:text-gray-900 text-gray-500">
                              Story setting
                            </p>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <p className="my-4 cursor-pointer mx-4 text-sm hover:text-gray-900 text-gray-500">
                              Hide response
                            </p>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <p className="my-4 cursor-pointer mx-4 text-sm hover:text-gray-900 text-red-500">
                              Delete story
                            </p>
                          </DropdownMenuItem>
                        </>
                      ) : (
                        <>
                          <DropdownMenuItem>
                            <p className="my-4 cursor-pointer mx-4 text-sm hover:text-gray-900 text-gray-500">
                              Report story
                            </p>
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {userId === id && (
        <>
          {data === "List" && (
            <>
              {!item ? (
                <div onClick={() => setItem(true)} className="cursor-pointer">
                  <div className="w-full my-10 flex flex-col gap-y-3 bg-gray-50 p-5">
                    <div className="flex gap-2">
                      <div>
                        {user?.image && (
                          <Image
                            src={user?.image!}
                            alt=""
                            width={25}
                            height={25}
                            className="rounded-full"
                          />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{user?.name}</p>
                    </div>
                    <p className="text-xl font-bold text-gray-800">
                      Reading list
                    </p>
                    <p className="text-sm text-gray-500">
                      {user?.saved.length} stories
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-xl text-gray-600 font-bold py-8">
                    Reading List
                  </p>
                  {user?.saved.map((save) => (
                    <div className="flex flex-col gap-y-3 mb-10 border-b pb-4">
                      <div className="flex gap-2 items-center">
                        <div>
                          {save.post.user.image && (
                            <Image
                              src={save?.post?.user?.image!}
                              alt=""
                              width={25}
                              height={25}
                              className="rounded-full"
                            />
                          )}
                        </div>
                        <p className="">{save.user.name}</p>
                      </div>
                      <Link
                        href={`/story/${save.post.id}`}
                        className="flex items-center justify-between mr-20"
                      >
                        <div>
                          <p className="text-xl font-bold text-gray-800 ">
                            {save.post.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {save.post.story.slice(0, 60)}
                          </p>
                        </div>

                        <div>
                          {save.post.fileUrl && (
                            <Image
                              src={save?.post?.fileUrl}
                              alt=""
                              width={120}
                              height={120}
                            />
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}

      {data === "About" && (
        <div className="w-full h-72 flex mt-12 rounded mr-20 bg-gray-50 justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold text-gray-800 my-3">
              Tell the world about yourself
            </p>
            <p className="w-1/2 text-[13px]">
              Here’s where you can share more about yourself: your history, work
              experience, accomplishments, interests, dreams, and more. You can
              even add images and use rich text to personalize your bio.
            </p>
            <button className="text-sm mt-7 border px-3 py-2 rounded-full border-gray-600 font-sans text-gray-600">
              Get started
            </button>
          </div>
        </div>
      )}

      <p className="mt-5 text-sm text-green-500">
        {followingLengths} Following
      </p>
    </div>
  );
};

export default Lists;
