import { supabase } from "..";

export const getUserBooks = async ({ userId }: { userId: string }) => {
    return await supabase.from("book").select().eq("user", userId);
};
