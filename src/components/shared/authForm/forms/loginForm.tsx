import React from "react";
import TextInput from "../../textInput/textInput";
import { useAuthForm } from "../hooks/useAuthForm";
import { DisplayKeys } from "../types";

type Props = {
    changeForm: () => void;
};

const LoginForm = ({ changeForm }: Props) => {
    const { setValue, getValue, getValues, errors, login } =
        useAuthForm("login");
    return (
        <div
            className="w-full py-12 m-3 max-w-lg bg-white"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="w-[80%] m-auto">
                <div>
                    <h1 className="text-xl font-bold">
                        Join Book{" "}
                        <span className="text-orange-500">Swappers</span>
                    </h1>
                    <p className="text-gray-600 mt-2 text-sm">
                        Choose one of the option to continue
                    </p>
                </div>
                <div className="mt-4 w-full">
                    <form
                        className="flex flex-col gap-3"
                        onSubmit={(e) => {
                            e.preventDefault();
                            login();
                        }}
                        action=""
                    >
                        <TextInput
                            placeholder="enter your email"
                            onChange={(text) => setValue("email", text)}
                            value={getValue("email")}
                            required
                        />
                        <TextInput
                            placeholder="enter your password"
                            onChange={(text) => setValue("password", text)}
                            value={getValue("password")}
                            required
                            isPassword
                        />
                        <button className="bg-[#FF6C36;] py-4 rounded text-white">
                            Login
                        </button>
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <span
                                className="text-primary font-medium cursor-pointer"
                                onClick={changeForm}
                            >
                                Signup
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
