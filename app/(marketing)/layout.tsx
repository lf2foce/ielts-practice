import { UserNav } from "@/components/layout/user-nav";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[40] w-[95%] max-w-7xl">
                <div className="px-6 py-4 rounded-[2rem] border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-3xl shadow-xl shadow-slate-900/5 dark:shadow-2xl flex items-center justify-between transition-all duration-300">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-white text-[11px] group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/30">
                                V3
                            </div>
                            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
                                IELTS <span className="text-indigo-600 dark:text-indigo-500">V3</span>
                            </span>
                            <Badge className="hidden sm:inline-flex text-[10px] font-black px-3 py-0.5 bg-indigo-600 dark:bg-indigo-500/10 text-white dark:text-indigo-400 border-none rounded-full shadow-lg shadow-indigo-500/20">
                                NEURAL PROTOCOL
                            </Badge>
                        </Link>
                        <nav className="hidden lg:flex items-center space-x-10 text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                            <Link href="/solutions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Solutions</Link>
                            <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</Link>
                            <Link href="/pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</Link>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        <ModeToggle />
                        <UserNav />
                    </div>
                </div>
            </header>
            <main className="flex-1">
                {children}
            </main>
        </>
    );
}
