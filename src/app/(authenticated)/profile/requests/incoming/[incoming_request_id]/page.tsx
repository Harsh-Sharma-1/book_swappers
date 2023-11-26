"use client";
import RequestReviewForm from "@/components/pages/book/components/swapperListSection/components/listSectionSwapBookForm/forms/third";
import AddAddressForm from "@/components/shared/addAddressForm/addAddressForm";
import { FormLayout } from "@/components/shared/formLayout/formLayout";
import Popup from "@/components/shared/popup/popup";
import SmallBookCard from "@/components/shared/smallBookCard/smallBookCard";
import { supabase } from "@/services";
import { createNotifications } from "@/services/notifications/createNotifications";
import { updateAcceptStatus } from "@/services/requests/updateAcceptStatus";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Props = {
    params: {
        incoming_request_id: string;
    };
};

const IncomingRequestPage = ({ params }: Props) => {
    const [loading, setLoading] = useState(true);
    const [senderBook, setSenderBook] = useState<any | null>(null);
    const [form, setForm] = useState(false);
    const [formNumber, setFormNumber] = useState(1);
    const [address, setAddress] = useState<any | null>(null);
    const router = useRouter();

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
        request: any,
        reciever_address?: number
    ) => {
        await updateAcceptStatus(acceptStatus, id, reciever_address);
        await createNotifications({
            for_user: request.sender_id,
            isIncoming: false,
            request_id: request.id,
            text:
                acceptStatus === "accept"
                    ? `${request.reciever_name} has accepted your request for ${request.book_name} book.`
                    : `${request.reciever_name} has rejected your request for ${request.book_name} book.`,
        });
        toast("The Request has been " + acceptStatus + "ed.");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
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
                                imageLink:
                                    senderBook.offered_book_data.book_image,
                                author: senderBook.offered_book_data
                                    .book_author,
                            }}
                        ></SmallBookCard>
                    </div>
                </div>
                <br />
                <hr />
                <div className="w-full flex flex-col justify-center mt-4 items-center gap-2">
                    <button
                        className="px-3 w-full text-lg py-2 bg-primary-light text-white"
                        onClick={() => {
                            setForm(true);
                            setFormNumber(1);
                        }}
                    >
                        Swap
                    </button>
                    <button
                        className="px-3 w-full font-bold py-2 text-red-500"
                        onClick={async () => {
                            await handleButtonClick(
                                "reject",
                                senderBook.id,
                                senderBook
                            );
                            router.push("/profile/requests");
                        }}
                    >
                        reject the request
                    </button>
                </div>
            </div>
            {form && (
                <div className="text-sm">
                    <Popup bgClick={() => setForm(false)}>
                        {formNumber === 1 && (
                            <FormLayout
                                heading={{
                                    normal: "Add your address",
                                    colored: "to swap",
                                }}
                            >
                                <AddAddressForm
                                    onSubmitFunction={(address) => {
                                        setAddress(address);
                                        setFormNumber(2);
                                    }}
                                />
                            </FormLayout>
                        )}

                        {formNumber === 2 && (
                            <RequestReviewForm
                                handleOnSubmit={async () => {
                                    await handleButtonClick(
                                        "accept",
                                        senderBook.id,
                                        senderBook,
                                        address.id
                                    );
                                    setForm(false);
                                    setFormNumber(0);
                                    router.push(
                                        "/profile/requests/previous/" +
                                            senderBook.id
                                    );
                                }}
                                address={address}
                                book={{ value: senderBook.offered_book_data }}
                            />
                        )}
                    </Popup>
                </div>
            )}
        </>
    );
};

export default IncomingRequestPage;
