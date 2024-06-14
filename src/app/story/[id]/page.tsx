import { fetchPostByPostId } from "@/auth/fetch";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const { post } = await fetchPostByPostId(id);
  return (
    <div>
      <p>{post?.title}</p>
    </div>
  );
};

export default page;
