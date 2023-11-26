import { BookCardType } from "@/components/types/book";
import Link from "next/link";
import React from "react";

type Props = {
    books: BookCardType[];
};

const SuggestionList = ({ books }: Props) => {
    return (
        <div className="absolute z-30 left-0 right-0 top-[120%] bottom-[100%] h-52 bg-white shadow-card rounded overflow-y-scroll no-scrollbar">
            <ul className="w-full p-2">
                {books.map((book, i) => (
                    <li
                        className="cursor-pointer p-3 hover:bg-gray-100"
                        key={i}
                    >
                        <Link href={`/book/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SuggestionList;
