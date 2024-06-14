"use server";
import { getServerSession } from "next-auth";
import { authOption } from "./auth";

export const getUserId = async () => {
  const session = await getServerSession(authOption);
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("Unauthorized");
  }
  return userId;
};
