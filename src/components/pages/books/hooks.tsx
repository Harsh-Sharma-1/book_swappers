import { BookCardType } from "@/components/types/book";
import { bookDataConvertor, listBooks } from "@/services/books/listBooks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useBooksData = () => {
    const [bookData, setBookData] = useState<BookCardType[]>([]);
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    useEffect(() => {
        (async () => {
            const { data: results } = await listBooks(1, category);
            const mainData = results.map((item) => bookDataConvertor(item));
            setBookData(mainData);
        })();
    }, []);

    return { bookData, category };
};
