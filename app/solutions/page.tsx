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
    ArrowRight,
    Building2,
    GraduationCap,
    Users,
    Globe,
    CheckCircle2,
    Sparkles,
    BookOpen,
    Headphones,
    Mic2,
    PenTool
} from "lucide-react"

export default function SolutionsPage() {
    return (
        <div className="flex flex-col min-h-screen pt-28 pb-20 bg-[#fcfdff] dark:bg-[#020617]">
            {/* Header */}
            <section className="container mx-auto px-4 lg:px-12 mb-16">
                <div className="flex items-center gap-4 mb-8">
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl border border-slate-200 dark:border-white/10" asChild>
                        <Link href="/"><ArrowLeft className="w-5 h-5" /></Link>
                    </Button>
                    <Badge className="bg-indigo-600 dark:bg-indigo-500/10 text-white dark:text-indigo-400 border-none rounded-full px-5 py-1 text-xs font-black tracking-widest uppercase">
                        Solutions
                    </Badge>
                </div>

                <div className="max-w-4xl">
                    <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-[#020617] dark:text-white mb-6">
                        Solutions for <span className="text-indigo-600 dark:text-indigo-400">Everyone</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        Tailored IELTS preparation infrastructure for students, institutions, and enterprises.
                    </p>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="container mx-auto px-4 lg:px-12 mb-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    {solutions.map((solution, i) => (
                        <Card key={i} className="group bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl">
                            <CardHeader className="p-8">
                                <div className={`w-16 h-16 rounded-2xl ${solution.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <solution.icon className={`w-8 h-8 ${solution.iconColor}`} />
                                </div>
                                <CardTitle className="text-2xl font-black text-[#020617] dark:text-white mb-2">{solution.title}</CardTitle>
                                <CardDescription className="text-slate-500 font-bold">
                                    {solution.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-8 pt-0">
                                <ul className="space-y-3 mb-6">
                                    {solution.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold">
                                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Skill Coverage */}
            <section className="container mx-auto px-4 lg:px-12 mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-[#020617] dark:text-white mb-4">Complete IELTS Coverage</h2>
                    <p className="text-slate-500 font-bold">All four skills, one integrated platform</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {skills.map((skill, i) => (
                        <Card key={i} className="bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 rounded-2xl text-center">
                            <CardContent className="p-8">
                                <div className={`w-14 h-14 mx-auto rounded-2xl ${skill.bgColor} flex items-center justify-center mb-4`}>
                                    <skill.icon className={`w-7 h-7 ${skill.iconColor}`} />
                                </div>
                                <h3 className="font-black text-[#020617] dark:text-white mb-2">{skill.name}</h3>
                                <p className="text-sm text-slate-500 font-medium">{skill.tests}+ practice tests</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 lg:px-12">
                <Card className="bg-indigo-600 dark:bg-indigo-600/20 border-none rounded-[2rem] overflow-hidden">
                    <CardContent className="p-12 lg:p-16 text-center">
                        <Sparkles className="w-12 h-12 text-white dark:text-indigo-400 mx-auto mb-6" />
                        <h2 className="text-3xl lg:text-4xl font-black text-white dark:text-white mb-4">Ready to Get Started?</h2>
                        <p className="text-indigo-100 dark:text-indigo-200 font-medium mb-8 max-w-xl mx-auto">
                            Join thousands of students who have improved their IELTS scores with our platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="rounded-xl bg-white text-indigo-600 hover:bg-slate-100 font-bold" asChild>
                                <Link href="/login">Start Free Trial</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-xl border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                                <Link href="/pricing">View Pricing</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}

const solutions = [
    {
        title: "For Students",
        description: "Self-paced IELTS preparation with AI-powered feedback",
        icon: GraduationCap,
        bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
        iconColor: "text-indigo-600 dark:text-indigo-400",
        features: [
            "Unlimited practice tests",
            "AI-powered essay scoring",
            "Speaking practice with feedback",
            "Personalized study plans",
            "Progress tracking dashboard",
        ],
    },
    {
        title: "For Institutions",
        description: "Scalable platform for schools and training centers",
        icon: Building2,
        bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        features: [
            "Bulk student management",
            "Custom branding options",
            "Advanced analytics",
            "Teacher dashboard",
            "API integration support",
        ],
    },
    {
        title: "For Enterprises",
        description: "Corporate English assessment and training",
        icon: Globe,
        bgColor: "bg-purple-50 dark:bg-purple-500/10",
        iconColor: "text-purple-600 dark:text-purple-400",
        features: [
            "Employee assessment tools",
            "Custom training modules",
            "HR system integration",
            "Compliance reporting",
            "Dedicated support team",
        ],
    },
]

const skills = [
    { name: "Listening", icon: Headphones, bgColor: "bg-blue-50 dark:bg-blue-500/10", iconColor: "text-blue-600 dark:text-blue-400", tests: 200 },
    { name: "Reading", icon: BookOpen, bgColor: "bg-emerald-50 dark:bg-emerald-500/10", iconColor: "text-emerald-600 dark:text-emerald-400", tests: 250 },
    { name: "Writing", icon: PenTool, bgColor: "bg-purple-50 dark:bg-purple-500/10", iconColor: "text-purple-600 dark:text-purple-400", tests: 150 },
    { name: "Speaking", icon: Mic2, bgColor: "bg-amber-50 dark:bg-amber-500/10", iconColor: "text-amber-600 dark:text-amber-400", tests: 100 },
]
