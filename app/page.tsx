import { auth } from "@/auth"

export default async function Home() {
    const session = await auth()

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center space-y-4">
                <h1 className="text-4xl font-bold">Welcome to IELTS V3</h1>
                {session?.user ? (
                    <div className="space-y-2">
                        <p className="text-lg text-muted-foreground">
                            Hello, {session.user.name}!
                        </p>
                        <p className="text-sm text-muted-foreground">
                            You are signed in as {session.user.email}
                        </p>
                    </div>
                ) : (
                    <p className="text-lg text-muted-foreground">
                        Please sign in to continue
                    </p>
                )}
            </div>
        </div>
    )
}