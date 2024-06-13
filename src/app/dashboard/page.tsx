import Posts from "@/components/Posts";
import prisma from "@/auth/prisma";
import { PostWithAll } from "@/auth/types";
import { clerkClient, currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const PostData = await prisma?.post.findMany({
    include: {
      claps: {
        select: {
          userId: true,
          id: true,
          createdAt: true,
          updatedAt: true,
          post: true,
          postId: true,
        },
      },
      response: {
        select: {
          userId: true,
          body: true,
          createdAt: true,
          id: true,
          postId: true,
          updatedAt: true,
        },
      },
      savePost: {
        select: {
          id: true,
          postId: true,
          userId: true,
          post: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <div className="flex flex-col gap-y-6">
        {/* @ts-ignore */}
        {PostData?.map((post: PostWithAll) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default page;
