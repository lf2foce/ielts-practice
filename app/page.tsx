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
        <div className="flex flex-col min-h-screen transition-colors duration-500">
            {/* Hero Section - Spatial Depth */}
            <section className="relative min-h-[90vh] flex items-center pt-28 overflow-hidden bg-white dark:bg-[#020617]">
                {/* Background Ambient Glows */}
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full" />

                <div className="container mx-auto px-4 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit backdrop-blur-md">
                                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300 tracking-wide">Spatial AI Learning Engine v3.0</span>
                            </div>

                            <h1 className="text-5xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-[0.9]">
                                Beyond <br />
                                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600 dark:from-indigo-400 dark:via-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">Intelligence</span>
                            </h1>

                            <p className="max-w-[560px] text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                                Elevate your IELTS performance with a neural practice ecosystem that understands your cognition, refines your speech, and accelerates your evolution.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                <Button size="lg" className="h-16 px-10 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-2xl shadow-indigo-500/20 group transition-all duration-300" asChild>
                                    <Link href="/login">
                                        Initialize Practice <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="ghost" className="h-16 px-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold backdrop-blur-xl" asChild>
                                    <Link href="/demo">Explorer Ecosystem</Link>
                                </Button>
                            </div>

                            <div className="flex items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800/50 w-fit">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="h-11 w-11 rounded-full border-2 border-white dark:border-[#020617] bg-slate-100 dark:bg-slate-800 overflow-hidden ring-1 ring-slate-200/50 dark:ring-slate-700/50">
                                            <Image src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="" width={44} height={44} unoptimized />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
                                    </div>
                                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider">PREMIUM EDUCATION STANDARD</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-in fade-in zoom-in-90 duration-1000 delay-200">
                            {/* Glass Frame */}
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-2xl dark:shadow-[0_0_80px_rgba(79,70,229,0.15)] bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl p-4">
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
                            <div className="absolute -top-10 -right-10 p-6 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 backdrop-blur-2xl shadow-2xl animate-bounce-slow">
                                <Zap className="w-8 h-8 text-emerald-500 dark:text-emerald-400 mb-2" />
                                <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Zero Latency</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wide">NEURAL RESPONSES</p>
                            </div>

                            <div className="absolute -bottom-6 -left-12 p-6 rounded-3xl bg-indigo-500/10 dark:bg-indigo-600/10 border border-indigo-200 dark:border-indigo-500/20 backdrop-blur-3xl shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter">98.4%</p>
                                        <p className="text-[10px] text-indigo-600 dark:text-indigo-300 font-bold tracking-[0.2em] uppercase">Success Quotient</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Skills - Layered Glass */}
            <section className="py-32 relative bg-slate-50 dark:bg-[#020617]">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className="max-w-3xl mb-24">
                        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Neural Skill Matrix</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                            Four foundational pillars, enhanced by proprietary AI algorithms to deliver surgical precision in training.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, i) => (
                            <div key={i} className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Card className="relative h-full bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden group-hover:bg-white dark:group-hover:bg-slate-800/60 transition-all duration-500 group-hover:-translate-y-2 shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-500/5">
                                    <CardHeader className="p-8 pb-4">
                                        <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500/20 group-hover:text-white dark:group-hover:text-indigo-300">
                                            <skill.icon className="w-7 h-7" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{skill.name}</CardTitle>
                                        <CardDescription className="text-slate-600 dark:text-slate-400 text-base font-light leading-relaxed">
                                            {skill.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-8 pt-0">
                                        <Link href={skill.href} className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-bold group/link hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                                            Access Module <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Institutional Section - High-End Cinematic style */}
            <section className="py-32 bg-white dark:bg-[#020617] relative">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-6">
                                <Badge className="bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 rounded-full px-5 py-1.5 text-xs font-bold tracking-widest uppercase">Institutional Hub</Badge>
                                <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                                    Architecting <br /> Institutional <br /> <span className="text-slate-300 dark:text-slate-500">Excellence</span>
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                    A multi-tenant architecture designed to scale high-stakes examinations and training programs with enterprise rigidity.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="mt-1 h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-xl text-slate-900 dark:text-white tracking-wide">{benefit.title}</h4>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="relative group">
                                <div className="absolute -inset-10 bg-indigo-500/5 blur-[100px] rounded-full group-hover:bg-indigo-500/10 transition-colors" />
                                <div className="relative bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-[3rem] p-10 lg:p-16 backdrop-blur-3xl shadow-xl dark:shadow-3xl">
                                    <div className="flex items-center justify-between mb-12">
                                        <div className="flex items-center gap-5">
                                            <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 dark:border-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
                                                <Layers className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">System Core</h3>
                                                <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">REAL-TIME TELEMETRY</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 tracking-tighter">OPERATIONAL</span>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                            <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
                                                <span>Adaptive Engine Load</span>
                                                <span className="text-indigo-600 dark:text-indigo-400">0.04ms Latency</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-indigo-600 to-emerald-500 w-[84%]" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center group/stat">
                                                <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">1.2M</p>
                                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Neural Scans</p>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center group/stat">
                                                <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">99.99</p>
                                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Integrity Score</p>
                                            </div>
                                        </div>

                                        <Button className="w-full h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-500/10">
                                            Enterprise Portal Access
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA - Minimalist & Power */}
            <section className="py-40 relative overflow-hidden bg-slate-50 dark:bg-[#020617]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 dark:bg-indigo-600/5 blur-[150px] rounded-full" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-5xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-10 leading-tight">
                        Begin Your <br /> Evolution.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-xl mx-auto">
                        <Button size="lg" className="h-18 px-12 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xl shadow-2xl shadow-indigo-600/20" asChild>
                            <Link href="/login">Initialize Now</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer - Minimal Ghost style */}
            <footer className="py-20 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#020617] relative z-10">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
                            IELTS <span className="text-indigo-600 dark:text-indigo-500">V3</span>
                        </div>
                        <div className="flex gap-12 text-sm font-semibold text-slate-500 uppercase tracking-[0.15em]">
                            <Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Security</Link>
                            <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Protocol</Link>
                            <Link href="/about" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Vision</Link>
                        </div>
                        <p className="text-slate-400 dark:text-slate-600 text-sm font-bold uppercase tracking-widest">
                            NEURAL LEARNING SYSTEMS &copy; 2026
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

const skills = [
    {
        name: "Linguistic AI",
        description: "Adaptive neural feedback for fluency, tone, and spoken precision.",
        icon: Mic2,
        href: "/practice/speaking"
    },
    {
        name: "Syntactic Engine",
        description: "Deep-learning essay analysis for structural and cohesive mastery.",
        icon: PenTool,
        href: "/practice/writing"
    },
    {
        name: "Contextual Lens",
        description: "High-speed analytical reading modules with predictive difficulty.",
        icon: BookOpen,
        href: "/practice/reading"
    },
    {
        name: "Acoustic Matrix",
        description: "Complex auditory environments designed for extreme focus.",
        icon: Headphones,
        href: "/practice/listening"
    },
]

const benefits = [
    {
        title: "Spatial Data Analysis",
        description: "Visualizing learning trajectories across multi-dimensional performance vectors."
    },
    {
        title: "Quantum Integrity",
        description: "End-to-end encrypted assessment protocols for institutional security."
    },
    {
        title: "Neural Integration",
        description: "Seamless API-first connectivity for global educational ecosystems."
    }
]