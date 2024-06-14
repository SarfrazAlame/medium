import ClapsResponse from "./ClapsResponse";
import { PostWithAll } from "@/auth/types";

const LowerSection = async ({ post }: { post: PostWithAll }) => {
  return (
    <>
      <ClapsResponse post={post} />
    </>
  );
};
export default LowerSection;
