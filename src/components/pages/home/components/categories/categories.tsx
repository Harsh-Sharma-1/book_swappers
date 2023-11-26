import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Categories = (props: Props) => {
    const router = useRouter();
    const categoryList = [
        "adventure",
        "drama",
        "fiction",
        "comedy",
        "history",
        "humor",
        "philosophy",
        "politics",
    ];
    return (
        <div className="w-full py-12 bg-primary-light">
            <div className="w-[80%] m-auto grid grid-cols-2 md:grid-cols-4 gap-3">
                {categoryList.map((category, i) => (
                    <div
                        onClick={() =>
                            router.push(`/books?category=${category}`)
                        }
                        key={i}
                        className="w-full cursor-pointer rounded bg-white py-5 text-center"
                    >
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
