import { SignInDto } from "./../../types/dtos/auth.d";
import { SignUpDto } from "@/types/dtos/auth";
import { supabase } from "..";

export const createUser = async ({ email, name, password }: SignUpDto) => {
    return await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
            },
        },
    });
};

export const signInUser = async ({ email, password }: SignInDto) => {
    return await supabase.auth.signInWithPassword({
        email,
        password,
    });
};
