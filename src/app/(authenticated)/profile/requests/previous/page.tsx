"use client";
import { useAppContext } from "@/context/appContext";
import { useApi } from "@/hooks/useApi";
import { getPreviousRequest } from "@/services/requests/getPreviousRequest";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {};

const PreviousRequestTab = (props: Props) => {
    const { user } = useAppContext();
    const { data, loading } = useApi<any[]>({
        fn: async () => {
            if (user) {
                const { data } = await getPreviousRequest(user?.id);
                return data ? data : [];
            }
            return [];
        },
    });

    if (!user) {
        return <div>not auth</div>;
    }

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
                    you don't have any previous requests.
                </div>
            )}
            {data.map((item) => (
                <Link
                    href={"/profile/requests/previous/" + item.id}
                    className="px-4 py-4 h-full bg-white flex flex-col mb-2"
                >
                    {item.sender_id === user.id ? (
                        <h1 className="flex-1">
                            you requested{" "}
                            <span className="font-bold">
                                {item.sender_name}
                            </span>{" "}
                            for{" "}
                            <span className="font-bold">{item.book_name}</span>{" "}
                            book.
                        </h1>
                    ) : (
                        <h1 className="flex-1">
                            <span className="font-bold">
                                {item.sender_name}
                            </span>{" "}
                            has requested for{" "}
                            <span className="font-bold">{item.book_name}</span>{" "}
                            book.
                        </h1>
                    )}

                    <div className="flex items-center gap-2 mt-2">
                        <span
                            className={`rounded-full w-3 h-3 ${
                                item.acceptStatus === "accept"
                                    ? "bg-green-400"
                                    : "bg-red-500"
                            }`}
                        ></span>
                        {item.acceptStatus === "accept"
                            ? "Accepted"
                            : "Rejected"}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PreviousRequestTab;
