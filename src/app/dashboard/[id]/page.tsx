import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

// import {
//   fetchFollowingById,
//   fetchFollowingGetLength,
//   fetchUserByUserId,
// } from "@/auth/fetch";
// import { getUserId } from "@/auth/getUserId";
// import GetData from "@/components/GetData";
// import LeftProfile from "@/components/LeftProfile";
// import SubHeader from "@/components/SubHeader";
// import { Post, SavedPost, User } from "@prisma/client";
// import React from "react";

// export type UserProps = User & {
//   response: Response[];
//   saved: SavedPost[];
//   posts: Post[];
// };

// export type followingsProps = ({
//   following: {
//     id: string;
//     image: string | null;
//     name: string;
//     email: string;
//   };
// } & {
//   followerId: string;
//   followingId: string;
// })[];

// const page = async ({ params: { id } }: { params: { id: string } }) => {
//   const ProfileUser = (await fetchUserByUserId(id)) as UserProps;

//   const followings = (await fetchFollowingById(id)) as followingsProps;
//   const userId = await getUserId();

//   const followingLengths: any = await fetchFollowingGetLength(id);
//   return (
//     <div className="w-full flex ">
//       <div className="flex md:w-3/4  mx-auto ">
//         <div className="md:w-1/2 w-full  md:border-r">
//           <SubHeader ProfileUser={ProfileUser} />
//           <GetData id={id} followingLengths={followingLengths} />
//         </div>
//         <div className="hidden md:block">
//           <LeftProfile
//             ProfileUser={ProfileUser}
//             followings={followings}
//             userId={userId}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
