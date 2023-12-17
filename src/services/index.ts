"use client";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.SUPABASE_APP_URL as string,
    process.env.SUPABASE_APP_CLIENT_TOKEN as string
);

export const createImageUrl = (path: string) =>
    `${process.env.SUPABASE_APP_URL}/storage/v1/object/public/book_images/` +
    path;
