import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./lib/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [Google],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            // After sign in, redirect to dashboard
            if (url.startsWith(baseUrl)) return `${baseUrl}/dashboard`
            return baseUrl
        },
    },
})

