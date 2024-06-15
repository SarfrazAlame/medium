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
  follower,
  savedpost,
}: {
  post: PostWithAll;
  user: User;
  follower: string;
  savedpost: string;
}) => {
  return (
    <>
      <ClapsResponse post={post} user={user} follower={follower} savedpost={savedpost}/>
    </>
  );
};
export default LowerSection;
