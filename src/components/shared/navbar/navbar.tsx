"use client";
import Link from "next/link";
import React, { useState } from "react";
import Popup from "../popup/popup";
import AuthForm from "../authForm/authForm";

type Props = {};

type NavItemProps = {
    label: string;
    link?: string;
};

const lists = [
    {
        label: "Home",
        link: "/home",
    },
    {
        label: "Books",
        link: "/books",
    },
    // {
    //     label: "About",
    //     link: "/",
    // },
    // {
    //     label: "Contact us",
    //     link: "/",
    // },
];

const NavItem: React.FC<NavItemProps> = ({ label, link }) => {
    return (
        <Link
            href={link as string}
            className="hover:text-orange-600 transition cursor-pointer"
        >
            {label}
        </Link>
    );
};

const Navbar = (props: Props) => {
    const [popup, setPopup] = useState(false);
    return (
        <>
            <div className="w-full p-5 flex justify-between items-center shadow-sm">
                <div className="text-lg">
                    Book<span className="font-bold">Swappers</span>
                </div>
                <div className="flex gap-4 items-center">
                    {lists.map((item,i) => (
                        <NavItem key={i} {...item} />
                    ))}
                    <button
                        onClick={() => setPopup(true)}
                        className="px-4 py-2 font-medium text-white uppercase bg-orange-600 cursor-pointer"
                    >
                        Join Us
                    </button>
                </div>
            </div>
            {popup && (
                <Popup bgClick={() => setPopup(false)}>
                    <AuthForm />
                </Popup>
            )}
        </>
    );
};

export default Navbar;
