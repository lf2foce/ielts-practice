"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="h-10 w-10 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm flex items-center justify-center">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-white/10 backdrop-blur-3xl text-slate-900 dark:text-slate-200 rounded-2xl shadow-2xl p-2 min-w-[10rem] mt-2">
                <DropdownMenuItem className="rounded-xl focus:bg-indigo-50 dark:focus:bg-indigo-500/10 focus:text-indigo-600 dark:focus:text-indigo-400 py-3 font-bold" onClick={() => setTheme("light")}>
                    Light Mode
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl focus:bg-indigo-50 dark:focus:bg-indigo-500/10 focus:text-indigo-600 dark:focus:text-indigo-400 py-3 font-bold" onClick={() => setTheme("dark")}>
                    Dark Mode
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl focus:bg-indigo-50 dark:focus:bg-indigo-500/10 focus:text-indigo-600 dark:focus:text-indigo-400 py-3 font-bold" onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
