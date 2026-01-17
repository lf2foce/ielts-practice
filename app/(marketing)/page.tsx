import { auth } from "@/auth"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    ArrowRight,
    CheckCircle2,
    Star,
    Mic2,
    PenTool,
    Headphones,
    BookOpen,
    Sparkles,
    Users,
    ShieldCheck,
    TrendingUp,
    Layout,
    Globe,
    Zap,
    Layers,
    MoveRight
} from "lucide-react"

export default async function Home() {
    const session = await auth()

    return (
        <div className="flex flex-col min-h-screen transition-colors duration-700 bg-[#fcfdff] dark:bg-[#020617]">
            {/* Hero Section - Spatial Pearlescent */}
            <section className="relative min-h-[90vh] flex items-center pt-28 overflow-hidden">
                {/* Background Ambient Glows */}
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-600/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 blur-[100px] rounded-full" />

                <div className="container mx-auto px-4 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit backdrop-blur-md">
                                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                <span className="text-sm font-bold text-indigo-700 dark:text-indigo-300 tracking-wide uppercase">Practice Infrastructure v3.0</span>
                            </div>

                            <h1 className="text-5xl lg:text-8xl font-black tracking-tight text-[#020617] dark:text-white leading-[0.9]">
                                Cognitive <br />
                                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600 dark:from-indigo-400 dark:via-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">Infrastructure</span>
                            </h1>

                            <p className="max-w-[560px] text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                The foundation for student success. A professional-grade IELTS training ecosystem designed to visualize performance and accelerate cognitive mastery.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                <Button size="lg" className="h-16 px-10 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-2xl shadow-indigo-500/20 group transition-all duration-300" asChild>
                                    <Link href="/login">
                                        Deploy Practice <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="ghost" className="h-16 px-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold backdrop-blur-xl shadow-sm" asChild>
                                    <Link href="/demo">Technical Overview</Link>
                                </Button>
                            </div>

                            <div className="flex items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800/50 w-fit">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="h-11 w-11 rounded-full border-2 border-white dark:border-[#020617] bg-slate-100 dark:bg-slate-800 overflow-hidden ring-1 ring-indigo-100 dark:ring-slate-700/50">
                                            <Image src={`https://i.pravatar.cc/100?u=${i + 22}`} alt="" width={44} height={44} unoptimized />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
                                    </div>
                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase">Enterprise Standard</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-in fade-in zoom-in-90 duration-1000 delay-200">
                            {/* Glass Frame */}
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(79,70,229,0.1)] dark:shadow-[0_0_80px_rgba(79,70,229,0.15)] bg-white/70 dark:bg-slate-900/50 backdrop-blur-3xl p-4">
                                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                                    <Image
                                        src="/ielts_hero_spatial.png"
                                        alt="Spatial AI visualization"
                                        fill
                                        className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                                        priority
                                        unoptimized
                                    />
                                </div>
                            </div>

                            {/* Floating Metadata Cards */}
                            <div className="absolute -top-10 -right-10 p-6 rounded-3xl bg-white/90 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 backdrop-blur-2xl shadow-2xl animate-bounce-slow">
                                <Zap className="w-8 h-8 text-emerald-500 dark:text-emerald-400 mb-2" />
                                <p className="text-2xl font-black text-[#020617] dark:text-white tracking-tight leading-none">High Fidelity</p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold tracking-widest uppercase mt-2">Neural Analysis</p>
                            </div>

                            <div className="absolute -bottom-6 -left-12 p-6 rounded-3xl bg-indigo-50/50 dark:bg-indigo-600/10 border border-indigo-200 dark:border-indigo-500/20 backdrop-blur-3xl shadow-2xl shadow-indigo-500/10">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-white dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-black text-[#020617] dark:text-white tracking-tighter">98.4%</p>
                                        <p className="text-[10px] text-indigo-600 dark:text-indigo-300 font-black tracking-[0.2em] uppercase">Practice Accuracy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Skills - Layered Pearlescent */}
            <section className="py-32 relative bg-slate-50/30 dark:bg-[#020617] border-y border-slate-100 dark:border-white/5">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className="max-w-3xl mb-24">
                        <Badge className="bg-indigo-600 dark:bg-indigo-500/10 text-white dark:text-indigo-400 border-none rounded-full px-5 py-1 text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-indigo-500/20">Learning Modules</Badge>
                        <h2 className="text-4xl lg:text-7xl font-black tracking-tight text-[#020617] dark:text-white mb-6">Execution Pillars</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            Four foundational instruments of training, built for surgical precision and cognitive alignment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, i) => (
                            <div key={i} className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Card className="relative h-full bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden group-hover:bg-white dark:group-hover:bg-slate-800/60 transition-all duration-500 group-hover:-translate-y-2 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-none group-hover:shadow-[0_24px_48px_-12px_rgba(79,70,229,0.1)]">
                                    <CardHeader className="p-8 pb-4">
                                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500/20 group-hover:text-white dark:group-hover:text-indigo-300">
                                            <skill.icon className="w-7 h-7" />
                                        </div>
                                        <CardTitle className="text-2xl font-black text-[#020617] dark:text-white mb-2">{skill.name}</CardTitle>
                                        <CardDescription className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed">
                                            {skill.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-8 pt-0">
                                        <Link href={skill.href} className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-black group/link hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                                            Initialize Core <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Institutional Section - Spatial Integrity */}
            <section className="py-32 bg-white dark:bg-[#020617] relative">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-12 xl:col-span-5 space-y-12">
                            <div className="space-y-6 text-center xl:text-left">
                                <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 border-none rounded-full px-5 py-1 text-xs font-bold tracking-widest uppercase shadow-sm">Integrity Hub</Badge>
                                <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-[#020617] dark:text-white leading-tight">
                                    IELTS <br /> Practice <br /> <span className="text-slate-300 dark:text-slate-500">Integrity</span>
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto xl:mx-0">
                                    Institutional-grade infrastructure designed for high-stakes practice environments and rigorous student evaluation.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-8 max-w-4xl mx-auto xl:mx-0">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex gap-6 group p-4 rounded-2xl transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/40">
                                        <div className="mt-1 h-10 w-10 border border-slate-200 dark:border-white/10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-all shadow-sm">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black text-xl text-[#020617] dark:text-white tracking-wide">{benefit.title}</h4>
                                            <p className="text-slate-500 dark:text-slate-500 text-sm font-bold leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-12 xl:col-span-7">
                            <div className="relative group">
                                <div className="absolute -inset-10 bg-indigo-500/5 blur-[100px] rounded-full group-hover:bg-indigo-500/10 transition-colors" />
                                <div className="relative bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-[3rem] p-10 lg:p-16 backdrop-blur-3xl shadow-[0_32px_80px_-20px_rgba(0,0,0,0.1)] dark:shadow-3xl transition-all duration-500 group-hover:border-indigo-500/20">
                                    <div className="flex items-center justify-between mb-12">
                                        <div className="flex items-center gap-5">
                                            <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 dark:border-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
                                                <Layers className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black text-[#020617] dark:text-white leading-none">Telemetry Node</h3>
                                                <p className="text-[10px] text-slate-500 font-black tracking-[0.2em] uppercase mt-2">ACTIVE INFRASTRUCTURE</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 tracking-tighter uppercase whitespace-nowrap">Operational Status</span>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="p-8 rounded-2xl bg-indigo-50/30 dark:bg-white/5 border border-indigo-100 dark:border-white/5 shadow-sm">
                                            <div className="flex justify-between text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">
                                                <span>Adaptive Student Load</span>
                                                <span className="text-indigo-600 dark:text-indigo-400 font-black">0.04ms Latency</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-indigo-600 to-emerald-500 w-[84%] shadow-[0_0_12px_rgba(79,70,229,0.3)]" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="p-8 rounded-2xl bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center group/stat hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md">
                                                <p className="text-5xl font-black text-[#020617] dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">1.2M</p>
                                                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Practice Scans</p>
                                            </div>
                                            <div className="p-8 rounded-2xl bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center group/stat hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md">
                                                <p className="text-5xl font-black text-[#020617] dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">99.99</p>
                                                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Integrity Score</p>
                                            </div>
                                        </div>

                                        <Button className="w-full h-18 bg-indigo-600 dark:bg-white text-white dark:text-slate-900 hover:bg-indigo-700 dark:hover:bg-slate-200 font-black text-lg rounded-2xl transition-all duration-300 shadow-2xl shadow-indigo-600/20">
                                            Enter Practice Portal
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA - Minimalist & Power */}
            <section className="py-40 relative overflow-hidden bg-slate-50/30 dark:bg-[#020617]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 dark:bg-indigo-600/5 blur-[150px] rounded-full" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-5xl lg:text-9xl font-black tracking-tighter text-[#020617] dark:text-white mb-10 leading-tight">
                        Deploy Your <br /> Evolution.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-xl mx-auto">
                        <Button size="lg" className="h-20 px-14 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-2xl shadow-[0_32px_64px_-12px_rgba(79,70,229,0.4)] transition-all duration-300 hover:scale-105" asChild>
                            <Link href="/login">Initialize Node</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer - Minimal Ghost style */}
            <footer className="py-20 border-t border-slate-200 dark:border-white/5 bg-[#fcfdff] dark:bg-[#020617] relative z-10">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="text-2xl font-black tracking-tighter text-[#020617] dark:text-white">
                            IELTS <span className="text-indigo-600 dark:text-indigo-500">V3</span>
                        </div>
                        <div className="flex gap-12 text-sm font-black text-slate-500 uppercase tracking-[0.2em]">
                            <Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Security</Link>
                            <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Protocol</Link>
                            <Link href="/about" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Vision</Link>
                        </div>
                        <p className="text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
                            NEURAL PRACTICE SYSTEMS &copy; 2026
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

const skills = [
    {
        name: "Linguistic Node",
        description: "Adaptive neural telemetry for surgical precision in spoken delivery.",
        icon: Mic2,
        href: "/practice/speaking"
    },
    {
        name: "Syntactic Node",
        description: "Deep-learning analysis for high-fidelity structural coherence.",
        icon: PenTool,
        href: "/practice/writing"
    },
    {
        name: "Analytical Node",
        description: "High-speed cognitive reading modules with predictive difficulty.",
        icon: BookOpen,
        href: "/practice/reading"
    },
    {
        name: "Acoustic Node",
        description: "Complex auditory environments designed for extreme attention.",
        icon: Headphones,
        href: "/practice/listening"
    },
]

const benefits = [
    {
        title: "Cognitive Performance Tracking",
        description: "Visualizing learning trajectories across multi-dimensional cognitive vectors."
    },
    {
        title: "High-Fidelity Evaluation",
        description: "End-to-end encrypted evaluation protocols for extreme accuracy."
    },
    {
        title: "Neural Integration Architecture",
        description: "Seamless API-first connectivity for student learning ecosystems."
    }
]