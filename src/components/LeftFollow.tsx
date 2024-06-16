import { User } from "@prisma/client";
import React from "react";
import FollowButton from "./FollowButton";
import { fetchFollower } from "@/auth/fetch";

const LeftFollow = async({ user }: { user: User }) => {
  const follows:any = await fetchFollower(user.id)
  return (
    <div>
      <FollowButton user={user} follows={follows} />
    </div>
  );
};

export default LeftFollow;
