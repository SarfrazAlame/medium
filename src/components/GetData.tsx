import React from "react";
import Lists from "./Lists";
import { fetchFollower, fetchUserByUserId } from "@/auth/fetch";
import { UserProps } from "@/app/dashboard/[id]/page";
import { getUserId } from "@/auth/getUserId";

const GetData = async ({ id }: { id: string }) => {
  const user = await fetchUserByUserId(id) as UserProps;
  const userId = await getUserId()
  const follower: any = await fetchFollower(id);
  return <Lists id={id} user={user} userId={userId} follower={follower}/>;
};

export default GetData;
