"use client";
import { useAppContext } from "@/context/appContext";
import { supabase } from "@/services";
import { createNotifications } from "@/services/notifications/createNotifications";
import { getIncomingRequest } from "@/services/requests/getIncomingRequest";
import { updateAcceptStatus } from "@/services/requests/updateAcceptStatus";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const IncomingRequestTab = (props: Props) => {
    const { user } = useAppContext();
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        (async () => {
            if (user) {
                const { data } = await getIncomingRequest(user?.id);
                data ? setData(data) : setData([]);
            }
        })();
    });

    const handleButtonClick = async (
        acceptStatus: "accept" | "reject" | "none",
        id: number,
        request: any
    ) => {
        await updateAcceptStatus(acceptStatus, id);
        await createNotifications({
            for_user: request.sender_id,
            isIncoming: false,
            request_id: request.id,
            text:
                acceptStatus === "accept"
                    ? `${request.reciever_name} has accepted your request for ${request.book_name} book.`
                    : `${request.reciever_name} has rejected your request for ${request.book_name} book.`,
        });
    };

    return (
        <div className="p-4">
            {data.map((item) => (
                <div className="px-4 py-4 bg-white flex items-center mb-2">
                    <Link href={`./incoming/${item.id}`} className="flex-1">
                        <span className="font-bold">{item.sender_name}</span>{" "}
                        has requested for{" "}
                        <span className="font-bold">{item.book_name}</span>{" "}
                        book.
                    </Link>
                    <div className="flex gap-2">
                        <button
                            className="p-1 bg-green-300"
                            onClick={() =>
                                handleButtonClick("accept", item.id, item)
                            }
                        >
                            accept
                        </button>
                        <button
                            className="p-1 bg-red-300"
                            onClick={() =>
                                handleButtonClick("reject", item.id, item)
                            }
                        >
                            reject
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IncomingRequestTab;
