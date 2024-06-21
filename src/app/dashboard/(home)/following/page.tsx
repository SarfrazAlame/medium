import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

// import { fetchFollowingUser } from "@/auth/fetch";
// import { getUserId } from "@/auth/getUserId";
// import PostOfFollowings from "@/components/PostOfFollowings";
// import React from "react";

// type UserProps = ({
//   following: {
//     claps: ({
//       user: {
//         id: string;
//         name: string;
//         email: string;
//         emailVerified: Date | null;
//         image: string | null;
//         createdAt: Date;
//         updatedAt: Date;
//       };
//     } & {} & {
//       id: string;
//       userId: string;
//       createdAt: Date;
//       updatedAt: Date;
//       postId: string;
//     })[];
//     response: ({} & {})[];
//     posts: {}[];
//     saved: {}[];
//   } & {
//     id: string;
//     name: string;
//     email: string;
//     emailVerified: Date | null;
//     image: string | null;
//     createdAt: Date;
//     updatedAt: Date;
//   };
// } & {})[];

// const page = async () => {
//   const userId = await getUserId();
//   const FollowingUsers = await fetchFollowingUser(userId) as UserProps;

//   return (
//     <div>
//       <div>
//         {FollowingUsers?.map((user) => (
//           <div key={user.following.id}>
//             <PostOfFollowings user={user} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;
