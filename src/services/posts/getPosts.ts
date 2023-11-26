import { supabase } from "..";

export const getPosts = async (club_id: number) => {
    return await supabase.from("post").select().eq("club_id", club_id);
};
