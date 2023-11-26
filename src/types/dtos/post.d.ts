export type CreatePostDTO = {
    club_id: string;
    user_id: string;
    user_name: string;
    user_image: string;
    post_text: string;
    post_image: string | null;
};
