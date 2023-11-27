"use client";

import ClubCatalog from "@/components/pages/club/components/catalog/catalog";
import { useAppContext } from "@/context/appContext";
import { getPostsByUserId } from "@/services/posts/getPosts";
import { useEffect, useState } from "react";

type UserClubsTabProps = {};
const UserClubsTab = (props: UserClubsTabProps) => {
    const [data, setData] = useState<any[]>([]);
    const { user } = useAppContext();
    useEffect(() => {
        if (!user) return;
        (async () => {
            const { data } = await getPostsByUserId(user.id);
            setData(data ? data : []);
        })();
    }, []);
    return (
        <div className="w-full max-w-xl m-auto mt-5">
            <ClubCatalog data={data} />
        </div>
    );
};

export default UserClubsTab;
