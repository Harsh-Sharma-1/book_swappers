import { useAppContext } from "@/context/appContext";
import { createImageUrl, supabase } from "@/services";
import { getUsers } from "@/services/chat/getUsers";
import { useEffect, useState } from "react";

export const useChats = () => {
    const { user } = useAppContext();
    const [users, setUsers] = useState([]);
    const [chats, setChats] = useState<any | null>(null);

    useEffect(() => {
        const init = async () => {
            if (user) {
                const { data } = await getUsers(user.id);
                const chatData: {
                    [key: string]: {
                        name: string;
                        user_id: string;
                        message: any[];
                        image: string;
                    };
                } = {};

                const addData = (
                    id: string,
                    name: string,
                    item: any,
                    image: string
                ) => {
                    if (chatData.hasOwnProperty(id)) {
                        chatData[id] = {
                            ...chatData[id],
                            message: [...chatData[id].message, item],
                        };
                    } else {
                        chatData[id] = {
                            name: name,
                            user_id: id,
                            message: [item],
                            image: createImageUrl(image),
                        };
                    }
                };

                data?.map((item) => {
                    if (item.sender_id === user.id) {
                        addData(
                            item.reciever_id,
                            item.reciever_name,
                            item,
                            item.reciever_image
                        );
                        return;
                    }

                    if (item.reciever_id === user.id) {
                        addData(
                            item.sender_id,
                            item.sender_name,
                            item,
                            item.sender_image
                        );
                    }
                });
                setChats(chatData);
            }
        };

        init();

        const channels = supabase
            .channel("messages")
            .on(
                "postgres_changes",
                {
                    event: "INSERT",
                    schema: "public",
                    table: "messages",
                    filter: `reciever=eq.${user?.id}`,
                },
                (payload) => {
                    console.log(payload.new);
                }
            )
            .subscribe();
        return () => {
            channels.unsubscribe();
        };
    }, []);

    return {
        chats,
    };
};
