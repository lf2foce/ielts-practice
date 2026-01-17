import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { AppLayoutWrapper } from "@/components/layout/app-layout-wrapper";

export default async function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    return (
        <AppLayoutWrapper session={session}>
            {children}
        </AppLayoutWrapper>
    );
}
