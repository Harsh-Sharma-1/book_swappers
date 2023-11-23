import { RequestsTabLayout } from "@/components/pages/profile/tabs/requests/requestsTabLayout";

const RequestsLayout = ({ children }: { children: React.ReactNode }) => {
    return <RequestsTabLayout>{children}</RequestsTabLayout>;
};

export default RequestsLayout;
