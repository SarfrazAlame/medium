'use server'
import { z } from "zod"
import { CreatePost, CreateResponse } from "./schema"
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

export const likePost = async (postId: string) => {
    const userId = await getUserId()
    try {
        await prisma.claps.create({
            data: {
                postId,
                userId
            }
        })
        revalidatePath('/dashboard')
    } catch (error) {
        console.log(error)
        return {
            message: "can't like"
        }
    }
}

export const ResponsePost = async (postId: string, values: z.infer<typeof CreateResponse>) => {
    const userId = await getUserId()
    const validatedFields = CreateResponse.safeParse(values)
    if (!validatedFields.success) {
        throw new Error('Something went wrong')
    }
    const { body } = validatedFields.data
    try {
        await prisma.response.create({
            data: {
                body,
                postId,
                userId
            }
        })
        revalidatePath(`/story/${postId}`)
    } catch (error) {
        console.log(error)
        return error
    }
}