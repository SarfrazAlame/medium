'use server'
import { auth } from "@clerk/nextjs/server";
import prisma from "@/auth/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";
import { CreatePost } from "@/auth/schema";
import { getUserId } from "./getUserId";

export async function PublishStory(values: z.infer<typeof CreatePost>) {

    const userId = await getUserId()

    const validatedFields = CreatePost.safeParse(values)
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
            message: "failed to post"
        }
    }

    const { title, story, fileUrl } = validatedFields.data

    const { } = validatedFields.data

    try {
        const post = await prisma.post.create({
            data: {
                title,
                story,
                fileUrl,
                user: {
                    connect: {
                        id: userId
                    }
                }
            },
        })
        return NextResponse.json(post)
    } catch (error) {
        console.log(error)
        return {
            message: "error is ", error
        }
    }
}