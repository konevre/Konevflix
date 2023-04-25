import React from "react";

import LogoComponent from "../UI/Logo/LogoComponent";
import TitleComponent from "../UI/Titles/TitleComponent";
import InputComponent from "../UI/Inputs/InputComponent";

const LoginComponent = () => {
    return (
        <div className="p-4 xl:px-[10em]">
            <LogoComponent />
            <div className="mt-6 px-2">
                <TitleComponent title="Sign In" isCenter={false} />
                <InputComponent type="email" style="CTA" />
                <InputComponent type="email" style="CTA" />
            </div>
        </div>
    );
};

export default LoginComponent;
