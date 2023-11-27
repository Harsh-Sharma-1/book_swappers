import { supabase } from "..";

export const getPosts = async (club_id: number) => {
    return await supabase.from("post").select().eq("club_id", club_id);
};

export const getPostsByUserId = async (user_id: string) => {
    return await supabase.from("post").select().eq("user_id", user_id);
};
