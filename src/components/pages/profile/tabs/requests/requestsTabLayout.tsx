"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const RequestsTabLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);
    const pathname = usePathname();
    const tabs = [
        {
            label: "Incoming Requests",
            href: "/profile/requests/incoming",
            active: pathname.includes("/profile/requests/incoming"),
        },
        {
            label: "Outgoing Requests",
            href: "/profile/requests/outgoing",
            active: pathname.includes("/profile/requests/outgoing"),
        },
        {
            label: "Previous Requests",
            href: "/profile/requests/previous",
            active: pathname.includes("/profile/requests/previous"),
        },
    ];

    return (
        <div className="flex max-w-4xl m-auto bg-white border">
            <div className="p-4 flex md:hidden">
                <RxHamburgerMenu onClick={handleToggle} />
            </div>
            <div
                className={`${
                    !toggle ? "hidden w-full" : "flex"
                } md:flex md:w-fit flex-col min-h-[60vh] border-r`}
            >
                {tabs.map((tab) => (
                    <Link
                        href={tab.href}
                        className={`px-7 py-5 cursor-pointer hover:bg-gray-300 ${
                            tab.active && "bg-gray-50"
                        }`}
                        onClick={handleToggle}
                    >
                        {tab.label}
                    </Link>
                ))}
            </div>
            <div
                className={`${
                    toggle && "hidden md:block"
                } flex-1 bg-gray-50 min-h-[60vh] p-4`}
            >
                {children}
            </div>
        </div>
    );
};
