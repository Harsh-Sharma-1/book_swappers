import { SwapRequestDto } from "@/types/dtos/swap";
import { supabase } from "..";

export const requestSwap = async ({
    book_id,
    book_name,
    book_data_id,
    sender_name,
    reciever_name,
    sender_id,
    reciever_id,
    status,
    offered_book_data,
    offered_book_id,
    sender_address,
}: SwapRequestDto) => {
    return await supabase
        .from("requests")
        .insert({
            book_id,
            book_name,
            book_data_id,
            sender_name,
            reciever_name,
            sender_id,
            reciever_id,
            status,
            acceptStatus: "none",
            offered_book_data,
            offered_book_id,
            sender_address,
        })
        .select();
};
