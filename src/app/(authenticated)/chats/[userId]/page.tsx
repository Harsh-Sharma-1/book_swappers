"use client";
import { useAppContext } from "@/context/appContext";
import { supabase } from "@/services";
import { getUserChat } from "@/services/chat/getUserChat";
import { useEffect, useRef, useState } from "react";

const Chat = ({
    params,
}: {
    params: {
        userId: string;
    };
}) => {
    const [messages, setMessages] = useState<
        { message: string; isSender: boolean }[]
    >([]);
    const { user } = useAppContext();
    const [message, setMessage] = useState("");
    const [recieverInfo, setRecieverInfo] = useState<any>(null);
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        supabase
            .from("profile")
            .select()
            .eq("user_id", params.userId)
            .then((data) => {
                setRecieverInfo(data.data);
            });
    }, []);

    useEffect(() => {
        if (!user) {
            return;
        }

        (async () => {
            const { data } = await getUserChat(params.userId, user.id);
            const msgs = data
                ?.filter((item) => item.sender_id !== item.reciever_id)
                .map((item) => {
                    return {
                        message: item?.message as string,
                        isSender: item.sender_id === user.id,
                    };
                });
            setMessages(msgs!);
        })();

        const channels = supabase
            .channel("messages")
            .on(
                "postgres_changes",
                {
                    event: "INSERT",
                    schema: "public",
                    table: "messages",
                    filter: `reciever_id=eq.${user?.id}`,
                },
                (payload) => {
                    if (payload.new.sender_id === params.userId) {
                        setMessages((prev: any) => [
                            ...prev,
                            {
                                message: payload.new.message,
                                isSender: false,
                            },
                        ]);
                    }
                }
            )
            .subscribe();
        return () => {
            channels.unsubscribe();
        };
    }, []);

    useEffect(() => {
        if (endRef.current) {
            endRef.current.scrollIntoView({ behavior: "smooth" });
            console.log("running");
        }
    }, [messages]);

    const sendMessage = async () => {
        await supabase.from("messages").insert({
            message,
            sender_id: user?.id,
            reciever_id: params.userId,
            sender_name: user?.user_metadata.name,
            reciever_name: recieverInfo[0].name,
            sender_image: user?.user_metadata.profile,
            reciever_image: recieverInfo[0].profile,
        });

        setMessages((prev: any) => [
            ...prev,
            {
                message,
                isSender: true,
            },
        ]);
    };

    if (!recieverInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col h-full">
            <div className="p-2 bg-gray-100">
                <h1>{recieverInfo[0].name}</h1>
            </div>
            <div className="flex-1 h-full flex flex-col p-2 gap-3 overflow-y-scroll no-scrollbar">
                {messages.map((message, i) => (
                    <div
                        key={i}
                        className={`flex w-full ${
                            message.isSender && "justify-end"
                        }`}
                    >
                        <h1
                            className={`max-w-[60%] bg-wh p-2 ${
                                message.isSender
                                    ? "bg-orange-200"
                                    : "bg-orange-400"
                            }`}
                        >
                            {message.message}
                        </h1>
                    </div>
                ))}
                <div ref={endRef}></div>
            </div>
            <div className="flex">
                <div className="w-full">
                    <input
                        className="w-full outline outline-1 outline-[#E6E6E6]
                px-4 py-3 focus:outline-orange-400 bg-slate-50"
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        placeholder="Chat here..."
                        type="text"
                        value={message}
                    />
                </div>
                <button
                    className="bg-orange-500 px-3 text-white"
                    onClick={sendMessage}
                >
                    send
                </button>
            </div>
        </div>
    );
};

export default Chat;
