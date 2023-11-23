import { supabase } from "..";

export const getUserChat = async (sender_id: string, reciever_id: string) => {
    return supabase
        .from("messages")
        .select()
        .in(`sender_id`, [sender_id, reciever_id])
        .in("reciever_id", [sender_id, reciever_id]);
};
