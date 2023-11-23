import MainNavbar from "@/components/shared/mainNavbar/mainNavbar";
import { AuthenticatedProvider } from "./_components/provider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthenticatedProvider>
            <MainNavbar />
            <div className="mb-10">{children}</div>
        </AuthenticatedProvider>
    );
}
