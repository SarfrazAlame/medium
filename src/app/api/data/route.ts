import prisma from "@/auth/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
        
        return NextResponse.json(data)
    } catch (error) {
        console.log(error)
        return {
            message: "can't get data"
        }
    }
}