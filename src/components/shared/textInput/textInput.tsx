import React from "react";

type Props = {
    placeholder: string;
    onChange: (text: string) => void;
    value?: string;
    isSearch?: boolean;
    required?: boolean;
    isPassword?: boolean;
};

const TextInput = ({
    placeholder,
    onChange,
    value,
    isSearch,
    required,
    isPassword,
}: Props) => {
    return (
        <div className="w-full">
            <input
                className="w-full rounded outline outline-1 outline-[#E6E6E6]
                px-4 py-5 focus:outline-orange-400"
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                type={isPassword ? "password" : "text"}
                value={value}
                required
            />
        </div>
    );
};

export default TextInput;
