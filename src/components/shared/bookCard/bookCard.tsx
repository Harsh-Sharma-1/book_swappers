import { BookCardType } from "@/components/types/book";
import Link from "next/link";
import React from "react";

const BookCard = ({
    description,
    title,
    id,
    imageLink,
    author,
}: BookCardType) => {
    const newTitle = title.length > 30 ? title.slice(0, 30) + "..." : title;
    return (
        <div className="flex p-0 shadow-card items-center cursor-pointer">
            <div className="w-[70%] p-7 bg-gradient-bookCard">
                <img
                    className="w-full max-w-[250px] h-[150px] md:h-[300px] object-cover border border-black"
                    src={imageLink}
                    alt=""
                />
            </div>
            <div className="w-full flex gap-3 flex-col pr-5">
                <h2 className="text-2xl font-bold">{newTitle}</h2>
                <p>by, {author}</p>
                <p className="w-[85%] hidden md:block text-base leading-7">
                    {description}
                </p>
                <Link
                    href={`/book/${id}`}
                    className="w-fit bg-orange-500 text-white font-medium px-5 py-2"
                >
                    See more details
                </Link>
            </div>
        </div>
    );
};

export default BookCard;
