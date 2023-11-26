import { supabase } from "..";

export const getPreviousRequest = async (userId: string) => {
    return await supabase
        .from("requests")
        .select()
        .or(`reciever_id.eq.${userId},sender_id.eq.${userId}`)
        .neq("acceptStatus", "none");
};
