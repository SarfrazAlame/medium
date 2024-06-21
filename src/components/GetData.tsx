import React from "react";
import Lists from "./Lists";
import { fetchUserByUserId } from "@/auth/fetch";
import { UserProps } from "@/app/dashboard/[id]/page";
import { getUserId } from "@/auth/getUserId";
import { Post, User } from "@prisma/client";

export type ProfileUserProps =
  | (User &
      ({
        response: ({
          user: {
            id: string;
            name: string;
            email: string;
            emailVerified: Date | null;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
          };
        } & {
          id: string;
          userId: string;
          body: string | null;
          postId: string;
          createdAt: Date;
          updatedAt: Date;
        })[];
        posts: {}[];
        saved: ({
          user: User;
          post: Post & {
            user: User;
          };
        } & {})[];
      } & {}))
  | null;

const GetData = async ({
  id,
  followingLengths,
}: {
  id: string;
  followingLengths: number;
}) => {
  const user = (await fetchUserByUserId(id)) as ProfileUserProps;
  const userId = await getUserId();

  return (
    <Lists
      id={id}
      user={user}
      userId={userId}
      followingLengths={followingLengths}
    />
  );
};

export default GetData;
