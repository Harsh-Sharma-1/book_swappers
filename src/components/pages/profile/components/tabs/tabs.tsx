import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Tabs = (props: Props) => {
    const pathname = usePathname();
    return (
        <div className="my-10">
            <div className="m-auto border border-l-0 border-r-0 py-3 border-t-1 border-b-1 border-[#686868]">
                <div className="w-[100%] m-auto text-sm text-center max-w-3xl flex">
                    <Link
                        href={"/profile/books"}
                        className={`w-full ${
                            pathname.includes("/profile/books") &&
                            "text-orange-400"
                        }`}
                    >
                        Your Books
                    </Link>
                    <Link
                        href={"/profile/requests"}
                        className={`w-full ${
                            pathname.includes("/profile/requests") &&
                            "text-orange-400"
                        }`}
                    >
                        Your Requests
                    </Link>
                    <Link
                        href={"/profile/clubs"}
                        className={`w-full ${
                            pathname.includes("/profile/clubs") &&
                            "text-orange-400"
                        }`}
                    >
                        Your Clubs
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
