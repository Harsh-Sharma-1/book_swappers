import { Button } from "@/components/shared/button/button";
import { FormLayout } from "@/components/shared/formLayout/formLayout";
import Popup from "@/components/shared/popup/popup";
import { useAppContext } from "@/context/appContext";
import { supabase } from "@/services";
import { createPost } from "@/services/posts/createPost";
import { useParams } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { usePostAddForm } from "./usePostAddForm";

type Props = {
    dataSetter: (value: any) => void;
};

const AddForm = ({ dataSetter }: Props) => {
    const {
        image,
        loading,
        setImage,
        setLoading,
        setShowForm,
        setText,
        showform,
        text,
        handleImageChange,
        handleSubmit,
    } = usePostAddForm(dataSetter);

    return (
        <>
            <div className="max-w-2xl p-4 shadow-cardLight m-auto mt-10">
                <p>Please click below to add a post</p>
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-primary-light p-3 rounded-md text-white mt-4 w-full"
                >
                    Add a post
                </button>
            </div>
            {showform && (
                <Popup bgClick={() => setShowForm(false)}>
                    <FormLayout
                        heading={{
                            normal: "Add post for",
                            colored: "Mystery lovers",
                        }}
                    >
                        <form action="" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="file"
                                    className="hidden"
                                    id="postImage"
                                    onChange={handleImageChange}
                                />
                                <label
                                    htmlFor="postImage"
                                    className="w-full h-[100px] bg-gray-100 flex items-center justify-center"
                                >
                                    {image ? (
                                        <img
                                            className="w-full h-[100px] object-cover"
                                            src={URL.createObjectURL(image)}
                                        />
                                    ) : (
                                        "+"
                                    )}
                                </label>
                            </div>
                            <textarea
                                className="w-full rounded outline outline-1 outline-[#E6E6E6]
                        px-4 py-5 focus:outline-orange-400 resize-none mt-4"
                                name=""
                                id=""
                                value={text}
                                placeholder="Write a short bio..."
                                rows={5}
                                maxLength={200}
                                onChange={(e) => setText(e.target.value)}
                                required
                            ></textarea>
                            <Button loading={loading} text="Add Post"></Button>
                        </form>
                    </FormLayout>
                </Popup>
            )}
        </>
    );
};

export default AddForm;
