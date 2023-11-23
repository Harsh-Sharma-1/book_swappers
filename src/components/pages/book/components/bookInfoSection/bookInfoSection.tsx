import { BookCardType } from "@/components/types/book";
import Link from "next/link";

export const BookInfoSection = ({ book }: { book: BookCardType }) => {
    return (
        <div className="mt-[50px] md:mt-[60px] flex gap-20">
            <div className="w-full flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-6">{book.title}</h1>
                <p className="leading-8">
                    {book.description} {book.description} {book.description}
                </p>
                <button className="w-fit bg-orange-500 text-white font-medium px-5 py-2 mt-5">
                    Get this book
                </button>
            </div>
            <div className="w-[40%] bg-gradient-bookPage p-5">
                <img
                    className="w-full max-h-[350px] border border-black object-cover object-top"
                    src={book.imageLink}
                    alt=""
                />
            </div>
        </div>
    );
};
