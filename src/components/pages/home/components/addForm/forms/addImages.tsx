import { FormLayout } from "@/components/shared/formLayout/formLayout";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

type AddImagesProps = {
    submitForm: (
        e: React.FormEvent<HTMLFormElement>,
        images: any[]
    ) => Promise<void>;
    loading: boolean;
};

export const AddImages = ({ submitForm, loading }: AddImagesProps) => {
    const [images, setImages] = useState<{
        [key: number]: any;
    }>({});

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        i: number
    ) => {
        if (e.target.files !== null) {
            const newImage = e.target.files[0];
            setImages((prev) => ({
                ...prev,
                [i]: newImage,
            }));
        }
    };

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        submitForm(e, Object.values(images));
    };

    return (
        <FormLayout
            heading={{
                normal: "Add Book",
                colored: "Images",
            }}
            subHeading="To show the book condition to the swapper."
        >
            <form className="w-full" action="" onSubmit={handleOnSubmit}>
                <div className="w-full grid grid-cols-2 gap-2 p-4">
                    {Array.from({ length: 4 }).map((item, i) => (
                        <div className="w-full">
                            <input
                                type="file"
                                onChange={(e) => handleOnChange(e, i)}
                                id={`image${i}`}
                                className="hidden"
                            />
                            <label
                                htmlFor={`image${i}`}
                                className="w-full h-[100px] bg-gray-100 flex flex-col items-center justify-center"
                            >
                                {images.hasOwnProperty(i) ? (
                                    <img
                                        className="w-full h-[100px] object-cover object-center"
                                        src={URL.createObjectURL(images[i])}
                                    />
                                ) : (
                                    "+"
                                )}
                            </label>
                        </div>
                    ))}
                </div>

                <button className="w-full bg-[#FF6C36;] py-4 rounded text-white mt-3 flex justify-center items-center">
                    {loading ? (
                        <TailSpin
                            height="30"
                            width="30"
                            color="#fff"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            visible={true}
                        />
                    ) : (
                        "Add Book"
                    )}
                </button>
            </form>
        </FormLayout>
    );
};
