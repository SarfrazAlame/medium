import { z } from "zod";

export const PostSchema = z.object({
    id: z.string(),
    title: z.string().min(1).max(50),
    story: z.string().max(250),
    imageUrl:z.string().optional()
});

export const CreatePost = PostSchema.omit({id:true})

