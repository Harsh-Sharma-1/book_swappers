"use client";
import MainNavbar from "@/components/shared/mainNavbar/mainNavbar";
import Navbar from "@/components/shared/navbar/navbar";
import { useAppContext } from "@/context/appContext";

export const SemiAuthenticatedProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { user } = useAppContext();
    return (
        <div>
            {user ? <MainNavbar /> : <Navbar />}
            <div className="mb-10">{children}</div>
        </div>
    );
};
