import { Response } from "@prisma/client";
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

const LowerSection = ({
  post,
  user,
  follower,
  savedpost,
  response,
}: {
  post: PostWithAll;
  user: User;
  follower: string;
  savedpost: string;
  response: Response;
}) => {
  return (
    <>
        <ClapsResponse
          post={post}
          user={user}
          follower={follower}
          savedpost={savedpost}
          response={response}
        />
    </>
  );
};
export default LowerSection;
