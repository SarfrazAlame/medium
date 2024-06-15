"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { Library, Notebook, User2 } from "lucide-react";
import { IoMdStats } from "react-icons/io";
import { signOut } from "next-auth/react";

type User =
  | {
      id: string;
      name: string | null | undefined;
      email: string | null | undefined;
      image: string | null | undefined;
      username: string | null | undefined;
    }
  | undefined;

const Profile = ({ user }: { user: User }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {" "}
        <Image
          src={user?.image!}
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 gap-y-3">
        <DropdownMenuItem className="my-3 gap-3 cursor-pointer">
          <User2 className="text-gray-500" />
          <p className="text-[13px] text-gray-500">Profile</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="my-3 gap-3 cursor-pointer">
          <Library size={20} className="text-gray-500" />
          <p className="text-[13px] text-gray-500">Library</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="my-3 gap-3 cursor-pointer">
          <Notebook size={20} className="text-gray-500" />
          <p className="text-[13px] text-gray-500">Stories</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="my-3 gap-3 cursor-pointer">
          <IoMdStats size={25} className="text-gray-500" />
          <p className="text-[13px] text-gray-500">Stats</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="mt-5 gap-3 cursor-pointer">
          <p className="text-[13px] text-gray-500">Setting</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="mb-3 gap-3 cursor-pointer">
          <p className="text-[13px] text-gray-500">Help</p>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="mt-3 gap-3 cursor-pointer">
          <button
            className="text-[13px] text-gray-500"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            Sign Out
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem className=" gap-3 cursor-pointer">
          <p className="text-[13px] text-gray-500">{user?.email}</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
