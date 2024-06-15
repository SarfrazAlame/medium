import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { PostWithAll } from "@/auth/types";
import { FollowUser } from "@/auth/action";
import Follows from "./Follows";

type User =
  | {
      id: string;
      name: string | null | undefined;
      email: string | null | undefined;
      image: string | null | undefined;
      username: string | null | undefined;
    }
  | undefined;

const ThreeDots = ({ post, user, follower }: { post: PostWithAll; user: User, follower:string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BsThreeDots className="text-gray-600 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          {post?.user.id === user?.id ? (
            <>
              <button className="text-sm text-red-500">Delete</button>
            </>
          ) : (
            <>
              <button className="text-sm text-red-500">Report Story</button>
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Follows post={post} follower={follower}/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThreeDots;
