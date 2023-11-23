"use client";
import { createContext } from "vm";
import { useChats } from "./hooks";
import { ChatContext } from "@/context/chatContext";
import { usePathname, useRouter } from "next/navigation";

type Props = { children: React.ReactNode };

const ChatsPage = ({ children }: Props) => {
    const data: any = [];
    const { chats } = useChats();
    const router = useRouter();
    const pathname = usePathname();

    if (!chats) {
        return "loading";
    }

    return (
        <div className="w-[90%] max-w-5xl m-auto mt-5 flex gap-5">
            <div
                className={`w-full md:w-[30%] h-[80vh] overflow-y-scroll no-scrollbar ${
                    pathname !== "/chats" && "hidden md:block"
                }`}
            >
                {Object.values(chats).map((item: any, i) => {
                    console.log(item?.message);
                    return (
                        <div
                            key={i}
                            className="flex w-full px-5 py-2 bg-gray-50 gap-3 mb-3 cursor-pointer"
                            onClick={() =>
                                router.push(`/chats/${item?.user_id}`)
                            }
                        >
                            <img
                                className="w-[60px] h-[60px] rounded-full object-cover object-top"
                                src={item?.image}
                                alt=""
                            />
                            <div className="text-sm flex flex-col justify-center">
                                <h1 className="font-bold">{item.name}</h1>
                                <p className="text-gray-500">
                                    {item?.message.at(-1).message.slice(0, 50) +
                                        "..."}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ChatContext.Provider
                value={{
                    chats: [],
                    dispatch: () => {},
                }}
            >
                <div
                    className={`h-[80vh] w-full md:w-[70%] border ${
                        pathname === "/chats" && "hidden md:block"
                    }`}
                >
                    {children}
                </div>
            </ChatContext.Provider>
        </div>
    );
};

export default ChatsPage;
