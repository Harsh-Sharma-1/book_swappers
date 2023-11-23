import { BookCardType } from "@/components/types/book";
import React from "react";

type Props = {
    book: Partial<BookCardType>;
    children?: React.ReactNode;
};

const SmallBookCard = ({
    book: { title, imageLink, author, id },
    children,
}: Props) => {
    return (
        <div className="w-full flex gap-2 shadow-sm">
            <div>
                <img
                    className="w-[80px] h-[80px] object-cover object-center"
                    src={imageLink}
                    alt=""
                />
            </div>
            <div className="w-full flex-1 mt-2">
                <h1 className="text-sm font-medium">{title}</h1>
                <p className="text-xs text-gray-500">By, {author}</p>
                {children}
            </div>
        </div>
    );
};

export default SmallBookCard;
