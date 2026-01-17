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
    Sparkles,
    Zap,
    Crown,
    Building2
} from "lucide-react"

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen pt-28 pb-20 bg-[#fcfdff] dark:bg-[#020617]">
            {/* Header */}
            <section className="container mx-auto px-4 lg:px-12 mb-16">
                <div className="flex items-center gap-4 mb-8">
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl border border-slate-200 dark:border-white/10" asChild>
                        <Link href="/"><ArrowLeft className="w-5 h-5" /></Link>
                    </Button>
                    <Badge className="bg-purple-600 dark:bg-purple-500/10 text-white dark:text-purple-400 border-none rounded-full px-5 py-1 text-xs font-black tracking-widest uppercase">
                        Pricing
                    </Badge>
                </div>

                <div className="max-w-4xl text-center mx-auto">
                    <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-[#020617] dark:text-white mb-6">
                        Simple <span className="text-purple-600 dark:text-purple-400">Pricing</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        Choose the plan that fits your IELTS preparation needs.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="container mx-auto px-4 lg:px-12 mb-16">
                <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, i) => (
                        <Card key={i} className={`relative group bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl ${plan.featured ? 'ring-2 ring-indigo-600 dark:ring-indigo-400' : ''}`}>
                            {plan.featured && (
                                <div className="absolute top-0 left-0 right-0 bg-indigo-600 text-white text-center py-2 text-xs font-black uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader className={`p-8 ${plan.featured ? 'pt-14' : ''}`}>
                                <div className={`w-14 h-14 rounded-2xl ${plan.bgColor} flex items-center justify-center mb-6`}>
                                    <plan.icon className={`w-7 h-7 ${plan.iconColor}`} />
                                </div>
                                <CardTitle className="text-2xl font-black text-[#020617] dark:text-white mb-2">{plan.name}</CardTitle>
                                <CardDescription className="text-slate-500 font-bold">
                                    {plan.description}
                                </CardDescription>
                                <div className="mt-6">
                                    <span className="text-5xl font-black text-[#020617] dark:text-white">${plan.price}</span>
                                    <span className="text-slate-500 font-bold">/{plan.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8 pt-0">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className={`w-full h-14 rounded-xl font-bold ${plan.featured ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'}`} asChild>
                                    <Link href="/login">{plan.cta}</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* FAQ or Guarantee */}
            <section className="container mx-auto px-4 lg:px-12">
                <Card className="bg-slate-900 dark:bg-slate-900/60 border-none rounded-[2rem] overflow-hidden">
                    <CardContent className="p-12 lg:p-16 text-center">
                        <Sparkles className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
                        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">100% Satisfaction Guarantee</h2>
                        <p className="text-slate-400 font-medium mb-8 max-w-xl mx-auto">
                            Not satisfied with your results? Get a full refund within 30 days, no questions asked.
                        </p>
                        <div className="flex flex-wrap gap-8 justify-center text-slate-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <span className="font-bold">Cancel anytime</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <span className="font-bold">No hidden fees</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <span className="font-bold">24/7 Support</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}

const plans = [
    {
        name: "Free",
        description: "Get started with basic features",
        price: 0,
        period: "forever",
        icon: Zap,
        bgColor: "bg-slate-100 dark:bg-slate-800",
        iconColor: "text-slate-600 dark:text-slate-400",
        featured: false,
        cta: "Start Free",
        features: [
            "5 practice tests per month",
            "Basic performance tracking",
            "Community support",
            "Mobile app access",
        ],
    },
    {
        name: "Pro",
        description: "For serious IELTS candidates",
        price: 29,
        period: "month",
        icon: Crown,
        bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
        iconColor: "text-indigo-600 dark:text-indigo-400",
        featured: true,
        cta: "Start Pro Trial",
        features: [
            "Unlimited practice tests",
            "AI-powered writing feedback",
            "Speaking practice with AI",
            "Detailed analytics dashboard",
            "Personalized study plans",
            "Priority support",
        ],
    },
    {
        name: "Enterprise",
        description: "For institutions and teams",
        price: 99,
        period: "user/month",
        icon: Building2,
        bgColor: "bg-purple-50 dark:bg-purple-500/10",
        iconColor: "text-purple-600 dark:text-purple-400",
        featured: false,
        cta: "Contact Sales",
        features: [
            "Everything in Pro",
            "Bulk user management",
            "Custom branding",
            "API access",
            "Dedicated success manager",
            "SLA guarantee",
        ],
    },
]
