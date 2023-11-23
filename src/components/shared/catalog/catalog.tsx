import BookCard from "@/components/shared/bookCard/bookCard";
import { BookCardType } from "@/components/types/book";
import React from "react";

type Props = {
    books: BookCardType[];
};

const Catalog = ({ books }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-8">
            {books.map((item, i) => (
                <BookCard {...item} key={i} />
            ))}
        </div>
    );
};

export default Catalog;
