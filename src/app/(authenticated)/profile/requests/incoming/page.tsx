"use client";
import { useAppContext } from "@/context/appContext";
import { useApi } from "@/hooks/useApi";
import { getIncomingRequest } from "@/services/requests/getIncomingRequest";
import Link from "next/link";

type Props = {};

const IncomingRequestTab = (props: Props) => {
    const { user } = useAppContext();
    const { data, loading } = useApi<any[]>({
        fn: async () => {
            if (user) {
                const { data } = await getIncomingRequest(user?.id);
                return data ? data : [];
            }
            return [];
        },
    });

    if (loading) {
        return <div className="w-full h-full">loading..</div>;
    }

    if (!data) {
        return (
            <div className="w-full h-full">
                Something might have happenned. try again some other time
            </div>
        );
    }


    return (
        <div className="p-4">
            {data.length === 0 && (
                <div className="w-full h-[50vh] flex justify-center items-center">
                    you don't have any incoming requests.
                </div>
            )}
            {data.map((item) => (
                <div className="px-4 py-4 bg-white flex items-center mb-2">
                    <Link href={`./incoming/${item.id}`} className="flex-1">
                        <span className="font-bold">{item.sender_name}</span>{" "}
                        has requested for{" "}
                        <span className="font-bold">{item.book_name}</span>{" "}
                        book.
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default IncomingRequestTab;
