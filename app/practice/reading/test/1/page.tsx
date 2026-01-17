"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    ArrowLeft,
    Clock,
    CheckCircle2,
    XCircle,
    Send,
    RotateCcw,
    Trophy
} from "lucide-react"

// Test Data
const passage = {
    title: "The Evolution of Artificial Intelligence",
    paragraphs: [
        {
            id: "A",
            content: "Artificial intelligence (AI) has undergone a remarkable transformation since its inception in the mid-20th century. What began as a theoretical concept discussed by mathematicians and philosophers has evolved into one of the most influential technologies of our time, reshaping industries, economies, and the very fabric of daily life. The journey of AI from academic curiosity to practical reality represents one of humanity's most ambitious intellectual endeavors."
        },
        {
            id: "B",
            content: "The term 'artificial intelligence' was first coined in 1956 at the Dartmouth Conference, where researchers gathered to explore the possibility of creating machines that could simulate human intelligence. Early AI research focused on symbolic reasoning and problem-solving, with programs designed to play chess or solve mathematical theorems. These early systems, while impressive for their time, were limited by the computational power available and the complexity of encoding human knowledge into rigid rules."
        },
        {
            id: "C",
            content: "The field experienced several 'AI winters' – periods of reduced funding and interest due to unmet expectations. During the 1970s and again in the late 1980s, enthusiasm waned as researchers struggled to deliver on the grand promises made to funding agencies. Many predicted that machines would soon match human intelligence, but the reality proved far more challenging. These setbacks, however, led to more realistic expectations and refined approaches to AI development."
        },
        {
            id: "D",
            content: "The 21st century brought a revolutionary change with the advent of deep learning and neural networks. Unlike earlier approaches that required explicit programming of rules, these systems could learn patterns directly from data. The availability of massive datasets, coupled with exponential increases in computing power, enabled breakthroughs that had seemed impossible just decades earlier. Image recognition, natural language processing, and game-playing AI achieved superhuman performance in specific tasks."
        },
        {
            id: "E",
            content: "Today, AI applications are ubiquitous, from virtual assistants on smartphones to sophisticated medical diagnosis systems. Machine learning algorithms recommend products, detect fraud, translate languages, and even create art. However, this rapid advancement has also raised important ethical questions about privacy, employment displacement, and the potential risks of increasingly autonomous systems. The debate continues about how to ensure AI development benefits humanity while minimizing potential harms."
        }
    ]
}

const questions: Question[] = [
    {
        id: 1,
        type: "true-false-not-given",
        text: "The Dartmouth Conference took place in the 1960s.",
        correctAnswer: "FALSE",
        explanation: "The passage states the term was coined in 1956 at the Dartmouth Conference."
    },
    {
        id: 2,
        type: "true-false-not-given",
        text: "Early AI systems were limited by available computing power.",
        correctAnswer: "TRUE",
        explanation: "Paragraph B states they 'were limited by the computational power available'."
    },
    {
        id: 3,
        type: "true-false-not-given",
        text: "The AI winters occurred only once in the history of AI development.",
        correctAnswer: "FALSE",
        explanation: "Paragraph C mentions 'several AI winters' and specifically mentions the 1970s and late 1980s."
    },
    {
        id: 4,
        type: "true-false-not-given",
        text: "Deep learning requires explicit programming of rules.",
        correctAnswer: "FALSE",
        explanation: "Paragraph D states 'Unlike earlier approaches that required explicit programming of rules, these systems could learn patterns directly from data'."
    },
    {
        id: 5,
        type: "true-false-not-given",
        text: "AI has achieved superhuman performance in all tasks.",
        correctAnswer: "FALSE",
        explanation: "Paragraph D says AI achieved superhuman performance 'in specific tasks', not all tasks."
    },
    {
        id: 6,
        type: "multiple-choice",
        text: "What was the main focus of early AI research?",
        options: [
            "A) Deep learning and neural networks",
            "B) Symbolic reasoning and problem-solving",
            "C) Medical diagnosis systems",
            "D) Virtual assistants"
        ],
        correctAnswer: "B",
        explanation: "Paragraph B states 'Early AI research focused on symbolic reasoning and problem-solving'."
    },
    {
        id: 7,
        type: "multiple-choice",
        text: "What enabled the breakthroughs in AI in the 21st century?",
        options: [
            "A) New programming languages",
            "B) Government regulations",
            "C) Massive datasets and increased computing power",
            "D) Reduced research funding"
        ],
        correctAnswer: "C",
        explanation: "Paragraph D mentions 'availability of massive datasets, coupled with exponential increases in computing power'."
    },
    {
        id: 8,
        type: "multiple-choice",
        text: "According to the passage, what is one ethical concern about AI?",
        options: [
            "A) The cost of development",
            "B) Employment displacement",
            "C) Lack of creativity",
            "D) Slow processing speed"
        ],
        correctAnswer: "B",
        explanation: "Paragraph E mentions 'employment displacement' as one of the ethical questions raised."
    },
    {
        id: 9,
        type: "matching-paragraph",
        text: "Which paragraph discusses the periods when interest in AI decreased?",
        options: ["A", "B", "C", "D", "E"],
        correctAnswer: "C",
        explanation: "Paragraph C discusses the 'AI winters' – periods of reduced funding and interest."
    },
    {
        id: 10,
        type: "matching-paragraph",
        text: "Which paragraph mentions current applications of AI?",
        options: ["A", "B", "C", "D", "E"],
        correctAnswer: "E",
        explanation: "Paragraph E discusses today's AI applications like virtual assistants and medical diagnosis."
    }
]

