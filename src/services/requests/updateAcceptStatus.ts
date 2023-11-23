import { supabase } from "..";

export const updateAcceptStatus = async (
    acceptStatus: "accept" | "reject" | "none",
    request_id: number
) => {
    await supabase
        .from("requests")
        .update({ acceptStatus })
        .eq("id", request_id);
};
