"use client";
import SmallBookCard from "@/components/shared/smallBookCard/smallBookCard";
import { useAppContext } from "@/context/appContext";
import { supabase } from "@/services";
import React, { useEffect, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

type Props = {
    params: {
        previous_request_id: string;
    };
};
const PreviousRequests = ({ params }: Props) => {
    const { user } = useAppContext();
    const [loading, setLoading] = useState(true);
    const [senderBook, setSenderBook] = useState<any | null>(null);

    useEffect(() => {
        (async () => {
            const { data } = await supabase
                .from("requests")
                .select()
                .eq("id", params.previous_request_id);
            console.log(data);
            data && setSenderBook(data[0]);
            setLoading(false);
        })();
    }, []);

    if (!user) {
        return <div>not auth</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="p-4">
                <h1 className="font-bold text-center">Request Details</h1>
                <br />
                <hr />
                <br />
                {senderBook.sender_id === user.id ? (
                    <h1 className="flex-1">
                        you requested{" "}
                        <span className="font-bold">
                            {senderBook.sender_name}
                        </span>{" "}
                        for{" "}
                        <span className="font-bold">
                            {senderBook.book_name}
                        </span>{" "}
                        book.
                    </h1>
                ) : (
                    <h1 className="flex-1">
                        <span className="font-bold">
                            {senderBook.sender_name}
                        </span>{" "}
                        has requested for{" "}
                        <span className="font-bold">
                            {senderBook.book_name}
                        </span>{" "}
                        book.
                    </h1>
                )}
                <div className="mt-5 flex justify-center items-center">
                    <h1 className="font-bold">Status : </h1>
                    <div className="flex-1">{senderBook.acceptStatus}ed</div>
                </div>
                {senderBook.acceptStatus === "accept" && (
                    <div className="p-3 bg-white mt-5 flex flex-col gap-2 py-5 items-center justify-center">
                        <div
                            className={`p-4 border border-black ${
                                senderBook.delivery_status === "accepted" &&
                                "bg-gray-200"
                            }`}
                        >
                            Accepted
                        </div>
                        <FaArrowDownLong />
                        <div
                            className={`p-4 border border-black ${
                                senderBook.delivery_status === "picked" &&
                                "bg-gray-200"
                            }`}
                        >
                            Picked
                        </div>
                        <FaArrowDownLong />
                        <div
                            className={`p-4 border border-black ${
                                senderBook.delivery_status === "onway" &&
                                "bg-gray-200"
                            }`}
                        >
                            On Way
                        </div>
                        <FaArrowDownLong />
                        <div
                            className={`p-4 border border-black ${
                                senderBook.delivery_status === "delivered" &&
                                "bg-gray-200"
                            }`}
                        >
                            Delivered
                        </div>
                    </div>
                )}
                <br />
                <hr />
            </div>
        </>
    );
};

export default PreviousRequests;
