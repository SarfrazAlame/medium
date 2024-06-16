import { UserProps, followingsProps } from "@/app/dashboard/[id]/page";
import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const LeftProfile = ({
  ProfileUser,
  followings,
}: {
  ProfileUser: UserProps;
  followings: followingsProps;
}) => {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-y-7">
        <div>
          <Image
            src={ProfileUser.image!}
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <p className=" font-semibold  text-gray-600">{ProfileUser.name}</p>
        <p className="text-sm text-green-600 hover:text-gray-600 cursor-pointer">
          Edit profile
        </p>

        <p className="font-semibold text-gray-900">Following</p>

        <div>
          {followings.map((follow) => (
            <div
              key={follow.followerId}
              className="flex justify-between w-72 items-center"
            >
              <div className="flex gap-3 my-2">
                <div>
                  <Image
                    src={follow.following.image!}
                    alt=""
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </div>
                <p className="text-sm text-gray-600 ">
                  {follow.following.name}
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <BsThreeDots />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <div className="w-72 p-5">
                      <div className="flex items-center gap-2">
                        <div>
                          <Image
                            src={follow.following.image!}
                            alt=""
                            width={30}
                            height={30}
                            className="rounded-full"
                          />
                        </div>
                        <p className="text-xl font-semibold text-gray-800">
                          {follow.following.name}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex w-full justify-between">
                      <p>{}Followers</p>
                      <button className="border px-3 py-1 rounded-full text-green-500 border-green-500">
                        Following
                      </button>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftProfile;
