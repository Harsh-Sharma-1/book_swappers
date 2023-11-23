import { useState } from "react";
import { UserInterestsForm } from "./components/userInterestsForm/userInterestsForm";
import UserProfileForm from "./components/userProfileForm/userProfileForm";
import { DisplayKeys } from "./types";
import { FormLayout } from "../formLayout/formLayout";
import { supabase } from "@/services";
import { v4 as uuid } from "uuid";
import { useAppContext } from "@/context/appContext";

export const UserInfoForm = () => {
    const [display, setDisplay] = useState<DisplayKeys>("profile");
    const displaySetter = (name: DisplayKeys) => setDisplay(name);
    const [imageSrc, setImageSrc] = useState<any>(null);
    const [bio, setBio] = useState<string>("");
    const [interests, setInterests] = useState<{
        [key: number]: string;
    }>({});

    const addInterest = (interest: string, index: number) => {
        setInterests((prev) => {
            return {
                ...prev,
                [index]: interest,
            };
        });
    };

    const removeInterest = (index: number) => {
        setInterests((prev) => {
            const newItem = { ...prev };
            delete newItem[index];
            return newItem;
        });
    };

    const hasProperty = (index: number) => interests.hasOwnProperty(index);

    const submitForm = async () => {
        const imageData = await supabase.storage
            .from("book_images")
            .upload(`images/${uuid() + imageSrc.name}`, imageSrc);

        const { data, error } = await supabase.auth.updateUser({
            data: {
                added: true,
                bio,
                interests,
                profile: imageData.data?.path,
            },
        });

        if (data) {
            await supabase.from("profile").insert({
                user_id: data.user?.id,
                name: data.user?.user_metadata.name,
                bio,
                profile: imageData.data?.path,
            });
        }
    };

    const displayMap = {
        profile: () => (
            <UserProfileForm
                imageSrc={imageSrc}
                setImageSrc={setImageSrc}
                changeForm={() => displaySetter("interests")}
                bio={bio}
                setBio={setBio}
            />
        ),
        interests: () => (
            <UserInterestsForm
                addInterest={addInterest}
                removeInterest={removeInterest}
                hasProperty={hasProperty}
                submitForm={submitForm}
            />
        ),
    };
    return (
        <FormLayout
            heading={{
                normal: "Tell us",
                colored: "about yourself",
            }}
            subHeading="So that we will provide great service to you."
        >
            {displayMap[display]()}{" "}
        </FormLayout>
    );
};
