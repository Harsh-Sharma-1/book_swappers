import { toast } from "react-toastify";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import { BookCardType } from "@/components/types/book";
import { useAppContext } from "@/context/appContext";
import { supabase } from "@/services";
import { addBook } from "@/services/books/addBook";

export const useAddForm = (closeForm: () => void) => {
    const { user } = useAppContext();
    const [book, setBook] = useState<BookCardType | null>(null);
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(1);

    const changeForm = async (value: number) => {
        setShowForm(value);
    };

    const submitForm = async (
        e: React.FormEvent<HTMLFormElement>,
        images: any[]
    ) => {
        e.preventDefault();
        setLoading(true);
        const imgData = await uploadImages(images);
        const { data } = await addBook({
            book_data_id: String(book?.id),
            book_images: imgData as string[],
            user: user?.id,
            name: user?.user_metadata.name,
            book_image: book?.imageLink,
            book_name: book?.title,
            book_author: book?.author,
        });
        setData(data);
        setLoading(false);
        toast("Book added");
        closeForm();
    };

    const uploadImages = async (images: any[]) => {
        var results = await Promise.all(
            images.map(async (item: any) => {
                const data = await supabase.storage
                    .from("book_images")
                    .upload(`images/${uuid() + item.name}`, item);
                return data.data?.path;
            })
        );
        return results;
    };

    return {
        user,
        book,
        submitForm,
        data,
        loading,
        setBook,
        changeForm,
        showForm,
    };
};
