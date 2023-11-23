import { useState } from "react";
import TextInput from "../../textInput/textInput";
import { useAuthForm } from "../hooks/useAuthForm";

type Props = {
    changeForm: () => void;
};

const SignupForm = ({ changeForm }: Props) => {
    const { setValue, getValue, errors, signup, loading, submitted } =
        useAuthForm("signup");
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
                            signup();
                        }}
                        action=""
                    >
                        <TextInput
                            placeholder="enter your name"
                            onChange={(text) => setValue("name", text)}
                            value={getValue("name")}
                            required
                        />
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
                            isPassword
                            required
                        />
                        <TextInput
                            placeholder="confirm password"
                            onChange={(text) =>
                                setValue("confirmPassword", text)
                            }
                            value={getValue("confirmPassword")}
                            isPassword
                            required
                        />
                        <button className="bg-primary-light py-4 rounded text-white">
                            Sign Up
                        </button>
                        <p className="text-gray-600">
                            Already have an account?{" "}
                            <span
                                className="text-primary font-medium cursor-pointer"
                                onClick={changeForm}
                            >
                                Login
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
