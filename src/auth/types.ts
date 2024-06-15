import type { Post, Response, Claps, Follows, SavedPost, User } from "@prisma/client";


export type PostWithAll = Post & {
   response: Response & User[],
   claps: Claps & User[],
   savedPost: SavedPost & User[],
   user: User  
} 

 