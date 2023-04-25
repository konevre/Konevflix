import React from "react";
import LogoComponent from "../UI/Logo/LogoComponent";
import TitleComponent from "../UI/Titles/TitleComponent";

const LoginComponent = () => {
    return (
        <div className="p-4 xl:px-[10em]">
            <LogoComponent />
            <div className="mt-6 px-1">
                <TitleComponent title="Sign In" isCenter={false} />
            </div>
        </div>
    );
};

export default LoginComponent;
