import { useRouter } from "next/navigation";
import React from "react";

type Props = {
    data: {
        notification: string;
        id: number;
        link: string | null;
    }[];
};

type notification = {
    image?: string;
    text: string;
    link: string | null;
};

export const NotificationItem = ({ image, text, link }: notification) => {
    const router = useRouter();
    return (
        <div
            className="flex cursor-pointer border-y-[1px] border-y-gray-200 bg-gray-100 p-2 items-center flex-row gap-2"
            onClick={() => {
                link && router.push("/profile/requests" + link);
            }}
        >
            <div className="">
                <img className="w-[50px] rounded-full" src={image} alt="" />
            </div>
            <div className="flex-1 text-xs">{text}</div>
        </div>
    );
};

const NotificationList = ({ data }: Props) => {
    return (
        <div className="w-full h-[300px] bg-white shadow-card rounded">
            <div className="w-full rounded-t p-3 font-bold">Notification</div>
            <div>
                {data.map((item, i) => (
                    <NotificationItem
                        text={item.notification}
                        image="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                        key={i}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default NotificationList;
