import { supabase } from "..";

export const getUserAddresses = async (user_id: string) => {
    return await supabase.from("address").select().eq("user_id", user_id);
};
