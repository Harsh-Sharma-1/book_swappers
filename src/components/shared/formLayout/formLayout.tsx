export const FormLayout = ({
    children,
    heading,
    subHeading,
}: {
    children: React.ReactNode;
    heading?: {
        colored: string;
        normal: string;
    };
    subHeading?: string;
}) => {
    return (
        <div
            className="w-full py-12 m-3 max-w-lg bg-white"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="w-[80%] m-auto">
                <div>
                    <h1 className="text-xl font-bold">
                        {heading?.normal}{" "}
                        <span className="text-orange-500">
                            {heading?.colored}
                        </span>
                    </h1>
                    <p className="text-gray-600 mt-2 text-sm">{subHeading}</p>
                </div>
                <hr className="my-4" />
                <div className="mt-4 w-full">{children}</div>
            </div>
        </div>
    );
};
