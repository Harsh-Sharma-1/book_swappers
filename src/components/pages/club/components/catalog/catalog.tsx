import { useApi } from "@/hooks/useApi";
import { getPosts } from "@/services/posts/getPosts";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import PostCard from "../postCard/postCard";
import { PostCardType } from "@/components/types/post";

type Props = {
    data: PostCardType[];
};

const ClubCatalog = ({ data }: Props) => {
    return (
        <div className="w-full max-w-2xl bg-white m-auto mt-10">
            {data.map((item: any, i: number) => (
                <PostCard post={item} key={i} />
            ))}
        </div>
    );
};

export default ClubCatalog;
