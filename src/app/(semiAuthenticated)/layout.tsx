import { SemiAuthenticatedProvider } from "./_components/provider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SemiAuthenticatedProvider>
            {children}
        </SemiAuthenticatedProvider>
    );
}
