"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { useAppContext } from "@/context/appContext";

export const AuthenticatedProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { user } = useAppContext();
    useEffect(() => {
        if (!user) {
            redirect("/");
        }
    }, [user]);
    return (
        <div>
            <NextNProgress />
            {user && children}
        </div>
    );
};
