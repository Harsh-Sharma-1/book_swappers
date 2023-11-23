import React from "react";

type Props = {
    items: {
        title: string;
        onclick: () => void;
    }[];
};

const Buttons = ({ items }: Props) => {
    return (
        <div className="flex gap-4 w-full max-w-2xl m-auto my-10 ">
            {items.map((item, i) => (
                <div
                    className="border-2 border-black 
                hover:border-white hover:bg-orange-400 
                hover:text-white text-center rounded 
                cursor-pointer py-5 text-3xl w-full
                transition"
                    key={i}
                    onClick={() => {
                        item.onclick();
                    }}
                >
                    {item.title}
                </div>
            ))}
        </div>
    );
};

export default Buttons;
