import { AddBookDto } from "@/types/dtos/book";
import { supabase } from "..";

export const addBook = async ({
    book_data_id,
    book_images,
    user,
    name,
    book_author,
    book_image,
    book_name,
}: AddBookDto) => {
    return await supabase.from("book").insert({
        book_data_id,
        book_images,
        user,
        name,
        book_author,
        book_image,
        book_name,
    });
};
