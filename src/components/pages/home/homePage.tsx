import React, { useState } from "react";
import Header from "./components/header/header";
import Buttons from "./components/buttons/buttons";
import Popup from "@/components/shared/popup/popup";
import AddForm from "./components/addForm/addForm";
import Categories from "./components/categories/categories";
import Catalog from "@/components/shared/catalog/catalog";
import { useApi } from "@/hooks/useApi";
import { BookCardType } from "@/components/types/book";
import { bookDataConvertor, listBooks } from "@/services/books/listBooks";
import { useRouter } from "next/navigation";

type Props = {};

const HomePage = (props: Props) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const router = useRouter();
    const { data, loading, error } = useApi<BookCardType[]>({
        fn: async () => {
            const { data } = await listBooks();
            return data.map(bookDataConvertor);
        },
    });
    const items = [
        {
            title: "Find",
            onclick: () => {
                router.push("/books");
            },
        },
        {
            title: "Add",
            onclick: () => {
                setShowAddForm(true);
            },
        },
        {
            title: "Swap",
            onclick: () => {
                router.push("/profile/requests");
            },
        },
    ];
    return (
        <div className="mt-16">
            <Header />
            <Buttons items={items} />
            <Categories />
            <div className="w-[90%] max-w-screen-2xl m-auto mt-16">
                <h1 className="text-3xl font-bold">Books you may like...</h1>
                <Catalog books={data ? data : []} />
            </div>
            {showAddForm && (
                <Popup
                    bgClick={() => {
                        setShowAddForm(false);
                    }}
                >
                    <AddForm />
                </Popup>
            )}
            {}
        </div>
    );
};

export default HomePage;
