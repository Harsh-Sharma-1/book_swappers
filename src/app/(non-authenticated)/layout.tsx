import Navbar from "@/components/shared/navbar/navbar";
import { NonAuthenticatedProvider } from "./_components/provider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <NonAuthenticatedProvider>
            <Navbar />
            {children}
        </NonAuthenticatedProvider>
    );
}
