import { createContext, useContext } from "react";

export const ChatContext = createContext({
    chats: {},
    dispatch: () => {},
});

export const useChatContext = () => useContext(ChatContext);
