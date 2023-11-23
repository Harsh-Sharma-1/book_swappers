import ChatsPage from "@/components/pages/chats/chatsPage";

export default function ChatsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <ChatsPage>{children}</ChatsPage>;
}
