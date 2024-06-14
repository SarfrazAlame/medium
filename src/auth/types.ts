import type { Post, Response, Claps, Follows, SavedPost, User } from "@prisma/client";


export type PostWithAll = Post & {
   response: Response[],
   claps: Claps[],
   savedPost: SavedPost[],
   user: User
}


export type PostWithPostId = Post & {
   response: Response,
   claps: Claps[],
   savedPost: SavedPost[],
   user: User | null
} | null