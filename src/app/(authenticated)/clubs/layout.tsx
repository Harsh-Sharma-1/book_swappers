const ClubsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="w-full bg-primary-light h-[100px] md:h-[200px]"></div>
            <div className="w-[90%] m-auto">{children}</div>
        </div>
    );
};

export default ClubsLayout;
