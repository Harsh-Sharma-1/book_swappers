import { BookCardType } from "@/components/types/book";
import { useApi } from "@/hooks/useApi";
import { bookDataConvertor, getBookById } from "@/services/books/listBooks";
import { FallingLines } from "react-loader-spinner";
import { BookInfoSection } from "./components/bookInfoSection/bookInfoSection";
import { SwapperListSection } from "./components/swapperListSection/swapperListSection";

export const BookPage = ({ bookId }: { bookId: string }) => {
    const { data, loading, error } = useApi<BookCardType>({
        fn: async () => {
            const apiData = await getBookById(bookId);
            return bookDataConvertor(apiData.data[0]);
        },
    });

    if (loading) {
        return (
            <div className="w-full h-[100vh] flex items-center justify-center flex-col">
                <FallingLines color="#ea580c" width="150" visible={true} />
                <p className="font-medium">Please wait till we load books</p>
            </div>
        );
    }

    return (
        <div className="w-[90%] max-w-screen-2xl m-auto">
            <BookInfoSection book={data!} />
            <SwapperListSection book={data!} bookId={bookId} />
        </div>
    );
};
