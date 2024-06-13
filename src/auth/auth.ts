import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import prisma from "./prisma";

export const authOption: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async session({ session, token }) {
            if (token) {

            }
            return session
        }
    },
    // @ts-ignore
    async jwt({ token, user }) {
        const prismaUser = await prisma.user.findFirst({
            where: {
                email: token.email
            }
        });
        if (!prismaUser) {
            token.id = user.id
            return token
        }

        if (!prismaUser.username) {
            await prisma.user.update({
                where: {
                    id: prismaUser.id
                },
                data: {
                    username: prismaUser.name?.split(" ").join("").toLowerCase()
                }
            })
        }

        return {
            id: prismaUser.id,
            name: prismaUser.name,
            email: prismaUser.email,
            picture: prismaUser.image
        }
    }
}


export const getAuthOptions = () => getServerSession(authOption)