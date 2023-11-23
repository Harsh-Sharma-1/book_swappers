import { supabase } from "..";

export const getOutgoingRequest = async (userId: string) => {
    return await supabase.from("requests").select().eq("sender_id", userId);
};
