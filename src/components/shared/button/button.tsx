import { TailSpin } from "react-loader-spinner";

export const Button = ({
    loading,
    onClick,
    text,
}: {
    loading?: boolean;
    onClick?: Function;
    text: string;
}) => {
    return (
        <button
            onClick={() => {
                onClick && onClick();
            }}
            className="w-full bg-[#FF6C36;] py-4 rounded text-white mt-3 flex justify-center items-center"
        >
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
                text
            )}
        </button>
    );
};
