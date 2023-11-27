"use client";
import Link from "next/link";
import { AiOutlineBell } from "react-icons/ai";

import SearchBar from "@/components/shared/searchbar/searchbar";
import { useAppContext } from "@/context/appContext";
import Popup from "../popup/popup";
import { UserInfoForm } from "../userInfoForm/userInfoForm";
import NotificationList from "./components/notificationList/notificationList";
import { iconItems, mobileIcons } from "./constants";
import { useMainNavbar, useNotification } from "./hooks";

type Props = {};

const MainNavbar = (props: Props) => {
    const { navigate, notification, setNotification } = useMainNavbar();
    const { notifications, ring, setRing } = useNotification();
    const { user } = useAppContext();

    return (
        <>
            <div className="w-full p-5 flex justify-between items-center shadow">
                <Link href={"/home"} className="text-xl md:text-lg w-[30%]">
                    Book<span className="font-bold">Swappers</span>
                </Link>
                <Link
                    href={"/profile"}
                    className="block md:hidden px-4 py-2 font-medium text-white uppercase bg-orange-600 cursor-pointer"
                >
                    Profile
                </Link>
                <div className="hidden md:flex w-full gap-4 items-center">
                    <Link
                        href={"/books"}
                        className="font-medium cursor-pointer"
                    >
                        Find Books
                    </Link>
                    <div className="flex-1">
                        <SearchBar />
                    </div>
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
                                onClick={() => {
                                    navigate(Icon.link);
                                }}
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
                            <div className="absolute z-40 w-[300px] top-[100%] right-0">
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
            <div className="fixed md:hidden z-30 bottom-0 w-full h-[60px] px-5 bg-white shadow-inner flex justify-between items-center">
                {mobileIcons.map((Icon, i) => {
                    return (
                        <Link href={Icon.link} key={i}>
                            <Icon.icon className="text-2xl" />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default MainNavbar;
