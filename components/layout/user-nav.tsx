import { auth, signOut } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export async function UserNav() {
    const session = await auth()

    if (!session?.user) {
        return (
            <Button variant="outline" asChild>
                <Link href="/login">Sign In</Link>
            </Button>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="relative h-10 w-10 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm hover:scale-105 transition-transform">
                    <Avatar className="h-full w-full rounded-none">
                        <AvatarImage src={session.user.image ?? ""} alt={session.user.name ?? ""} />
                        <AvatarFallback className="bg-indigo-600 text-white font-bold">{session.user.name?.[0] ?? "U"}</AvatarFallback>
                    </Avatar>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 mt-2 bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-white/10 backdrop-blur-2xl rounded-[1.5rem] p-2 shadow-2xl" align="end" forceMount>
                <DropdownMenuLabel className="font-normal p-4">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">{session.user.name}</p>
                        <p className="text-xs font-medium leading-none text-slate-500 dark:text-slate-400">
                            {session.user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-200 dark:bg-white/10" />
                <DropdownMenuItem className="rounded-xl focus:bg-indigo-50 dark:focus:bg-indigo-500/10 focus:text-indigo-600 dark:focus:text-indigo-400 p-3" asChild>
                    <Link href="/dashboard" className="flex items-center gap-2 cursor-pointer font-semibold">
                        Dashboard
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-200 dark:bg-white/10" />
                <DropdownMenuItem className="rounded-xl focus:bg-red-50 dark:focus:bg-red-500/10 focus:text-red-600 dark:focus:text-red-400 p-3" asChild>
                    <form
                        action={async () => {
                            "use server"
                            await signOut()
                        }}
                    >
                        <button type="submit" className="w-full text-left font-semibold">
                            Sign out
                        </button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
