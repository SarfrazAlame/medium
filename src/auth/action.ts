import { z } from "zod"
import { CreatePost } from "./schema"
import prisma from "./prisma"
import { auth, currentUser, getAuth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function Postform(values: z.infer<typeof CreatePost>) {
    const { userId } = getAuth()
    const validatedPath = CreatePost.safeParse(values)
    if (!validatedPath.success) {
        return {
            errors: validatedPath.error,
            message: "can't post"
        }
    }

    const { title, story } = validatedPath.data

    if (userId) {
        try {
            await prisma.post.create({
                data: {
                    userId,
                    title,
                    story
                }
            })
        } catch (error) {
            console.log(error)
            return {
                message: "error is ", error
            }
        }
    } else {
        console.log('nhiohai')
    }
} 