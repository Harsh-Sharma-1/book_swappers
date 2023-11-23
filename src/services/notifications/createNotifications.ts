import { supabase } from "..";

export const createNotifications = async ({
    for_user,
    text,
    isIncoming,
    request_id,
}: {
    for_user: string;
    text: string;
    request_id: number;
    isIncoming: boolean;
}) => {
    await supabase.from("notifications").insert({
        for: for_user,
        text,
        request_id,
        isIncoming,
    });
};
