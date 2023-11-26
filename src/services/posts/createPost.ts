import { CreatePostDTO } from "@/types/dtos/post";
import { supabase } from "..";

export const createPost = async ({
    club_id,
    post_image,
    post_text,
    user_id,
    user_image,
    user_name,
}: CreatePostDTO) => {
    return await supabase
        .from("post")
        .insert({
            club_id,
            post_image,
            post_text,
            user_id,
            user_image,
            user_name,
        })
        .select();
};
