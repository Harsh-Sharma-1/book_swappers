"use client";
import { useAppContext } from "@/context/appContext";
import { redirect } from "next/navigation";
import React, { useLayoutEffect } from "react";

type Props = {
    children: React.ReactNode;
};

export const NonAuthenticatedProvider = ({ children }: Props) => {
    const { user } = useAppContext();

    useLayoutEffect(() => {
        if (user !== null) {
            redirect("/home");
        }
    }, [user]);
    return <div>{children}</div>;
};
