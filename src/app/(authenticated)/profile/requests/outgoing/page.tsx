"use client";
import { useAppContext } from "@/context/appContext";
import { getOutgoingRequest } from "@/services/requests/getoutgoingRequest";
import React, { useEffect, useState } from "react";

type Props = {};

const OutgoingRequestTab = (props: Props) => {
    const { user } = useAppContext();
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        (async () => {
            if (user) {
                const { data } = await getOutgoingRequest(user?.id);
                data ? setData(data) : setData([]);
            }
        })();
    });
    return (
        <div className="p-4">
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
