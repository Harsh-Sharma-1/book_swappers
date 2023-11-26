"use client";
import { useAppContext } from "@/context/appContext";
import React from "react";
import Tabs from "./components/tabs/tabs";
import UserCard from "./components/userCard/userCard";

type Props = {
    children: React.ReactNode;
};

const ProfilePageLayout = ({ children }: Props) => {
    const { user } = useAppContext();
    return (
        <>
            <div className="bg-primary-light w-full h-[200px]"></div>
            <div className="-mt-[150px]">
                <UserCard />
            </div>
            <div className="mt-10 w-[90%] m-auto">
                <Tabs />
                <div className="w-[90%] m-auto">{children}</div>
            </div>
        </>
    );
};

export default ProfilePageLayout;
