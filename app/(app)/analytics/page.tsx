"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    BarChart3,
    TrendingUp,
    Target,
    Zap,
    Clock,
    Calendar,
    ChevronRight,
    Search,
    Filter,
    ArrowUpRight,
    ArrowDownRight,
    Brain,
    Trophy
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AnalyticsPage() {
    const [activeTab, setActiveTab] = useState("overview")

    return (
        <div className="flex flex-col p-6 bg-slate-50 dark:bg-[#020617] min-h-full transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">Performance Overview</h1>
                    <p className="text-slate-500 font-bold text-sm tracking-tight flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Last updated: Today, 11:30 PM
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="rounded-xl border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 font-bold text-xs h-10 px-4">
                        <Filter className="w-3.5 h-3.5 mr-2" /> Filter
                    </Button>
                    <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs h-10 px-6 shadow-lg shadow-indigo-500/20">
                        Export Report
                    </Button>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all group overflow-hidden border-b-4 border-b-transparent hover:border-b-indigo-500">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`h-12 w-12 rounded-2xl ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-600'}`}>
                                        {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                        {stat.change}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-0.5">{stat.value}</h3>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                {/* Score Progress Chart */}
                <Card className="lg:col-span-8 bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-[2rem] shadow-sm overflow-hidden flex flex-col">
                    <CardHeader className="p-8 pb-0">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <CardTitle className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Band Score Progression</CardTitle>
                                <CardDescription className="text-slate-500 font-bold">Your estimated band score over the last 10 tests</CardDescription>
                            </div>
                            <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl">
                                {['1W', '1M', '3M', '6M'].map((period) => (
                                    <button
                                        key={period}
                                        className={`px-3 py-1 text-[10px] font-black rounded-lg transition-all ${period === '1M' ? 'bg-white dark:bg-white/10 text-indigo-600 shadow-sm' : 'text-slate-500'}`}
                                    >
                                        {period}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 pt-4 flex-1 flex items-end">
                        <div className="w-full h-64 relative group">
                            {/* Grid Lines */}
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="absolute left-0 right-0 border-t border-slate-100 dark:border-white/5" style={{ bottom: `${i * 25}%` }} />
                            ))}

                            {/* SVG Chart */}
                            <svg viewBox="0 0 1000 250" className="w-full h-full overflow-visible">
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                                    </linearGradient>
                                </defs>

                                {/* Area */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    d="M0,200 L100,180 L200,190 L300,150 L400,160 L500,120 L600,130 L700,90 L800,100 L900,60 L1000,70 L1000,250 L0,250 Z"
                                    fill="url(#gradient)"
                                />

                                {/* Line */}
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    d="M0,200 L100,180 L200,190 L300,150 L400,160 L500,120 L600,130 L700,90 L800,100 L900,60 L1000,70"
                                    fill="none"
                                    stroke="#4f46e5"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                {/* Points */}
                                {[200, 180, 190, 150, 160, 120, 130, 90, 100, 60, 70].map((y, i) => (
                                    <motion.circle
                                        key={i}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1 + i * 0.1 }}
                                        cx={i * 100}
                                        cy={y}
                                        r="6"
                                        fill="white"
                                        stroke="#4f46e5"
                                        strokeWidth="3"
                                        className="cursor-pointer hover:r-8 transition-all"
                                    />
                                ))}
                            </svg>

                            {/* X-Axis Labels */}
                            <div className="flex justify-between mt-4">
                                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'].map((month, i) => (
                                    <span key={month} className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{month}</span>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Skill Matrix */}
                <Card className="lg:col-span-4 bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-[2rem] shadow-sm flex flex-col">
                    <CardHeader className="p-8">
                        <CardTitle className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Skill Matrix</CardTitle>
                        <CardDescription className="text-slate-500 font-bold">Breakdown of accuracy per skill</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 flex-1 space-y-6">
                        {skills.map((skill, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-xl bg-slate-100 dark:bg-white/5 ${skill.textStatus}`}>
                                            <skill.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{skill.name}</span>
                                    </div>
                                    <span className="text-sm font-black text-slate-900 dark:text-white">{skill.accuracy}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.accuracy}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + i * 0.1 }}
                                        className={`h-full bg-gradient-to-r ${skill.gradient}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                    <div className="p-8 border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                        <Button variant="ghost" className="w-full rounded-xl font-black text-indigo-600 dark:text-indigo-400 group h-12">
                            View Detailed Analysis <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Recent Activities */}
                <Card className="lg:col-span-7 bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-[2rem] shadow-sm">
                    <CardHeader className="p-8">
                        <CardTitle className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Recent Activity</CardTitle>
                        <CardDescription className="text-slate-500 font-bold">Your latest test attempts and scores</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                        <div className="space-y-4">
                            {activities.map((activity, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-all cursor-pointer group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                            {activity.type === 'reading' ? <Brain className="w-6 h-6" /> : <Trophy className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 dark:text-white text-sm">{activity.title}</h4>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{activity.date} • {activity.duration}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-black text-indigo-600 dark:text-indigo-400 text-lg leading-none">{activity.score}</p>
                                        <p className="text-[10px] font-black text-emerald-500 uppercase">Passed</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Growth & Insights */}
                <Card className="lg:col-span-5 bg-indigo-600 dark:bg-indigo-600/30 border-none rounded-[2.5rem] overflow-hidden text-white group p-10 flex flex-col justify-between relative shadow-2xl shadow-indigo-500/40">
                    <div className="absolute top-0 right-0 p-12 opacity-10 scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                        <Zap className="w-48 h-48" />
                    </div>
                    <div className="relative">
                        <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight">You are on the fast <br /> track to <span className="text-indigo-200 italic">Band 8.0</span></h3>
                        <p className="text-indigo-100 font-medium leading-relaxed mb-8 opacity-80">
                            Your reading accuracy has improved by 15% in the last week. Focused practice on "Matching Headings" is recommended to reach your target next month.
                        </p>
                        <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-black uppercase tracking-widest">Growth Forecast</span>
                                <Badge className="bg-emerald-400 text-slate-900 border-none rounded-full px-2 py-0 h-4 text-[8px] font-black">+2.4 pts</Badge>
                            </div>
                            <div className="h-2 w-full bg-indigo-500/30 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "75%" }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    className="h-full bg-white"
                                />
                            </div>
                        </div>
                    </div>
                    <Button className="mt-8 h-14 w-full rounded-2xl bg-white text-indigo-600 hover:bg-slate-100 font-black text-lg shadow-xl transition-all relative overflow-hidden group">
                        Start Personalized Plan
                        <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity" />
                    </Button>
                </Card>
            </div>
        </div>
    )
}

const stats = [
    { label: "Overall Band Score", value: "7.5", icon: Trophy, color: "bg-indigo-600", trend: "up", change: "+0.5" },
    { label: "Test Success Rate", value: "84%", icon: Target, color: "bg-emerald-500", trend: "up", change: "+12%" },
    { label: "Study Time", value: "32h", icon: Clock, color: "bg-amber-500", trend: "up", change: "+4h" },
    { label: "Mastered Skills", value: "18", icon: Zap, color: "bg-pink-600", trend: "down", change: "-2" },
]

const skills = [
    { name: "Reading Accuracy", accuracy: 88, icon: Brain, gradient: "from-indigo-500 to-indigo-600", textStatus: "text-indigo-600" },
    { name: "Listening Proficiency", accuracy: 72, icon: BarChart3, gradient: "from-emerald-500 to-emerald-600", textStatus: "text-emerald-600" },
    { name: "Writing Fluency", accuracy: 65, icon: TrendingUp, gradient: "from-amber-500 to-amber-600", textStatus: "text-amber-600" },
    { name: "Speaking Confidence", accuracy: 92, icon: Zap, gradient: "from-pink-500 to-pink-600", textStatus: "text-pink-600" },
]

const activities = [
    { title: "Full Mock Test: Volume 1", type: "mock", date: "Jan 15, 2026", duration: "60 mins", score: "36/40" },
    { title: "Academic Reading Practice", type: "reading", date: "Jan 14, 2026", duration: "20 mins", score: "12/13" },
    { title: "Cambridge 18: Test 2", type: "reading", date: "Jan 12, 2026", duration: "60 mins", score: "32/40" },
    { title: "Science Passage Deep Dive", type: "reading", date: "Jan 10, 2026", duration: "20 mins", score: "10/10" },
]
