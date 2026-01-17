import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
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
    Mic2,
    PenTool,
    Headphones,
    BookOpen,
    TrendingUp,
    Target,
    Clock,
    CheckCircle2,
    ArrowRight,
    BarChart3,
    Flame,
    Calendar,
    Zap,
    Award
} from "lucide-react"

export default async function DashboardPage() {
    const session = await auth()

    if (!session?.user) {
        redirect("/login")
    }

    return (
        <div className="flex flex-col min-h-screen pt-28 pb-20 bg-[#fcfdff] dark:bg-[#020617]">
            {/* Welcome Header */}
            <section className="container mx-auto px-4 lg:px-12 mb-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                        <p className="text-sm font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">Welcome back</p>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-[#020617] dark:text-white">
                            {session.user.name?.split(' ')[0] || 'Student'} 👋
                        </h1>
                        <p className="text-slate-500 font-bold mt-2">Ready to continue your IELTS journey?</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                            <Flame className="w-5 h-5 text-amber-500" />
                            <span className="font-black text-amber-600 dark:text-amber-400">7 Day Streak!</span>
                        </div>
                        <Badge className="bg-indigo-600 text-white border-none rounded-full px-4 py-2 text-sm font-black">
                            <Target className="w-4 h-4 mr-2" /> Band 7.5 Target
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="container mx-auto px-4 lg:px-12 mb-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {quickStats.map((stat, i) => (
                        <Card key={i} className="bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-2xl">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className={`h-12 w-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-[#020617] dark:text-white">{stat.value}</p>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Skills Practice Panel */}
            <section className="container mx-auto px-4 lg:px-12 mb-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-black text-[#020617] dark:text-white">Practice Skills</h2>
                    <Button variant="ghost" className="font-bold text-indigo-600 dark:text-indigo-400">
                        View All <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCards.map((skill, i) => (
                        <Link key={i} href={skill.href}>
                            <Card className="group h-full bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 cursor-pointer">
                                <CardHeader className="p-8">
                                    <div className={`w-16 h-16 rounded-2xl ${skill.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                        <skill.icon className={`w-8 h-8 ${skill.iconColor}`} />
                                    </div>
                                    <CardTitle className="text-2xl font-black text-[#020617] dark:text-white mb-2">{skill.name}</CardTitle>
                                    <CardDescription className="text-slate-500 font-bold">
                                        {skill.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-8 pt-0">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Progress</span>
                                        <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">{skill.progress}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div className={`h-full ${skill.progressColor} transition-all duration-500`} style={{ width: `${skill.progress}%` }} />
                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <Badge className={`${skill.bandBg} ${skill.bandText} border-none rounded-full px-3 py-1 text-[10px] font-black`}>
                                            Band {skill.currentBand}
                                        </Badge>
                                        <span className="text-sm font-bold text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            Practice →
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Performance Analysis & Recent Activity */}
            <section className="container mx-auto px-4 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Performance Chart */}
                    <div className="lg:col-span-7">
                        <Card className="bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-xl">
                            <CardHeader className="p-8 border-b border-slate-200 dark:border-white/5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-xl font-black text-[#020617] dark:text-white">Performance Analysis</CardTitle>
                                        <CardDescription className="font-bold">Your skill breakdown and improvement areas</CardDescription>
                                    </div>
                                    <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-none rounded-full px-4 py-1.5 text-xs font-black">
                                        <TrendingUp className="w-3 h-3 mr-1" /> +12% Improvement
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8">
                                <div className="space-y-6">
                                    {performanceData.map((item, i) => (
                                        <div key={i} className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                                                    <span className="font-bold text-[#020617] dark:text-white">{item.skill}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-sm font-black text-slate-400">Band {item.band}</span>
                                                    <Badge className={`${item.trendBg} ${item.trendText} border-none rounded-full px-2 py-0.5 text-[10px] font-black`}>
                                                        {item.trend}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                <div className={`h-full ${item.barColor} rounded-full transition-all duration-500`} style={{ width: `${item.percentage}%` }} />
                                            </div>
                                            <p className="text-xs text-slate-500 font-bold">{item.suggestion}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Today's Goal */}
                        <Card className="bg-indigo-600 dark:bg-indigo-600/20 border-none rounded-2xl overflow-hidden">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Zap className="w-6 h-6 text-white dark:text-indigo-400" />
                                    <h3 className="text-lg font-black text-white dark:text-white">Today's Goal</h3>
                                </div>
                                <p className="text-indigo-100 dark:text-indigo-200 font-medium mb-6">
                                    Complete 2 Reading passages and 1 Listening test to stay on track.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-white w-[40%]" />
                                    </div>
                                    <span className="text-white font-black">2/5</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Activity */}
                        <Card className="bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-2xl">
                            <CardHeader className="p-6">
                                <CardTitle className="text-lg font-black text-[#020617] dark:text-white flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                    Recent Activity
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 space-y-4">
                                {recentActivity.map((activity, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                        <div className={`h-10 w-10 rounded-xl ${activity.bgColor} flex items-center justify-center`}>
                                            <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-[#020617] dark:text-white text-sm">{activity.title}</p>
                                            <p className="text-xs text-slate-500">{activity.time}</p>
                                        </div>
                                        <Badge className={`${activity.scoreBg} ${activity.scoreText} border-none rounded-full px-3 py-1 text-[10px] font-black`}>
                                            {activity.score}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Achievement */}
                        <Card className="bg-amber-500/10 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20 rounded-2xl">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="h-14 w-14 rounded-xl bg-amber-500 flex items-center justify-center">
                                    <Award className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="font-black text-amber-700 dark:text-amber-400">New Achievement!</p>
                                    <p className="text-sm text-amber-600 dark:text-amber-300 font-bold">Completed 10 Reading Tests</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

const quickStats = [
    { icon: BarChart3, value: "6.5", label: "Current Band", bgColor: "bg-indigo-50 dark:bg-indigo-500/10", iconColor: "text-indigo-600 dark:text-indigo-400" },
    { icon: CheckCircle2, value: "47", label: "Tests Done", bgColor: "bg-emerald-50 dark:bg-emerald-500/10", iconColor: "text-emerald-600 dark:text-emerald-400" },
    { icon: Clock, value: "32h", label: "Study Time", bgColor: "bg-blue-50 dark:bg-blue-500/10", iconColor: "text-blue-600 dark:text-blue-400" },
    { icon: TrendingUp, value: "+0.5", label: "This Month", bgColor: "bg-amber-50 dark:bg-amber-500/10", iconColor: "text-amber-600 dark:text-amber-400" },
]

const skillCards = [
    {
        name: "Listening",
        description: "Audio comprehension practice",
        icon: Headphones,
        href: "/practice/listening",
        progress: 65,
        currentBand: 6.5,
        bgColor: "bg-blue-50 dark:bg-blue-500/10",
        iconColor: "text-blue-600 dark:text-blue-400",
        progressColor: "bg-blue-500",
        bandBg: "bg-blue-500/10",
        bandText: "text-blue-600 dark:text-blue-400",
    },
    {
        name: "Reading",
        description: "Analytical reading modules",
        icon: BookOpen,
        href: "/practice/reading",
        progress: 78,
        currentBand: 7.0,
        bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        progressColor: "bg-emerald-500",
        bandBg: "bg-emerald-500/10",
        bandText: "text-emerald-600 dark:text-emerald-400",
    },
    {
        name: "Writing",
        description: "Essay and task analysis",
        icon: PenTool,
        href: "/practice/writing",
        progress: 52,
        currentBand: 6.0,
        bgColor: "bg-purple-50 dark:bg-purple-500/10",
        iconColor: "text-purple-600 dark:text-purple-400",
        progressColor: "bg-purple-500",
        bandBg: "bg-purple-500/10",
        bandText: "text-purple-600 dark:text-purple-400",
    },
    {
        name: "Speaking",
        description: "Verbal fluency training",
        icon: Mic2,
        href: "/practice/speaking",
        progress: 45,
        currentBand: 6.0,
        bgColor: "bg-amber-50 dark:bg-amber-500/10",
        iconColor: "text-amber-600 dark:text-amber-400",
        progressColor: "bg-amber-500",
        bandBg: "bg-amber-500/10",
        bandText: "text-amber-600 dark:text-amber-400",
    },
]

const performanceData = [
    {
        skill: "Reading",
        band: 7.0,
        percentage: 87,
        trend: "+0.5",
        suggestion: "Strong performance! Focus on True/False/Not Given questions for Band 8.",
        icon: BookOpen,
        iconColor: "text-emerald-600 dark:text-emerald-400",
        barColor: "bg-emerald-500",
        trendBg: "bg-emerald-500/10",
        trendText: "text-emerald-600",
    },
    {
        skill: "Listening",
        band: 6.5,
        percentage: 75,
        trend: "+0.0",
        suggestion: "Practice with British and Australian accents to improve comprehension.",
        icon: Headphones,
        iconColor: "text-blue-600 dark:text-blue-400",
        barColor: "bg-blue-500",
        trendBg: "bg-slate-200 dark:bg-slate-700",
        trendText: "text-slate-500",
    },
    {
        skill: "Writing",
        band: 6.0,
        percentage: 62,
        trend: "-0.5",
        suggestion: "⚠️ Focus on Task 2 essay structure and coherence.",
        icon: PenTool,
        iconColor: "text-purple-600 dark:text-purple-400",
        barColor: "bg-purple-500",
        trendBg: "bg-red-500/10",
        trendText: "text-red-600",
    },
    {
        skill: "Speaking",
        band: 6.0,
        percentage: 58,
        trend: "+0.5",
        suggestion: "Great progress! Work on fluency and reducing hesitation in Part 2.",
        icon: Mic2,
        iconColor: "text-amber-600 dark:text-amber-400",
        barColor: "bg-amber-500",
        trendBg: "bg-emerald-500/10",
        trendText: "text-emerald-600",
    },
]

const recentActivity = [
    {
        icon: BookOpen,
        title: "Reading Test: AI Evolution",
        time: "2 hours ago",
        score: "8/10",
        bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        scoreBg: "bg-emerald-500/10",
        scoreText: "text-emerald-600",
    },
    {
        icon: Headphones,
        title: "Listening: Academic Module",
        time: "Yesterday",
        score: "32/40",
        bgColor: "bg-blue-50 dark:bg-blue-500/10",
        iconColor: "text-blue-600 dark:text-blue-400",
        scoreBg: "bg-blue-500/10",
        scoreText: "text-blue-600",
    },
    {
        icon: PenTool,
        title: "Writing Task 2 Submission",
        time: "2 days ago",
        score: "Band 6.5",
        bgColor: "bg-purple-50 dark:bg-purple-500/10",
        iconColor: "text-purple-600 dark:text-purple-400",
        scoreBg: "bg-purple-500/10",
        scoreText: "text-purple-600",
    },
]
