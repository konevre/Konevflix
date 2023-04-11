import React from "react";

import LogoComponent from "../UI/Logo/LogoComponent";
import SignInComponent from "../UI/Buttons/SignInComponent";
import LanguageSelectorComponent from "../UI/Selectors/LanguageSelectorComponent";

const HeaderComponent = () => {
    return (
        <header className="fixed flex w-full items-center justify-between px-10 py-6">
            <LogoComponent />
            <div className="flex gap-x-6">
                <LanguageSelectorComponent />
                <SignInComponent />
            </div>
        </header>
    );
};

export default HeaderComponent;
