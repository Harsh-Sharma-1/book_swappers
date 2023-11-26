import { FormLayout } from "@/components/shared/formLayout/formLayout";
import Select from "react-select";
import React, { FormEvent, useEffect, useState } from "react";
import { useAppContext } from "@/context/appContext";
import { supabase } from "@/services";
import { Button } from "@/components/shared/button/button";

type BookState = {
    value: {
        id: string;
        book_name: string;
        book_image: string;
        book_author: string;
    };
    label: string;
};

export const FirstForm = ({
    handleOnSubmit,
    setBook,
}: {
    handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
    setBook: (book: any) => void;
}) => {
    const [books, setBooks] = useState<BookState[]>([]);
    const { user } = useAppContext();
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
                <Button text="Next" />
            </form>
        </FormLayout>
    );
};
