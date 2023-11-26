import { useState } from "react";
import TextInput from "../../textInput/textInput";
import { useAuthForm } from "../hooks/useAuthForm";
import { Button } from "../../button/button";

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
                {!submitted && (
                    <div>
                        <h1 className="text-xl font-bold">
                            Join Book{" "}
                            <span className="text-orange-500">Swappers</span>
                        </h1>
                        <p className="text-gray-600 mt-2 text-sm">
                            Choose one of the option to continue
                        </p>
                    </div>
                )}
                <div className="mt-4 w-full">
                    {submitted ? (
                        <div className="text-center">
                            <h1 className="mx-5 font-bold text-2xl">
                                Congratulations
                            </h1>
                            <p className="my-4">
                                Your account has been created. Please check your
                                email for confirmation message.
                            </p>
                            <a
                                className="p-2 bg-primary-light text-white mt-4"
                                href="https://www.gmail.com"
                                target="_blank"
                            >
                                See Email
                            </a>
                        </div>
                    ) : (
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
                            <Button text="Signup" loading={loading} />
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
