import { useAppContext } from "@/context/appContext";
import { supabase } from "@/services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useMainNavbar = () => {
    const [notification, setNotification] = useState(false);
    const router = useRouter();

    const navigate = (link: string) => {
        router.push(link);
    };

    return {
        notification,
        navigate,
        setNotification,
    };
};

export const useNotification = () => {
    const { user } = useAppContext();
    const [ring, setRing] = useState(false);
    const [notifications, setNotifications] = useState<{
        [key: number]: {
            notification: string;
            id: number;
            link: string | null;
        };
    }>([]);

    const createNotification = (item: any) => {
        setNotifications((prev) => ({
            ...prev,
            [item.id]: {
                notification: item.text,
                id: item.id,
                link: item.isIncoming ? "/incoming/" + item.request_id : null,
            },
        }));
    };

    useEffect(() => {
        if (!user) {
            return;
        }

        supabase
            .from("notifications")
            .select()
            .eq("for", user.id)
            .then(({ data }) => {
                data?.map(createNotification);
            });

        const insert_channels = supabase
            .channel("notifications")
            .on(
                "postgres_changes",
                {
                    event: "INSERT",
                    schema: "public",
                    table: "notifications",
                    filter: `for=eq.${user.id}`,
                },
                (payload) => {
                    createNotification(payload.new);
                    setRing(true);
                }
            )
            .subscribe();

        return () => {
            insert_channels.unsubscribe();
        };
    }, []);

    return {
        notifications: Object.values(notifications),
        ring,
        setRing,
    };
};
