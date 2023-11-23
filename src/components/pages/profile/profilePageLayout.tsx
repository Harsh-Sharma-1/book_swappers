"use client";
import React, { useEffect } from "react";
import UserCard from "./components/userCard/userCard";
import Tabs from "./components/tabs/tabs";
import { getUserBooks } from "@/services/books/getUserBooks";
import { useAppContext } from "@/context/appContext";

type Props = {
    children: React.ReactNode;
};

const ProfilePageLayout = ({ children }: Props) => {
    const { user } = useAppContext();
    return (
        <div className="mt-10 w-[90%] m-auto">
            <UserCard />
            <Tabs />
            <div className="w-[90%] m-auto">{children}</div>
        </div>
    );
};

export default ProfilePageLayout;
