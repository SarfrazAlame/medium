import { fetchResponseByPostId } from "@/auth/fetch";
import Image from "next/image";
import React from "react";
import ShowIcons from "./ShowIcons";
import { PostWithAll } from "@/auth/types";
import { User } from "@clerk/nextjs/server";

const Responses = async ({ post, user }: { post: PostWithAll; user: User }) => {
  const response = await fetchResponseByPostId(post.id);
  return (
    <div>
      <ShowIcons post={post} user={user} />
    </div>
  );
};

export default Responses;
