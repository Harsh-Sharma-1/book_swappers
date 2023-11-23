import { useAppContext } from "@/context/appContext";
import { createImageUrl } from "@/services";
import React from "react";

type Props = {};

const UserCard = (props: Props) => {
    const { user } = useAppContext();
    const interests: string[] = Object.values(user?.user_metadata.interests);
    console.log(user);
    return (
        <div className="max-w-3xl gap-5 rounded m-auto bg-secondary-light flex flex-col md:flex-row justify-between items-center p-[3%]">
            <div className="w-full md:w-[80%]">
                <img
                    className="w-[250px] h-[250px] object-cover object-center rounded-full outline outline-4 outline-offset-2 outline-orange-300"
                    src={createImageUrl(user?.user_metadata.profile)}
                    alt=""
                />
            </div>
            <div className="w-full">
                <h1 className="text-xl font-bold">
                    {user?.user_metadata.name}
                </h1>
                <p className="text-sm mt-2 leading-6">
                    {user?.user_metadata.bio}
                </p>
                <div className="grid grid-cols-3 gap-2 mt-3">
                    {interests.map((category: string, i: number) => (
                        <div
                            key={i}
                            className="text-center text-sm text-white py-1 bg-orange-300"
                        >
                            {category}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserCard;
