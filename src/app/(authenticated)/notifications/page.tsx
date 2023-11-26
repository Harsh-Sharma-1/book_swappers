"use client";

import { NotificationItem } from "@/components/shared/mainNavbar/components/notificationList/notificationList";
import { useNotification } from "@/components/shared/mainNavbar/hooks";
import React from "react";

type Props = {};

const Notifications = (props: Props) => {
    const { notifications, loading } = useNotification();

    if (loading) {
        return <div>Loading ...</div>;
    }
    return (
        <div>
            {notifications.map((item, i) => (
                <NotificationItem
                    text={item.notification}
                    image="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                    key={i}
                    link={item.link}
                />
            ))}
        </div>
    );
};

export default Notifications;
