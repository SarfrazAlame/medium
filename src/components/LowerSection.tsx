import ClapsResponse from "./ClapsResponse";
import { PostWithAll } from "@/auth/types";

type User =
  | {
      id: string;
      name: string | null | undefined;
      email: string | null | undefined;
      image: string | null | undefined;
      username: string | null | undefined;
    }
  | undefined;

const LowerSection = async ({
  post,
  user,
  follower
}: {
  post: PostWithAll;
  user: User;
  follower:string
}) => {
  return (
    <>
      <ClapsResponse post={post} user={user} follower={follower}/>
    </>
  );
};
export default LowerSection;
