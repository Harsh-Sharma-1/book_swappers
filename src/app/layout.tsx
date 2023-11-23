import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/appContext";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Book Swappers",
    description: "Book swapping application for you",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppContextProvider>
                    {children}</AppContextProvider>
            </body>
        </html>
    );
}
