"use client";
import { useAppContext } from "@/context/appContext";
import { useApi } from "@/hooks/useApi";
import { getOutgoingRequest } from "@/services/requests/getoutgoingRequest";
import React, { useEffect, useState } from "react";

type Props = {};

const OutgoingRequestTab = (props: Props) => {
    const { user } = useAppContext();
    const { data, loading } = useApi<any[]>({
        fn: async () => {
            if (user) {
                const { data } = await getOutgoingRequest(user?.id);
                return data ? data : [];
            }
            return [];
        },
    });

    if (loading) {
        return <div className="w-full h-full">loading..</div>;
    }

    if (!data) {
        return (
            <div className="w-full h-full">
                Something might have happenned. try again some other time
            </div>
        );
    }
    return (
        <div className="p-4">
            {data.length === 0 && (
                <div className="w-full h-[50vh] flex justify-center items-center">
                    you don't have any outgoing requests.
                </div>
            )}
            {data.map((item) => (
                <div className="px-4 py-4 bg-white flex items-center mb-2">
                    <h1 className="flex-1">
                        you requested{" "}
                        <span className="font-bold">{item.sender_name}</span>{" "}
                        for <span className="font-bold">{item.book_name}</span>{" "}
                        book.
                    </h1>
                </div>
            ))}
        </div>
    );
};

export default OutgoingRequestTab;
