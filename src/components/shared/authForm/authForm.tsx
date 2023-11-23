import React, { useState } from "react";
import LoginForm from "./forms/loginForm";
import SignupForm from "./forms/signupForm";
import { DisplayKeys } from "./types";

type Props = {};

const AuthForm = (props: Props) => {
    const [display, setDisplay] = useState<DisplayKeys>("signup");
    const displaySetter = (name: DisplayKeys) => setDisplay(name);

    const displayMap = {
        signup: () => <SignupForm changeForm={() => displaySetter("login")} />,
        login: () => <LoginForm changeForm={() => displaySetter("signup")} />,
    };
    return displayMap[display]();
};

export default AuthForm;
