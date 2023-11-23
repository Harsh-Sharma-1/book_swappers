import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://bqnqqtfbukbgkhwmynnt.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxbnFxdGZidWtiZ2tod215bm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1NjUwMDgsImV4cCI6MjAxNDE0MTAwOH0.Z0MN1m3HFqOrFdLdX1HfocVm60qui7eBsrVpGF3S-2w"
);

export const createImageUrl = (path: string) =>
    "https://bqnqqtfbukbgkhwmynnt.supabase.co/storage/v1/object/public/book_images/" +
    path;
