"use client";
import { BookPage } from "@/components/pages/book/bookPage";

type Props = {
    params: { id: string };
};

const Page = ({ params }: Props) => {
    return (
        <div>
            <BookPage bookId={params.id} />
        </div>
    );
};

export default Page;
