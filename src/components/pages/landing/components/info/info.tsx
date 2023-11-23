import React from "react";

type Props = {};

const Info = (props: Props) => {
    return (
        <div className="w-full p-3 text-center">
            <h1 className="w-full font-bold text-4xl">
                Book<span className="text-orange-500">Swappers</span> United
            </h1>
            <p className="w-full mt-3">
                The only swapping platform you ever need
            </p>
        </div>
    );
};

export default Info;
