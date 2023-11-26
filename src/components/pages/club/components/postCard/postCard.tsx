import { PostCardType } from "@/components/types/post";
import { createImageUrl } from "@/services";
import moment from "moment";
import React from "react";

type Props = {
    post: PostCardType;
};

const PostCard = ({ post }: Props) => {
    const date = new Date(post.created_at);
    const showDate = moment(date).fromNow();

    return (
        <div className="shadow-cardLight mt-10 rounded overflow-hidden">
            <div className="p-4 border-b flex gap-3 items-center">
                <img
                    src={createImageUrl(post.user_image)}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                />
                <div>
                    <h1 className="font-semibold">{post.user_name}</h1>
                    <p className="text-xs text-gray-500">{showDate}</p>
                </div>
            </div>
            <div className="pb-5 mt-5">
                <div className="px-10">{post.post_text}</div>
                <div className="w-full mt-5">
                    <img src={createImageUrl(post.post_image)} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PostCard;
