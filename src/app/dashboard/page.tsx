import Posts from "@/components/Posts";
import prisma from "@/auth/prisma";
import { PostWithAll } from "@/auth/types";
import { fetchAllPost } from "@/auth/fetch";

const page = async () => {
  const PostData = await fetchAllPost();
  return (
    <>
      <div className="flex flex-col gap-y-6 pr-10">
        {/* @ts-ignore */}
        {PostData?.map((post: PostWithAll) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default page;
