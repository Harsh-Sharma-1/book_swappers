"use client";
import React from "react";
import ClubHeader from "./components/header/header";
import AddForm from "./components/addForm/addForm";
import ClubCatalog from "./components/catalog/catalog";
import { useParams } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import { getPosts } from "@/services/posts/getPosts";
import { PostCardType } from "@/components/types/post";
import { clubData } from "@/data/clubData";

type Props = {};

const clubdata = {
    id: 9,
    name: "Mystery lovers",
    description:
        "a group for mystery lovers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus ipsum nec mi condimentum, ut tempus nisi feugiat. Quisque elementum odio diam, id pulvinar turpis pellentesque at.",
    categories: ["action", "drama"],
    coverImage:
        "https://thebolotiecollective.files.wordpress.com/2023/02/best-mystery-audiobooks-social.jpg",
};

const ClubPage = (props: Props) => {
    const { id: club_id } = useParams();
    const { data, loading, setData } = useApi<PostCardType[]>({
        fn: async () => {
            const { data } = await getPosts(parseInt(club_id[0]));
            return data as PostCardType[];
        },
    });

    const club = clubData.filter(
        (item) => item.id === parseInt(club_id ? club_id[0] : "2")
    )[0];
    return (
        <div className="bg-white rounded-t-xl -mt-28 overflow-hidden pb-10">
            <div>
                <ClubHeader
                    description={club.description}
                    title={club.name}
                    coverImage={club.coverImage}
                />
            </div>
            <AddForm
                dataSetter={(value) => {
                    setData((prev: any) => [value, ...prev]);
                }}
            />
            {data && <ClubCatalog data={data} />}
        </div>
    );
};

export default ClubPage;
