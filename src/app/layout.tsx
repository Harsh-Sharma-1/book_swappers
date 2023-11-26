import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/appContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                    <ToastContainer />
                    {children}
                </AppContextProvider>
            </body>
        </html>
    );
}
