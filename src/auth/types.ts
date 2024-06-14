import type { Post, Response, Claps,Follows,SavedPost, User } from "@prisma/client";


export type PostWithAll = Post & {
   Response:Response[],
   Claps: Claps[],
   SavedPost:SavedPost[],
   user:User
}
