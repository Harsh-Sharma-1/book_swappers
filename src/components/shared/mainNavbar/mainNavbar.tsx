"use client";
import Link from "next/link";
import {
    AiFillMessage,
    AiOutlineBell,
    AiOutlineMessage,
    AiOutlineTeam,
} from "react-icons/ai";
import NotificationList from "./components/notificationList/notificationList";
import SearchBar from "@/components/shared/searchbar/searchbar";
import { useMainNavbar, useNotification } from "./hooks";
import Popup from "../popup/popup";
import { UserInfoForm } from "../userInfoForm/userInfoForm";
import { useState } from "react";
import { useAppContext } from "@/context/appContext";

type Props = {};

const MainNavbar = (props: Props) => {
    const { navigate, notification, setNotification } = useMainNavbar();
    const { notifications, ring, setRing } = useNotification();
    const { user } = useAppContext();
    const iconItems = [
        {
            icon: AiOutlineMessage,
            activeIcon: AiFillMessage,
            title: "chats",
            link: "/chats",
            onClick: () => {
                navigate("/chats");
            },
        },
        {
            icon: AiOutlineTeam,
            activeIcon: AiOutlineTeam,
            title: "clubs",
            link: "/clubs",
            onClick: () => {
                navigate("/clubs");
            },
        },
    ];

    return (
        <>
            <div className="w-full p-5 flex justify-between items-center shadow">
                <Link href={"/home"} className="text-lg w-[30%]">
                    Book<span className="font-bold">Swappers</span>
                </Link>
                <div className="flex w-full gap-4 items-center">
                    <Link
                        href={"/books"}
                        className="font-medium cursor-pointer"
                    >
                        Find Books
                    </Link>
                    <SearchBar />
                    <div
                        className="flex gap-4 py-3 relative"
                        onMouseLeave={() => {
                            setNotification(false);
                            setRing(false);
                        }}
                    >
                        {iconItems.map((Icon, i) => (
                            <Icon.icon
                                className="cursor-pointer"
                                size={24}
                                onClick={Icon.onClick}
                                key={i}
                            />
                        ))}

                        <AiOutlineBell
                            className={`cursor-pointer ${
                                ring && "ring-animation"
                            } outline-none border-none`}
                            size={24}
                            onMouseEnter={() => {
                                setNotification(true);
                            }}
                        />

                        {notification && (
                            <div className="absolute w-[300px] top-[100%] right-0">
                                <NotificationList data={notifications} />
                            </div>
                        )}
                    </div>
                    <Link
                        href={"/profile"}
                        className="px-4 py-2 font-medium text-white uppercase bg-orange-600 cursor-pointer"
                    >
                        Profile
                    </Link>
                </div>
            </div>
            {user?.user_metadata.added === undefined && (
                <Popup>
                    <UserInfoForm />
                </Popup>
            )}
        </>
    );
};

export default MainNavbar;
