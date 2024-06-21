import type { Post, Response, Claps, Follows, SavedPost, User } from "@prisma/client";
export type ResponseWithAll = Response & { user: User }
export type ClapsWithAll = Claps & { user: User }



export type PostWithAll = Post & {
   response: ResponseWithAll[],
   claps: ClapsWithAll[],
   savedPost: SavedPost[],
   user: User
}
