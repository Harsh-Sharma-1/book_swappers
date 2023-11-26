import React, { useState } from "react";
import { FirstForm } from "./forms/first";
import { SecondForm } from "./forms/second";
import ThirdForm from "./forms/third";

type Props = {
    swapClickHandler: (book: any, address: any) => Promise<void>;
};

type BookState = {
    value: {
        id: string;
        book_name: string;
        book_image: string;
        book_author: string;
    };
    label: string;
};

const ListSectionSwapBookForm = ({ swapClickHandler }: Props) => {
    const [book, setBook] = useState<BookState | null>(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(1);
    const [address, setAddress] = useState<any | null>(null);

    const handleFirstOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setForm(2);
    };

    const handleSecondFormOnSubmit = (address: any) => {
        setAddress(address);
        setForm(3);
    };

    const handleThirdOnSubmit = async () => {
        setLoading(true);
        await swapClickHandler(book?.value, address.id);
        setLoading(false);
    };

    if (form === 1)
        return (
            <FirstForm handleOnSubmit={handleFirstOnSubmit} setBook={setBook} />
        );

    if (form === 2)
        return <SecondForm handleOnSubmit={handleSecondFormOnSubmit} />;

    if (form === 3)
        return (
            <ThirdForm
                book={book}
                address={address}
                handleOnSubmit={handleThirdOnSubmit}
            />
        );
};

export default ListSectionSwapBookForm;
