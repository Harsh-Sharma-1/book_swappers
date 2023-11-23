"use client";
import { useAuth } from "@/hooks/useAuth";
import { User } from "@supabase/supabase-js";
import { redirect, usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

import React from "react";

type AppContextType = {
    user: User | null;
};

const AppContext = createContext<AppContextType>({
    user: null,
});

export const useAppContext = () => {
    return useContext(AppContext);
};

type Props = {
    children: React.ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
    const { user, loading } = useAuth();
    const Loading = () => <div>loading...</div>;
    return (
        <AppContext.Provider
            value={{
                user,
            }}
        >
            {loading ? <Loading /> : children}
        </AppContext.Provider>
    );
};
