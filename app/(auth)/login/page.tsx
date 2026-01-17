import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#020617] px-4 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />

            <Card className="w-full max-w-md bg-slate-900/40 border-white/10 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] p-4 relative z-10">
                <CardHeader className="space-y-4 text-center py-10">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center font-bold text-white text-xl mx-auto shadow-2xl shadow-indigo-500/20">
                        V3
                    </div>
                    <div className="space-y-2">
                        <CardTitle className="text-3xl font-bold tracking-tight text-white">Initialize Session</CardTitle>
                        <CardDescription className="text-slate-400 font-light text-base">
                            Access the neural practice ecosystem
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="pb-12 px-8">
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google")
                        }}
                    >
                        <Button type="submit" className="w-full h-14 bg-white text-slate-900 hover:bg-slate-200 font-bold rounded-2xl transition-all duration-300 shadow-xl">
                            Continue with Google
                        </Button>
                    </form>
                    <p className="mt-8 text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                        Secure Protocol 2.4.1
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
