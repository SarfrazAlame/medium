import { auth } from "@clerk/nextjs/server";
import prisma from "@/auth/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { title, story, fileUrl } = await req.json()

    const { userId } = auth()

    if (userId) {
        try {
            const post = await prisma.post.create({
                data: {
                    userId,
                    title,
                    story,
                    fileUrl
                }
            })
            return NextResponse.json(post)
        } catch (error) {
            console.log(error)
            return {
                message: "error is ", error
            }
        }
    }
}