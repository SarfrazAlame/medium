import React from "react";
import Lists from "./Lists";
import {
  fetchFollower,
  fetchFollowingById,
  fetchUserByUserId,
} from "@/auth/fetch";
import { UserProps } from "@/app/dashboard/[id]/page";
import { getUserId } from "@/auth/getUserId";

const GetData = async ({
  id,
  followingLengths,
}: {
  id: string;
  followingLengths: number;
}) => {
  const user = (await fetchUserByUserId(id)) as UserProps;
  const userId = await getUserId();

  return <Lists id={id} user={user} userId={userId} followingLengths={followingLengths} />;
};

export default GetData;
