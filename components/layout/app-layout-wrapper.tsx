"use client";

import { useState, useEffect } from "react";
import { AppSidebar } from "./app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

interface AppLayoutWrapperProps {
    session: any;
    children: React.ReactNode;
}

export function AppLayoutWrapper({ session, children }: AppLayoutWrapperProps) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("sidebar-collapsed");
        if (stored === "true") setIsSidebarCollapsed(true);
    }, []);

    const handleToggle = () => {
        const newState = !isSidebarCollapsed;
        setIsSidebarCollapsed(newState);
        localStorage.setItem("sidebar-collapsed", newState.toString());
    };

    if (!mounted) return null;

    return (
        <div className="flex min-h-screen">
            <AppSidebar
                session={session}
                isCollapsed={isSidebarCollapsed}
                onToggle={handleToggle}
            />

            {/* Floating Theme Toggle */}
            <div className="fixed top-6 right-6 z-[60]">
                <ModeToggle />
            </div>

            {/* Main Content */}
            <div
                className={cn(
                    "flex-1 transition-all duration-300 ease-in-out",
                    isSidebarCollapsed ? "ml-20" : "ml-20 lg:ml-64"
                )}
            >
                <main className="min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    );
}
