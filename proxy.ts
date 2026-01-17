import { auth } from "@/auth"
import { NextResponse } from "next/server"

export async function proxy(request: Request) {
    const session = await auth()
    const { pathname } = new URL(request.url)

    // Allow public routes
    if (pathname.startsWith("/login") || pathname.startsWith("/api/auth")) {
        return NextResponse.next()
    }

    // Redirect to login if not authenticated
    if (!session?.user) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
