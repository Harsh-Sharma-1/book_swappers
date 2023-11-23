export const UserInterestsForm = ({
    addInterest,
    hasProperty,
    removeInterest,
    submitForm,
}: {
    addInterest: (interest: string, index: number) => void;
    removeInterest: (index: number) => void;
    hasProperty: (index: number) => boolean;
    submitForm: () => Promise<void>;
}) => {
    const categoryList = [
        "adventure",
        "drama",
        "fiction",
        "comedy",
        "history",
        "humor",
        "philosophy",
        "politics",
    ];

    const clickHandler = (index: number, interest: string) => {
        if (hasProperty(index)) {
            removeInterest(index);
        } else {
            addInterest(interest, index);
        }
    };
    return (
        <div className="flex flex-col gap-3">
            <h1>Please select some categories</h1>
            <div className="grid grid-cols-2 gap-2">
                {categoryList.map((category, i) => (
                    <div
                        className={`p-3 cursor-pointer border text-center rounded ${
                            hasProperty(i) &&
                            "border-orange-400 text-orange-400"
                        }`}
                        onClick={() => clickHandler(i, category)}
                        key={i}
                    >
                        {category}
                    </div>
                ))}
            </div>
            <button
                onClick={submitForm}
                className="bg-primary-light py-4 rounded text-white"
            >
                Submit
            </button>
        </div>
    );
};