interface Question {
    id: number
    type: string
    text: string
    options?: string[]
    correctAnswer: string
    explanation: string
}

export default function ReadingTestPage() {
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [submitted, setSubmitted] = useState(false)
    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(20 * 60) // 20 minutes in seconds

    useEffect(() => {
        if (submitted || timeLeft <= 0) return

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    handleSubmit()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [submitted, timeLeft])

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const handleAnswer = (questionId: number, answer: string) => {
        if (submitted) return
        setAnswers(prev => ({ ...prev, [questionId]: answer }))
    }

    const handleSubmit = () => {
        let correct = 0
        questions.forEach(q => {
            if (answers[q.id] === q.correctAnswer) {
                correct++
            }
        })
        setScore(correct)
        setSubmitted(true)
    }

    const handleReset = () => {
        setAnswers({})
        setSubmitted(false)
        setScore(0)
        setTimeLeft(20 * 60)
    }

    const getAnswerStatus = (questionId: number) => {
        if (!submitted) return null
        const question = questions.find(q => q.id === questionId)
        if (!question) return null
        return answers[questionId] === question.correctAnswer ? 'correct' : 'incorrect'
    }

    return (
        <div className="flex flex-col min-h-screen pt-28 pb-20 bg-[#fcfdff] dark:bg-[#020617]">
            {/* Fixed Header */}
            <div className="fixed top-24 left-0 right-0 z-30 bg-[#fcfdff]/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5">
                <div className="container mx-auto px-4 lg:px-12 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl border border-slate-200 dark:border-white/10" asChild>
                            <Link href="/practice/reading"><ArrowLeft className="w-5 h-5" /></Link>
                        </Button>
                        <div>
                            <h1 className="text-lg font-black text-[#020617] dark:text-white">Reading Test 1</h1>
                            <p className="text-xs text-slate-500 font-bold">The Evolution of AI</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${timeLeft < 60 ? 'bg-red-500/10 text-red-600' : 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'}`}>
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-black">{formatTime(timeLeft)}</span>
                        </div>

                        {submitted ? (
                            <Button onClick={handleReset} className="rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold">
                                <RotateCcw className="w-4 h-4 mr-2" /> Try Again
                            </Button>
                        ) : (
                            <Button onClick={handleSubmit} className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold">
                                <Send className="w-4 h-4 mr-2" /> Submit
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* Score Modal */}
            {submitted && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <Card className="w-full max-w-md bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 rounded-[2rem] shadow-2xl animate-in zoom-in-95">
                        <CardContent className="p-10 text-center">
                            <div className="h-20 w-20 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-6">
                                <Trophy className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-3xl font-black text-[#020617] dark:text-white mb-2">Test Complete!</h2>
                            <p className="text-slate-500 font-bold mb-8">Here's your score</p>

                            <div className="text-7xl font-black text-indigo-600 dark:text-indigo-400 mb-2">
                                {score}/{questions.length}
                            </div>
                            <p className="text-slate-500 font-bold mb-8">
                                {score >= 8 ? "Excellent! 🎉" : score >= 6 ? "Good job! 👍" : "Keep practicing! 💪"}
                            </p>

                            <div className="flex gap-4">
                                <Button onClick={handleReset} variant="outline" className="flex-1 h-14 rounded-xl font-bold">
                                    Try Again
                                </Button>
                                <Button asChild className="flex-1 h-14 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold">
                                    <Link href="/practice/reading">View Results</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Main Content */}
            <div className="container mx-auto px-4 lg:px-12 mt-20">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Passage */}
                    <div className="lg:sticky lg:top-48 lg:h-[calc(100vh-14rem)] lg:overflow-y-auto pr-4">
                        <Card className="bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-xl">
                            <CardHeader className="p-8 border-b border-slate-200 dark:border-white/5">
                                <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-none rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-3 w-fit">
                                    Reading Passage
                                </Badge>
                                <CardTitle className="text-2xl font-black text-[#020617] dark:text-white">{passage.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                {passage.paragraphs.map((para, i) => (
                                    <div key={i} className="mb-6">
                                        <span className="inline-block w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-black text-sm text-center leading-8 mr-3">
                                            {para.id}
                                        </span>
                                        <p className="inline text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                            {para.content}
                                        </p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Questions */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black text-[#020617] dark:text-white mb-6">Questions 1-10</h2>

                        {/* True/False/Not Given Section */}
                        <div className="mb-8">
                            <h3 className="text-lg font-black text-[#020617] dark:text-white mb-4">Questions 1-5: True / False / Not Given</h3>
                            <p className="text-sm text-slate-500 font-bold mb-6">Do the following statements agree with the information given in the passage?</p>

                            {questions.filter(q => q.type === 'true-false-not-given').map(q => (
                                <Card key={q.id} className={`mb-4 bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-2xl overflow-hidden transition-all ${getAnswerStatus(q.id) === 'correct' ? 'ring-2 ring-emerald-500' : getAnswerStatus(q.id) === 'incorrect' ? 'ring-2 ring-red-500' : ''}`}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4 mb-4">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center">
                                                {q.id}
                                            </span>
                                            <p className="font-bold text-[#020617] dark:text-white">{q.text}</p>
                                        </div>
                                        <div className="flex gap-3 ml-12">
                                            {['TRUE', 'FALSE', 'NOT GIVEN'].map(option => (
                                                <button
                                                    key={option}
                                                    onClick={() => handleAnswer(q.id, option)}
                                                    disabled={submitted}
                                                    className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${answers[q.id] === option
                                                            ? 'bg-indigo-600 text-white'
                                                            : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                                                        } ${submitted && q.correctAnswer === option ? 'ring-2 ring-emerald-500' : ''}`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                        {submitted && (
                                            <div className={`mt-4 ml-12 p-4 rounded-xl ${getAnswerStatus(q.id) === 'correct' ? 'bg-emerald-50 dark:bg-emerald-500/10' : 'bg-red-50 dark:bg-red-500/10'}`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    {getAnswerStatus(q.id) === 'correct' ? (
                                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                                    ) : (
                                                        <XCircle className="w-5 h-5 text-red-600" />
                                                    )}
                                                    <span className={`font-bold ${getAnswerStatus(q.id) === 'correct' ? 'text-emerald-600' : 'text-red-600'}`}>
                                                        {getAnswerStatus(q.id) === 'correct' ? 'Correct!' : `Incorrect. Answer: ${q.correctAnswer}`}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">{q.explanation}</p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Multiple Choice Section */}
                        <div className="mb-8">
                            <h3 className="text-lg font-black text-[#020617] dark:text-white mb-4">Questions 6-8: Multiple Choice</h3>
                            <p className="text-sm text-slate-500 font-bold mb-6">Choose the correct letter, A, B, C or D.</p>

                            {questions.filter(q => q.type === 'multiple-choice').map(q => (
                                <Card key={q.id} className={`mb-4 bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-2xl overflow-hidden transition-all ${getAnswerStatus(q.id) === 'correct' ? 'ring-2 ring-emerald-500' : getAnswerStatus(q.id) === 'incorrect' ? 'ring-2 ring-red-500' : ''}`}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4 mb-4">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center">
                                                {q.id}
                                            </span>
                                            <p className="font-bold text-[#020617] dark:text-white">{q.text}</p>
                                        </div>
                                        <div className="space-y-3 ml-12">
                                            {q.options?.map((option, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleAnswer(q.id, option.charAt(0))}
                                                    disabled={submitted}
                                                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all ${answers[q.id] === option.charAt(0)
                                                            ? 'bg-indigo-600 text-white'
                                                            : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                                                        } ${submitted && q.correctAnswer === option.charAt(0) ? 'ring-2 ring-emerald-500' : ''}`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                        {submitted && (
                                            <div className={`mt-4 ml-12 p-4 rounded-xl ${getAnswerStatus(q.id) === 'correct' ? 'bg-emerald-50 dark:bg-emerald-500/10' : 'bg-red-50 dark:bg-red-500/10'}`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    {getAnswerStatus(q.id) === 'correct' ? (
                                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                                    ) : (
                                                        <XCircle className="w-5 h-5 text-red-600" />
                                                    )}
                                                    <span className={`font-bold ${getAnswerStatus(q.id) === 'correct' ? 'text-emerald-600' : 'text-red-600'}`}>
                                                        {getAnswerStatus(q.id) === 'correct' ? 'Correct!' : `Incorrect. Answer: ${q.correctAnswer}`}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">{q.explanation}</p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Matching Paragraph Section */}
                        <div className="mb-8">
                            <h3 className="text-lg font-black text-[#020617] dark:text-white mb-4">Questions 9-10: Matching Information</h3>
                            <p className="text-sm text-slate-500 font-bold mb-6">Which paragraph contains the following information?</p>

                            {questions.filter(q => q.type === 'matching-paragraph').map(q => (
                                <Card key={q.id} className={`mb-4 bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-2xl overflow-hidden transition-all ${getAnswerStatus(q.id) === 'correct' ? 'ring-2 ring-emerald-500' : getAnswerStatus(q.id) === 'incorrect' ? 'ring-2 ring-red-500' : ''}`}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4 mb-4">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center">
                                                {q.id}
                                            </span>
                                            <p className="font-bold text-[#020617] dark:text-white">{q.text}</p>
                                        </div>
                                        <div className="flex gap-3 ml-12">
                                            {q.options?.map(option => (
                                                <button
                                                    key={option}
                                                    onClick={() => handleAnswer(q.id, option)}
                                                    disabled={submitted}
                                                    className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${answers[q.id] === option
                                                            ? 'bg-indigo-600 text-white'
                                                            : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                                                        } ${submitted && q.correctAnswer === option ? 'ring-2 ring-emerald-500' : ''}`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                        {submitted && (
                                            <div className={`mt-4 ml-12 p-4 rounded-xl ${getAnswerStatus(q.id) === 'correct' ? 'bg-emerald-50 dark:bg-emerald-500/10' : 'bg-red-50 dark:bg-red-500/10'}`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    {getAnswerStatus(q.id) === 'correct' ? (
                                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                                    ) : (
                                                        <XCircle className="w-5 h-5 text-red-600" />
                                                    )}
                                                    <span className={`font-bold ${getAnswerStatus(q.id) === 'correct' ? 'text-emerald-600' : 'text-red-600'}`}>
                                                        {getAnswerStatus(q.id) === 'correct' ? 'Correct!' : `Incorrect. Answer: ${q.correctAnswer}`}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">{q.explanation}</p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Submit Button */}
                        {!submitted && (
                            <Button onClick={handleSubmit} className="w-full h-16 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg rounded-2xl shadow-lg shadow-indigo-500/20">
                                <Send className="w-5 h-5 mr-2" /> Submit Answers
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
