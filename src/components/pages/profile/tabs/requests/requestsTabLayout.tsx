"use client";

import Link from "next/link";

export const RequestsTabLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex gap-5 max-w-4xl m-auto">
            <div className="flex flex-col gap-5 bg-gray-50 p-5 h-full">
                <Link
                    href={"/profile/requests/incoming"}
                    className="p-2 cursor-pointer hover:bg-gray-300"
                >
                    Incoming Requests
                </Link>
                <Link
                    href={"/profile/requests/outgoing"}
                    className="p-2 cursor-pointer hover:bg-gray-300"
                >
                    Outgoing Requests
                </Link>
                <Link
                    href={"/profile/requests/previous"}
                    className="p-2 cursor-pointer hover:bg-gray-300"
                >
                    Previous Requests
                </Link>
            </div>
            <div className="flex-1 bg-gray-50">{children}</div>
        </div>
    );
};
