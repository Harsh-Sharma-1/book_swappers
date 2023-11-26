import React from "react";
import { SectionData } from "../../types";

const Section = ({
    title,
    description,
    image,
    link,
    imageSide,
}: SectionData) => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-5 items-center my-10">
            {imageSide === "Left" && (
                <div className="w-full max-w-xl">
                    <img className="w-full" src={image} alt="" />
                </div>
            )}
            <div
                className={`w-full p-4 flex ${
                    imageSide === "Left" ? "justify-start" : "justify-end"
                }`}
            >
                <div className="max-w-xl">
                    <h1 className="text-2xl uppercase font-bold">
                        <span className="text-orange-500">{title.colored}</span>{" "}
                        {title.simple}
                    </h1>
                    <br />
                    <p>{description}</p>
                </div>
            </div>
            {imageSide === "Right" && (
                <div className="w-full max-w-xl">
                    <img className="w-full" src={image} alt="" />
                </div>
            )}
        </div>
    );
};

export default Section;
