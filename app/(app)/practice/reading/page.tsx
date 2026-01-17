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
    Zap
} from "lucide-react"

export default async function ReadingPracticePage() {
    return (
        <div className="flex flex-col p-6 bg-slate-50 dark:bg-[#020617] min-h-full">
            {/* Page Header */}
            <section className="mb-6">
                <div className="flex items-center gap-4 mb-6">
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl border border-slate-200 dark:border-white/10" asChild>
                        <Link href="/dashboard"><ArrowLeft className="w-5 h-5" /></Link>
                    </Button>
                </div>

                <div className="max-w-4xl">
                    <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-[#020617] dark:text-white mb-4">
                        Reading <span className="text-indigo-600 dark:text-indigo-400">Practice</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        Improve your IELTS Reading band with our collection of academic passages and interactive exercises.
                    </p>
                </div>
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
                                    <Button size="sm" className="h-9 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold group-hover:scale-105 transition-transform text-xs">
                                        Start Test <ArrowRight className="ml-2 w-3.5 h-3.5" />
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
    {
        title: "Academic Passage: Technology",
        description: "Understand technological advancements and their implications.",
        difficulty: "Easy",
        time: "20 min",
        questions: 13,
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
