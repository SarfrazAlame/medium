import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import prisma from "./prisma";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from '@auth/prisma-adapter'

export const authOption: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
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
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.name = user.name
                token.email = user.email
                token.image = user.image
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }
            return session
        }
    },

}

export const getAuthOptions = () => getServerSession(authOption)
