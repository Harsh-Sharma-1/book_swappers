"use client";

import Catalog from "@/components/shared/catalog/catalog";
import { BookCardType } from "@/components/types/book";
import { useAppContext } from "@/context/appContext";
import { getUserBooks } from "@/services/books/getUserBooks";
import { useEffect, useState } from "react";

type UserBooksTabProps = {};

const UserBooksTab = (props: UserBooksTabProps) => {
    const { user } = useAppContext();
    const [books, setBooks] = useState<BookCardType[]>([]);

    useEffect(() => {
        if (user)
            getUserBooks({ userId: user?.id }).then((data) => {
                const bookData = data.data?.map((item) => {
                    return {
                        title: item.book_name,
                        author: item.book_author,
                        imageLink: item.book_image,
                        id: item.book_data_id,
                        description: "",
                    };
                });
                bookData && setBooks(bookData);
            });
    }, []);
    return (
        <div>
            <Catalog books={books} />
        </div>
    );
};

export default UserBooksTab;
