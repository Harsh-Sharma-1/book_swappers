import React from "react";

type Props = {
    title: string;
    coverImage: string;
    description: string;
};

const ClubHeader = ({ title, coverImage, description }: Props) => {
    return (
        <div className="w-full">
            <div className="w-full relative">
                <img
                    className="w-full h-[150px] md:h-[200px] object-cover object-center"
                    src={coverImage}
                    alt=""
                />
                <div className="w-full absolute inset-0 bg-orange-500/40"></div>
            </div>
            <div className="text-center p-4 mt-5 max-w-2xl m-auto border-b-2 pb-10">
                <h1 className="w-full text-black text-2xl font-bold bg-white mb-5">
                    {title}
                </h1>
                <p className="leading-8 text-sm text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default ClubHeader;
