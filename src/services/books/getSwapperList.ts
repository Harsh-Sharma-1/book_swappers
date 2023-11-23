import { Swapper } from "@/types/swapper";
import { supabase } from "..";

export const getSwapperList = async (book_data_id: string) => {
    return await supabase
        .from("book")
        .select()
        .eq("book_data_id", book_data_id);
};

export function swapperDataConvertor(data: any): Swapper {
    return {
        book_id: data.id,
        book_data_id: data.book_data_id,
        user: data.user,
        book_images: data.book_images,
        name: data.name,
    };
}
