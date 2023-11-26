import { AddAddressDto } from "@/types/dtos/address";
import { supabase } from "..";

export const addAddress = async ({
    name,
    user_id,
    address,
    city,
    pincode,
    state,
}: AddAddressDto) => {
    return await supabase
        .from("address")
        .insert({
            name,
            user_id,
            address,
            city,
            pincode,
            state,
        })
        .select();
};
