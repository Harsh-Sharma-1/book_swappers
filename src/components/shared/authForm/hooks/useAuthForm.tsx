import { createUser, signInUser } from "@/services/user/auth";
import { useReducer, useState } from "react";

export const useAuthForm = (action: "signup" | "login") => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<{ [ket: string]: string | null }>({
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
        submitError: null,
    });

    function setValue(key: keyof typeof data, value: string) {
        setData((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    function getValues() {
        return data;
    }

    function getValue(key: keyof typeof data) {
        return data[key];
    }

    async function signup() {
        const { email, name, password } = data;
        setLoading(true);
        const { data: signUpData, error } = await createUser({
            email,
            name,
            password,
        });
        setLoading(false);
        setSubmitted(true);
        if (error) {
            setErrors((prev) => ({
                ...prev,
                submitError: error.message,
            }));
        }
    }

    async function login() {
        const { email, password } = data;
        const { data: signInData, error } = await signInUser({
            email,
            password,
        });

        if (error) {
            setErrors((prev) => ({
                ...prev,
                submitError: error.message,
            }));
        }
    }

    return {
        setValue,
        getValue,
        getValues,
        errors,
        signup,
        login,
        loading,
        submitted,
    };
};
