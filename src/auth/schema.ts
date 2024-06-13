import { z } from "zod";

export const PostSchema = z.object({
    id: z.string(),
    title: z.string().min(1).max(20),
    story: z.string().max(250),
});

export const CreatePost = PostSchema.omit({id:true})

