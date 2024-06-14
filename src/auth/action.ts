'use server'
import { z } from "zod"
import { CreatePost } from "./schema"
import prisma from "./prisma"
import { getUserId } from "./getUserId"
import { revalidatePath } from "next/cache"

export default async function Postform(values: z.infer<typeof CreatePost>) {

    const userId = await getUserId()
    const validatedPath = CreatePost.safeParse(values)

    if (!validatedPath.success) {
        return {
            errors: validatedPath.error,
            message: "can't post"
        }
    }

    const { title, story, fileUrl } = validatedPath.data

    if (userId) {
        try {
            await prisma.post.create({
                data: {
                    userId,
                    title,
                    story,
                    fileUrl
                }
            })
        } catch (error) {
            console.log(error)
            return {
                message: "error is ", error
            }
        }
        revalidatePath('/dashboard')
    } else {
        console.log('nhiohai')
    }
} 