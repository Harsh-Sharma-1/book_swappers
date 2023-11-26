import { FormLayout } from "@/components/shared/formLayout/formLayout";
import { createImageUrl } from "@/services";
import React from "react";

type Props = {
    book_images: any[];
};

const ListSectionBookImagesPopup = ({ book_images }: Props) => {
    return (
        <FormLayout
            heading={{
                normal: "Check the",
                colored: "Book Condition",
            }}
            subHeading="Click on any image to see the large view"
        >
            <div className="w-full grid grid-cols-2 gap-2 p-4 cursor-pointer">
                {book_images.map((book_image, i) => (
                    <div
                        key={i}
                        className="w-full h-[100px] bg-gray-100 flex flex-col items-center justify-center"
                    >
                        <a href={createImageUrl(book_image)} target="_blank">
                            <img
                                className="w-full h-[100px] object-cover object-center"
                                src={createImageUrl(book_image)}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </FormLayout>
    );
};

export default ListSectionBookImagesPopup;
