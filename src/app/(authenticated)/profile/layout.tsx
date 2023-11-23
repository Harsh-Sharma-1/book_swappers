import ProfilePageLayout from "@/components/pages/profile/profilePageLayout";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <ProfilePageLayout>{children}</ProfilePageLayout>;
}
