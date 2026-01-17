"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Home,
    BookOpen,
    Headphones,
    Mic2,
    PenTool,
    BarChart3,
    Settings,
    LogOut,
    ChevronDown,
    PanelLeftClose,
    PanelLeftOpen,
} from "lucide-react";
import { signOut } from "next-auth/react";

interface AppSidebarProps {
    session: any;
    isCollapsed: boolean;
    onToggle: () => void;
}

export function AppSidebar({ session, isCollapsed, onToggle }: AppSidebarProps) {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: Home, group: "Main Menu" },
        { name: "Listening", href: "/practice/listening", icon: Headphones, group: "Practice Skills" },
        { name: "Reading", href: "/practice/reading", icon: BookOpen, group: "Practice Skills" },
        { name: "Writing", href: "/practice/writing", icon: PenTool, group: "Practice Skills" },
        { name: "Speaking", href: "/practice/speaking", icon: Mic2, group: "Practice Skills" },
        { name: "Performance", href: "/analytics", icon: BarChart3, group: "Analytics" },
    ];

    return (
        <aside
            className={cn(
                "fixed left-0 top-0 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-white/5 flex flex-col z-[51] transition-all duration-300 ease-in-out",
                isCollapsed ? "w-20" : "w-64"
            )}
        >
            {/* Logo Section */}
            <div className="p-4 h-16 border-b border-slate-200 dark:border-white/5 flex items-center justify-between overflow-hidden">
                {!isCollapsed && (
                    <NextLink href="/dashboard" className="flex items-center space-x-3 group min-w-max">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-[10px] group-hover:scale-105 transition-transform shadow-lg shadow-indigo-500/30">
                            V3
                        </div>
                        <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white">
                            IELTS <span className="text-indigo-600">V3</span>
                        </span>
                    </NextLink>
                )}
                {isCollapsed && (
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-[10px] mx-auto">
                        V3
                    </div>
                )}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggle}
                    className={cn(
                        "h-8 w-8 text-slate-500 hover:text-indigo-600 transition-all",
                        isCollapsed ? "absolute -right-4 top-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-md rounded-full translate-x-full" : ""
                    )}
                >
                    {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
                </Button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-3 space-y-1 overflow-y-auto overflow-x-hidden pt-6">
                {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    const showHeader = index === 0 || navItems[index - 1].group !== item.group;

                    return (
                        <div key={item.href}>
                            {!isCollapsed && showHeader && (
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mt-4 mb-2">
                                    {item.group}
                                </p>
                            )}
                            <NextLink
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-xl font-bold transition-all group relative",
                                    isActive
                                        ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-indigo-600 dark:hover:text-indigo-400"
                                )}
                            >
                                <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive ? "text-indigo-600 dark:text-indigo-400" : "group-hover:text-indigo-600")} />
                                {!isCollapsed && <span className="truncate">{item.name}</span>}
                                {isCollapsed && (
                                    <div className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[100] font-black uppercase tracking-widest shadow-xl">
                                        {item.name}
                                    </div>
                                )}
                            </NextLink>
                        </div>
                    );
                })}
            </nav>

            {/* User Section */}
            <div className="p-3 border-t border-slate-200 dark:border-white/5">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className={cn(
                            "w-full flex items-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors p-2",
                            isCollapsed ? "justify-center" : "gap-3"
                        )}>
                            <Avatar className="h-8 w-8 rounded-lg shrink-0">
                                <AvatarImage src={session?.user?.image ?? ""} alt={session?.user?.name ?? ""} />
                                <AvatarFallback className="bg-indigo-600 text-white font-bold text-xs rounded-lg">
                                    {session?.user?.name?.[0] ?? "U"}
                                </AvatarFallback>
                            </Avatar>
                            {!isCollapsed && (
                                <div className="flex-1 text-left overflow-hidden">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{session?.user?.name}</p>
                                    <p className="text-[10px] text-slate-500 truncate">{session?.user?.email}</p>
                                </div>
                            )}
                            {!isCollapsed && <ChevronDown className="w-4 h-4 text-slate-400" />}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mb-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 rounded-xl shadow-xl" side={isCollapsed ? "right" : "bottom"} align={isCollapsed ? "end" : "start"} sideOffset={isCollapsed ? 20 : 10}>
                        <DropdownMenuItem className="rounded-lg py-3 font-bold" asChild>
                            <NextLink href="/settings" className="flex items-center gap-2 cursor-pointer transition-colors">
                                <Settings className="w-4 h-4" /> Settings
                            </NextLink>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-slate-200 dark:bg-white/10" />
                        <DropdownMenuItem
                            className="rounded-lg text-red-600 dark:text-red-400 font-bold py-3 cursor-pointer transition-colors focus:bg-red-50 dark:focus:bg-red-500/10"
                            onClick={() => signOut({ callbackUrl: "/" })}
                        >
                            <LogOut className="w-4 h-4 mr-2" /> Sign out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </aside>
    );
}
