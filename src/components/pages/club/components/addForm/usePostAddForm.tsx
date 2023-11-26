import { useAppContext } from "@/context/appContext";
import { supabase } from "@/services";
import { createPost } from "@/services/posts/createPost";
import { useParams } from "next/navigation";
import { v4 as uuid } from "uuid";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export const usePostAddForm = (datasetter: (value: any) => void) => {
    const [text, setText] = useState("");
    const [showform, setShowForm] = useState(false);
    const [image, setImage] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);
    const { id: club_id } = useParams();
    const { user } = useAppContext();

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const image = e.target.files[0];
            setImage(image);
        } else {
            setImage(null);
        }
    };

    const uploadImage = async () => {
        if (!image) {
            return null;
        }
        const { data, error } = await supabase.storage
            .from("book_images")
            .upload(`images/${uuid() + image.name}`, image);
        return data;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!user) {
            return;
        }

        setLoading(true);
        const post_image = await uploadImage();
        const { data } = await createPost({
            club_id: club_id[0],
            post_image: post_image ? post_image.path : null,
            post_text: text,
            user_id: user.id,
            user_image: user?.user_metadata.profile,
            user_name: user?.user_metadata.name,
        });
        if (data) {
            datasetter(data[0]);
        }
        toast("Your Post is added.");
        setLoading(false);
        setShowForm(false);
    };

    return {
        text,
        setText,
        showform,
        setShowForm,
        image,
        setImage,
        loading,
        setLoading,
        handleImageChange,
        handleSubmit,
    };
};
