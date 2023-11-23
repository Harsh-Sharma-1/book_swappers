import { supabase } from "..";

export const getUsers = async (userId: string) => {
    return await supabase
        .from("messages")
        .select()
        .or(`sender_id.eq.${userId},reciever_id.eq.${userId}`);
};
