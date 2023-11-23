import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <div className="w-full text-center">
            <h1 className="text-5xl font-semibold">Hey Harsh...</h1>
            <p className="mt-6 text-4xl text-[#B4B4B4]">
                What would you like to do?
            </p>
        </div>
    );
};

export default Header;
