import { FormLayout } from "@/components/shared/formLayout/formLayout";
import { useAppContext } from "@/context/appContext";
import { supabase } from "@/services";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import Select from "react-select";

type Props = {
    swapClickHandler: (book: any) => Promise<void>;
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
    const [books, setBooks] = useState<BookState[]>([]);
    const { user } = useAppContext();
    const [book, setBook] = useState<BookState | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            const { data } = await supabase
                .from("book")
                .select()
                .eq("user", user?.id);

            const modData = data?.map((item) => {
                return {
                    value: {
                        id: item.id,
                        book_name: item.book_name,
                        book_image: item.book_image,
                        book_author: item.book_author,
                        book_images: item.book_images,
                    },
                    label: item.book_name,
                };
            });
            setBooks(modData!);
        })();
    }, []);

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        await swapClickHandler(book?.value);
        setLoading(false);
    };

    return (
        <FormLayout
            heading={{
                normal: "Swap the",
                colored: "Book",
            }}
            subHeading="Please select one of your book you wanna swap with."
        >
            <form
                className="w-full p-4 cursor-pointer"
                onSubmit={handleOnSubmit}
            >
                <Select
                    options={books}
                    required
                    onChange={(newValue) => setBook(newValue)}
                />
                <button className="w-full bg-[#FF6C36;] py-4 rounded text-white mt-3 flex justify-center items-center">
                    {loading ? (
                        <TailSpin
                            height="30"
                            width="30"
                            color="#fff"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            visible={true}
                        />
                    ) : (
                        "Add Book"
                    )}
                </button>
            </form>
        </FormLayout>
    );
};

export default ListSectionSwapBookForm;
