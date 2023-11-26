import { Button } from "@/components/shared/button/button";
import { FormLayout } from "@/components/shared/formLayout/formLayout";
import SmallBookCard from "@/components/shared/smallBookCard/smallBookCard";
import React, { FormEvent, useState } from "react";

type Props = {
    book: any;
    address: any;
    handleOnSubmit: () => Promise<void>;
};

const RequestReviewForm = ({ book, address, handleOnSubmit }: Props) => {
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {
        setLoading(true);
        await handleOnSubmit();
        setLoading(false);
    };
    return (
        <FormLayout
            heading={{
                normal: "Review the details",
                colored: "Swap the Book",
            }}
            subHeading="Please check all details.."
        >
            <p className="font-bold mb-2 text-gray-700">Book:</p>
            <SmallBookCard
                book={{
                    title: book.value.book_name,
                    imageLink: book.value.book_image,
                    author: book.value.book_author,
                }}
            />

            <p className="font-bold mb-2 text-gray-700 mt-3">Address:</p>
            <table className="w-full">
                <tr className="border-b">
                    <th
                        scope="row"
                        className="px-6 bg-gray-50 py-2 font-medium text-gray-900 whitespace-nowrap"
                    >
                        State
                    </th>
                    <td className="px-6 py-2 cursor-pointer font-medium ">
                        {address.state}
                    </td>
                </tr>
                <tr className="border-b">
                    <th
                        scope="row"
                        className="px-6 bg-gray-50 py-2 font-medium text-gray-900 whitespace-nowrap"
                    >
                        City
                    </th>
                    <td className="px-6 py-2 cursor-pointer font-medium ">
                        {address.city}
                    </td>
                </tr>
                <tr className="border-b">
                    <th
                        scope="row"
                        className="px-6 bg-gray-50 py-2 font-medium text-gray-900 whitespace-nowrap"
                    >
                        Pincode
                    </th>
                    <td className="px-6 py-2 cursor-pointer font-medium ">
                        {address.pincode}
                    </td>
                </tr>
                <tr className="border-b">
                    <th
                        scope="row"
                        className="px-6 bg-gray-50 py-2 font-medium text-gray-900 whitespace-nowrap"
                    >
                        Address
                    </th>
                    <td className="px-6 py-2 cursor-pointer font-medium ">
                        {address.address}
                    </td>
                </tr>
            </table>
            <Button
                text="Send Request"
                loading={loading}
                onClick={handleSubmit}
            ></Button>
        </FormLayout>
    );
};

export default RequestReviewForm;
