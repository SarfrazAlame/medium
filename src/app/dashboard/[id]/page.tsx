import { fetchUserByUserId } from "@/auth/fetch";
import GetData from "@/components/GetData";
import Lists from "@/components/Lists";
import SubHeader from "@/components/SubHeader";
import { Post, SavedPost, User } from "@prisma/client";
import React from "react";

export type UserProps = User & {
  response: Response[];
  saved: SavedPost[];
  posts:Post[]
};

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const ProfileUser = (await fetchUserByUserId(id)) as UserProps;

  return (
    <div>
      <SubHeader ProfileUser={ProfileUser} />
      <div>
        <GetData id={id} />
      </div>
    </div>
  );
};

export default page;
