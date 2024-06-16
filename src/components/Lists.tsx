"use client";
import { UserProps } from "@/app/dashboard/[id]/page";
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
import Follows from "./Follows";

const Lists = ({
  id,
  user,
  userId,
  follower
}: {
  id: string;
  user: UserProps;
  userId: string;
  follower:string
}) => {
  const [data, setData] = useState("");

  useEffect(() => {
    setData("Home");
  }, []);
  return (
    <div>
      <div className="flex gap-8 border-b pb-5 mr-20">
        <button
          onClick={() => setData("Home")}
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          Home
        </button>
        <button
          onClick={() => setData("List")}
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          List
        </button>
        <button
          onClick={() => setData("About")}
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          About
        </button>
      </div>
      {data === "Home" && (
        <div className="mt-12 flex-col gap-y-4">
          <div className="flex gap-2 items-center">
            <Image
              src={user.image!}
              alt=""
              width={25}
              height={25}
              className="rounded-full"
            />
            <p className="text-sm">{user.name}</p>
          </div>
          <div className="mt-4 w-1/2 border-b pb-12">
            <p>
              {user.posts?.map((post) => (
                <div>
                  <p className="text-xl font-bold text-gray-700">
                    {post.title}
                  </p>
                  <p className="mt-2 text-sm  text-gray-600">
                    {post.story.slice(0, 50)}
                  </p>

                  <div>
                    <Timestamps createdAt={post.createdAt} className="" />
                  </div>
                  <div className="mt-5 flex justify-end gap-6 mx-20">
                    <BsSave />
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <BsThreeDots />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-44 h-56">
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
                          {/* @ts-ignore */}
                          <Follows post={post} follower={follower}/>
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </p>
          </div>
        </div>
      )}

      {data === "List" && <div>list</div>}

      {data === "About" && <div>About</div>}
    </div>
  );
};

export default Lists;
