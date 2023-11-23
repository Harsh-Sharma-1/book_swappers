"use client";
import SmallBookCard from "@/components/shared/smallBookCard/smallBookCard";
import { supabase } from "@/services";
import { createNotifications } from "@/services/notifications/createNotifications";
import { updateAcceptStatus } from "@/services/requests/updateAcceptStatus";
import React, { useEffect, useState } from "react";

type Props = {
    params: {
        incoming_request_id: string;
    };
};

const IncomingRequestPage = ({ params }: Props) => {
    const [loading, setLoading] = useState(true);
    const [senderBook, setSenderBook] = useState<any | null>(null);
    useEffect(() => {
        (async () => {
            const { data } = await supabase
                .from("requests")
                .select()
                .eq("id", params.incoming_request_id);
            data && setSenderBook(data[0]);
            setLoading(false);
        })();
    }, []);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="font-bold text-center">Request Details</h1>
            <br />
            <hr />
            <p className="text-center mt-4">
                {senderBook.sender_name} has requested for{" "}
                {senderBook.book_name} book.
            </p>
            <div className="mt-5 flex justify-center items-center">
                <h1 className="px-4 font-medium">Offered Book : </h1>
                <div className="bg-white flex-1">
                    <SmallBookCard
                        book={{
                            title: senderBook.offered_book_data.book_name,
                            imageLink: senderBook.offered_book_data.book_image,
                            author: senderBook.offered_book_data.book_author,
                        }}
                    ></SmallBookCard>
                </div>
            </div>
            <br />
            <hr />
            <div className="w-full flex justify-center mt-4 items-center gap-2">
                <button
                    className="px-3 text-lg py-2 bg-green-400 text-white"
                    onClick={() =>
                        handleButtonClick("accept", senderBook.id, senderBook)
                    }
                >
                    accept
                </button>
                <button
                    className="px-3 text-lg py-2 bg-red-400 text-white"
                    onClick={() =>
                        handleButtonClick("reject", senderBook.id, senderBook)
                    }
                >
                    reject
                </button>
            </div>
        </div>
    );
};

export default IncomingRequestPage;
