import React from "react";

type Props = {
    children?: React.ReactNode;
    bgClick?: () => void;
};

const Popup = ({ children, bgClick }: Props) => {
    return (
        <div
            onClick={(e) => {
                bgClick && bgClick();
            }}
            className="fixed h-[100vh] z-10 left-[0] right-[0] top-[0] bottom-[0] bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
        >
            {children}
        </div>
    );
};

export default Popup;
