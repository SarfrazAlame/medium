import { fetchUserByUserId } from "@/auth/fetch";
import SubHeader from "@/components/SubHeader";
import { SavedPost, User } from "@prisma/client";
import React from "react";

export type UserProps = User & {
  response: Response[];
  saved: SavedPost[];
};

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const ProfileUser = (await fetchUserByUserId(id)) as UserProps;

  return (
    <div>
      <SubHeader ProfileUser={ProfileUser} />
      <div>
        
      </div>
    </div>
  );
};

export default page;
