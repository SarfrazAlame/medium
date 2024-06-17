import { fetchResponseByPostId } from "@/auth/fetch";
import React from "react";
import ShowIcons from "./ShowIcons";
import { PostWithAll } from "@/auth/types";
import { User } from "@prisma/client";

const Responses = async ({ post, user }: { post: PostWithAll; user: User }) => {
  const response = await fetchResponseByPostId(post.id);
  return (
    <div>
      {/* @ts-ignore */}
      <ShowIcons post={post} user={user} />
    </div>
  );
};

export default Responses;
