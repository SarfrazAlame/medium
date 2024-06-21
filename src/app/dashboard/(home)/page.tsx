import Posts from "@/components/Posts";
import { PostWithAll } from "@/auth/types";
import { fetchAllPost } from "@/auth/fetch";

const page = async () => {
  const PostData = await fetchAllPost();
  return (
    <>
      {PostData ? (
        <div className="flex flex-col gap-y-6 pr-10">
          {PostData?.map((post: PostWithAll) => (
            <Posts key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <>
          <p>Loading</p>
        </>
      )}
    </>
  );
};

export default page;
