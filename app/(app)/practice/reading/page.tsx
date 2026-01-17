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
    BookOpen,
    Clock,
    CheckCircle2,
    BarChart3,
    Target,
    Layers,
    FileText,
    Brain,
    Zap,
    Trophy
} from "lucide-react"

export default async function ReadingPracticePage() {
    return (
        <div className="flex flex-col p-6 bg-slate-50 dark:bg-[#020617] min-h-full">
            {/* Full Mock Test Hero */}
            <section className="mb-12">
                <Card className="relative overflow-hidden border-none bg-slate-900 dark:bg-indigo-600/10 rounded-[2.5rem] shadow-2xl shadow-indigo-500/20 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-transparent pointer-events-none" />
                    <div className="relative p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 text-center lg:text-left">
                            <Badge className="bg-indigo-500/20 text-indigo-400 border-none rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6">
                                Professional Mock Exam
                            </Badge>
                            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                                Take a <span className="text-indigo-400 italic">Full Mock</span> Test
                            </h2>
                            <p className="text-indigo-100/70 text-lg font-medium leading-relaxed mb-8 max-w-xl">
                                Simulate the real IELTS environment with 3 academic passages, 40 questions, and a strict 60-minute time limit.
                            </p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-white/60">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-indigo-400" />
                                    <span className="text-sm font-bold uppercase tracking-tight">60 Minutes</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-indigo-400" />
                                    <span className="text-sm font-bold uppercase tracking-tight">3 Passages</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-indigo-400" />
                                    <span className="text-sm font-bold uppercase tracking-tight">40 Questions</span>
                                </div>
                            </div>
                            <Button size="lg" className="h-16 px-10 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-black text-lg shadow-xl shadow-white/10 group-hover:scale-105 transition-transform" asChild>
                                <Link href="/practice/reading/test/1?mode=full">
                                    Start Full Mock <Zap className="ml-3 w-5 h-5 fill-current" />
                                </Link>
                            </Button>
                        </div>
                        <div className="hidden lg:flex flex-1 justify-end">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-3xl" />
                                <div className="relative h-64 w-64 rounded-[3rem] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-inner overflow-hidden">
                                    <Trophy className="w-32 h-32 text-indigo-500/30 absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
                                    <Brain className="w-24 h-24 text-indigo-400 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Practice Stats */}
            <section className="mb-6">
                <div className="grid md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <Card key={i} className="bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-2xl">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="h-11 w-11 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xl font-black text-[#020617] dark:text-white">{stat.value}</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Practice Modules */}
            <section className="mb-6">
                <h2 className="text-2xl font-black text-[#020617] dark:text-white mb-6">Practice Modules</h2>

                <div className="grid lg:grid-cols-3 gap-6">
                    {modules.map((module, i) => (
                        <Card key={i} className="group bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-[1.5rem] overflow-hidden hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5">
                            <CardHeader className="p-6 pb-4">
                                <div className="flex items-center justify-between mb-3">
                                    <Badge className={`${module.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : module.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'} border-none rounded-full px-3 py-0.5 text-[10px] font-black uppercase tracking-widest`}>
                                        {module.difficulty}
                                    </Badge>
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold uppercase">{module.time}</span>
                                    </div>
                                </div>
                                <CardTitle className="text-lg font-black text-[#020617] dark:text-white mb-1.5">{module.title}</CardTitle>
                                <CardDescription className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal line-clamp-2">
                                    {module.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <FileText className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold uppercase">{module.questions} Questions</span>
                                    </div>
                                    <Button size="sm" className="h-9 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold group-hover:scale-105 transition-transform text-xs" asChild>
                                        <Link href={`/practice/reading/test/1${module.mode ? `?mode=${module.mode}` : ''}`}>
                                            Start Test <ArrowRight className="ml-2 w-3.5 h-3.5" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Sample Passage Preview */}
            <section>
                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7">
                        <Card className="bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-xl">
                            <CardHeader className="p-6 border-b border-slate-200 dark:border-white/5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-none rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-3">
                                            Sample Passage
                                        </Badge>
                                        <CardTitle className="text-xl font-black text-[#020617] dark:text-white line-clamp-1">{passage.title}</CardTitle>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 shrink-0">
                                        <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                                        <span className="text-xs font-black text-indigo-600 dark:text-indigo-400">20:00</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="prose prose-slate dark:prose-invert max-w-none">
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                        Artificial intelligence (AI) has undergone a remarkable transformation since its inception in the mid-20th century. What began as a theoretical concept discussed by mathematicians and philosophers has evolved into one of the most influential technologies of our time, reshaping industries, economies, and the very fabric of daily life.
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mt-4">
                                        The term "artificial intelligence" was first coined in 1956 at the Dartmouth Conference, where researchers gathered to explore the possibility of creating machines that could simulate human intelligence. Early AI research focused on symbolic reasoning and problem-solving, with programs designed to play chess or solve mathematical theorems.
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mt-4">
                                        However, progress was slow, and the field experienced several "AI winters" – periods of reduced funding and interest due to unmet expectations. It wasn't until the 21st century, with the advent of deep learning and neural networks, that AI began to achieve groundbreaking results...
                                    </p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5">
                                    <Button className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl shadow-lg shadow-indigo-500/20" asChild>
                                        <Link href="/practice/reading/test/1">Continue Reading & Answer Questions</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                        <Card className="bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-2xl">
                            <CardHeader className="p-6">
                                <CardTitle className="text-lg font-black text-[#020617] dark:text-white flex items-center gap-3">
                                    <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                    Question Types
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 space-y-4">
                                {questionTypes.map((type, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                        <span className="font-bold text-[#020617] dark:text-white">{type.name}</span>
                                        <Badge className="bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-none rounded-full px-3 py-1 text-[10px] font-black">
                                            {type.count} Qs
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="bg-indigo-600 dark:bg-indigo-600/20 border-none rounded-2xl overflow-hidden">
                            <CardContent className="p-8">
                                <Zap className="w-10 h-10 text-white dark:text-indigo-400 mb-4" />
                                <h3 className="text-xl font-black text-white dark:text-white mb-2">Pro Tip</h3>
                                <p className="text-indigo-100 dark:text-indigo-200 font-medium leading-relaxed">
                                    Skim the passage first to get a general understanding, then read the questions carefully before diving into detailed reading.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

const stats = [
    { icon: Target, value: "Band 7.5", label: "Target Score" },
    { icon: BarChart3, value: "12", label: "Completed" },
    { icon: CheckCircle2, value: "78%", label: "Accuracy" },
    { icon: Clock, value: "45m", label: "Avg. Time" },
]

const modules = [
    {
        title: "Full Mock Test: Vol. 1",
        description: "Official-style mock test with varied academic topics and standard 40-question set.",
        difficulty: "Hard",
        time: "60 min",
        questions: 40,
        mode: "full",
    },
    {
        title: "Academic Passage: Science",
        description: "Explore scientific discoveries and research methodologies through academic texts.",
        difficulty: "Medium",
        time: "20 min",
        questions: 13,
    },
    {
        title: "Academic Passage: History",
        description: "Analyze historical events and their impact on modern society.",
        difficulty: "Hard",
        time: "20 min",
        questions: 14,
    },
]

const questionTypes = [
    { name: "Multiple Choice", count: 4 },
    { name: "True/False/Not Given", count: 5 },
    { name: "Matching Headings", count: 4 },
    { name: "Summary Completion", count: 3 },
]

const passage = {
    title: "The Evolution of Artificial Intelligence",
}
