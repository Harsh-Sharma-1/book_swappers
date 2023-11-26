import React from "react";
import { ClubsCard } from "../card/card";
import { clubData } from "@/data/clubData";

type Props = {};

const ClubsCatalog = (props: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 bg-white p-4 rounded">
            {clubData.map((item, i) => (
                <ClubsCard key={i} club={item} />
            ))}
        </div>
    );
};

export default ClubsCatalog;
