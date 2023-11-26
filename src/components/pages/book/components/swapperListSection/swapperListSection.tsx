import { FormLayout } from "@/components/shared/formLayout/formLayout";
import Popup from "@/components/shared/popup/popup";
import { BookCardType } from "@/components/types/book";
import { Swapper } from "@/types/swapper";
import Link from "next/link";
import { useState } from "react";
import { useSwapperList } from "./hooks";
import { createImageUrl } from "@/services";
import ListSectionBookImagesPopup from "./components/listSectionBookImagesPopup/listSectionBookImagesPopup";
import ListSectionSwapBookForm from "./components/listSectionSwapBookForm/listSectionSwapBookForm";

interface SwapperListItemProps extends Swapper {
    swapClickHandler: (book: any, sender_address: number) => Promise<void>;
}

export const SwapperListItem = ({
    name,
    user,
    book_images,
    swapClickHandler,
}: SwapperListItemProps) => {
    const [showBookCondition, setShowBookCondition] = useState(false);
    const [showSwapBookForm, setShowSwapBookForm] = useState(false);
    return (
        <>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                    {name}
                </th>
                <td
                    className="px-6 py-4 cursor-pointer font-medium text-blue-600"
                    onClick={() => setShowBookCondition(true)}
                >
                    See Book Condition
                </td>
                <td className="px-6 py-4">
                    <Link
                        href={`/chats/${user}`}
                        className="font-medium text-blue-600"
                    >
                        Chat
                    </Link>
                </td>
                <td
                    className="px-6 py-4 cursor-pointer font-medium text-blue-600"
                    onClick={() => {
                        setShowSwapBookForm(true);
                    }}
                >
                    Ask for swap
                </td>
            </tr>
            {showBookCondition && (
                <Popup bgClick={() => setShowBookCondition(false)}>
                    <ListSectionBookImagesPopup book_images={book_images} />
                </Popup>
            )}

            {showSwapBookForm && (
                <Popup bgClick={() => setShowSwapBookForm(false)}>
                    <ListSectionSwapBookForm
                        swapClickHandler={async (
                            book: any,
                            sender_address: any
                        ) => {
                            await swapClickHandler(book, sender_address);
                            setShowSwapBookForm(false)
                        }}
                    />
                </Popup>
            )}
        </>
    );
};

export const SwapperListSection = ({
    bookId,
    book,
}: {
    bookId: string;
    book: BookCardType;
}) => {
    const { data, error, loading, swapClickHandler } = useSwapperList(
        bookId,
        book
    );

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Swapper name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                See book condition
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Chat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Swap
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((swapper, i) => (
                            <SwapperListItem
                                {...swapper}
                                swapClickHandler={async (
                                    book: any,
                                    sender_address: number
                                ) => {
                                    return await swapClickHandler({
                                        book_id: swapper.book_id,
                                        book_data_id: swapper.book_data_id,
                                        name: swapper.name,
                                        user: swapper.user,
                                        book,
                                        sender_address,
                                    });
                                }}
                                key={i}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
