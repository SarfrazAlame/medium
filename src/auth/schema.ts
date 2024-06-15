import { z } from "zod";

export const PostSchema = z.object({
    id: z.string(),
    title: z.string().min(1).max(50),
    story: z.string().max(250),
    fileUrl: z.string().optional()
});

export const CreatePost = PostSchema.omit({ id: true })

export const ResponseSchema = z.object({
    id: z.string(),
    body: z.string().min(1).max(200)
})

export const CreateResponse = ResponseSchema.omit({ id: true })