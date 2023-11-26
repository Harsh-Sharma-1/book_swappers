import { supabase } from "..";

export const updateAcceptStatus = async (
    acceptStatus: "accept" | "reject" | "none",
    request_id: number,
    reciever_address?: number
) => {
    if (reciever_address) {
        await supabase
            .from("requests")
            .update({ acceptStatus, reciever_address })
            .eq("id", request_id);
    } else {
        await supabase
            .from("requests")
            .update({ acceptStatus })
            .eq("id", request_id);
    }
};
