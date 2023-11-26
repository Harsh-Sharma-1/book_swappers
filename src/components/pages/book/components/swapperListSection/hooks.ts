import { toast } from "react-toastify";
import { BookCardType } from "@/components/types/book";
import { useAppContext } from "@/context/appContext";
import { useApi } from "@/hooks/useApi";
import {
    getSwapperList,
    swapperDataConvertor,
} from "@/services/books/getSwapperList";
import { createNotifications } from "@/services/notifications/createNotifications";
import { requestSwap } from "@/services/requests/requestSwap";
import { Swapper } from "@/types/swapper";

export const useSwapperList = (bookId: string, bookData: BookCardType) => {
    const { data, error, loading } = useApi<Swapper[]>({
        fn: async () => {
            const { data } = await getSwapperList(bookId);
            if (data) {
                return data?.map(swapperDataConvertor);
            }
            return [];
        },
    });

    const { user: senderUser } = useAppContext();

    const swapClickHandler = async ({
        book_data_id,
        name,
        user,
        book,
        book_id,
        sender_address,
    }: {
        book_id: string;
        book_data_id: string;
        name: string;
        user: string;
        book: any;
        sender_address: number;
    }) => {
        const { data, error } = await requestSwap({
            book_id,
            book_name: bookData.title,
            book_data_id,
            sender_name: senderUser?.user_metadata.name,
            reciever_name: name,
            sender_id: senderUser?.id!,
            reciever_id: user,
            status: false,
            offered_book_id: book.id,
            offered_book_data: book,
            sender_address,
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (data && data.length > 0) {
            await createNotifications({
                for_user: user,
                text: `${data[0].sender_name} has requested for your ${data[0].book_name} book.`,
                isIncoming: true,
                request_id: data[0].id,
            });
        }
        toast("Request has been submitted");
    };

    return {
        data,
        error,
        loading,
        swapClickHandler,
    };
};
