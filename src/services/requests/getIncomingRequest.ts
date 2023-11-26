import { supabase } from "..";

export const getIncomingRequest = async (userId: string) => {
    return await supabase
        .from("requests")
        .select()
        .eq("reciever_id", userId)
        .eq("acceptStatus", "none");
};
