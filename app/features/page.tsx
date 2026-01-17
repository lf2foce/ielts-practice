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
    ArrowLeft,
    CheckCircle2,
    Brain,
    BarChart3,
    Zap,
    Shield,
    Clock,
    Users,
    Sparkles,
    Target,
    Layers,
    Globe
} from "lucide-react"

export default function FeaturesPage() {
    return (
        <div className="flex flex-col min-h-screen pt-28 pb-20 bg-[#fcfdff] dark:bg-[#020617]">
            {/* Header */}
            <section className="container mx-auto px-4 lg:px-12 mb-16">
                <div className="flex items-center gap-4 mb-8">
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl border border-slate-200 dark:border-white/10" asChild>
                        <Link href="/"><ArrowLeft className="w-5 h-5" /></Link>
                    </Button>
                    <Badge className="bg-emerald-600 dark:bg-emerald-500/10 text-white dark:text-emerald-400 border-none rounded-full px-5 py-1 text-xs font-black tracking-widest uppercase">
                        Features
                    </Badge>
                </div>

                <div className="max-w-4xl">
                    <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-[#020617] dark:text-white mb-6">
                        Powerful <span className="text-emerald-600 dark:text-emerald-400">Features</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        Advanced technology designed to maximize your IELTS preparation efficiency.
                    </p>
                </div>
            </section>

            {/* Main Features */}
            <section className="container mx-auto px-4 lg:px-12 mb-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    {mainFeatures.map((feature, i) => (
                        <Card key={i} className="group bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl">
                            <CardHeader className="p-8">
                                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                                </div>
                                <CardTitle className="text-2xl font-black text-[#020617] dark:text-white mb-2">{feature.title}</CardTitle>
                                <CardDescription className="text-slate-500 font-bold">
                                    {feature.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Detailed Features */}
            <section className="container mx-auto px-4 lg:px-12 mb-16">
                <h2 className="text-3xl font-black text-[#020617] dark:text-white mb-8 text-center">Everything You Need</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {detailedFeatures.map((feature, i) => (
                        <Card key={i} className="bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 rounded-2xl">
                            <CardContent className="p-6">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-4" />
                                <h3 className="font-black text-[#020617] dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-500 font-medium">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 lg:px-12">
                <Card className="bg-emerald-600 dark:bg-emerald-600/20 border-none rounded-[2rem] overflow-hidden">
                    <CardContent className="p-12 lg:p-16 text-center">
                        <Sparkles className="w-12 h-12 text-white dark:text-emerald-400 mx-auto mb-6" />
                        <h2 className="text-3xl lg:text-4xl font-black text-white dark:text-white mb-4">Experience All Features</h2>
                        <p className="text-emerald-100 dark:text-emerald-200 font-medium mb-8 max-w-xl mx-auto">
                            Start your free trial today and unlock the full potential of IELTS V3.
                        </p>
                        <Button size="lg" className="rounded-xl bg-white text-emerald-600 hover:bg-slate-100 font-bold" asChild>
                            <Link href="/login">Get Started Free</Link>
                        </Button>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}

const mainFeatures = [
    {
        title: "AI-Powered Scoring",
        description: "Get instant, accurate feedback on your writing and speaking with our advanced neural network technology.",
        icon: Brain,
        bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
        iconColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
        title: "Performance Analytics",
        description: "Track your progress with detailed analytics and identify areas that need improvement.",
        icon: BarChart3,
        bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
        iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
        title: "Instant Feedback",
        description: "Receive real-time feedback on your practice tests without waiting for human reviewers.",
        icon: Zap,
        bgColor: "bg-amber-50 dark:bg-amber-500/10",
        iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
        title: "Secure Platform",
        description: "Your data is protected with enterprise-grade security and encryption.",
        icon: Shield,
        bgColor: "bg-blue-50 dark:bg-blue-500/10",
        iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
        title: "Flexible Schedule",
        description: "Practice anytime, anywhere with our mobile-friendly platform.",
        icon: Clock,
        bgColor: "bg-purple-50 dark:bg-purple-500/10",
        iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
        title: "Community Support",
        description: "Join thousands of students preparing for IELTS together.",
        icon: Users,
        bgColor: "bg-pink-50 dark:bg-pink-500/10",
        iconColor: "text-pink-600 dark:text-pink-400",
    },
]

const detailedFeatures = [
    { title: "Adaptive Learning", description: "Tests adjust to your skill level automatically" },
    { title: "Vocabulary Builder", description: "Build your academic vocabulary systematically" },
    { title: "Grammar Checker", description: "Instant grammar correction and suggestions" },
    { title: "Pronunciation Guide", description: "Perfect your English pronunciation" },
    { title: "Mock Test Simulation", description: "Real exam conditions and timing" },
    { title: "Study Plans", description: "Personalized study schedules" },
    { title: "Offline Mode", description: "Download tests for offline practice" },
    { title: "Multi-device Sync", description: "Seamless experience across devices" },
]
