import React from "react";

import LogoComponent from "../UI/Logo/LogoComponent";
import SignInButtonComponent from "../UI/Buttons/SignInButtonComponent";
import LanguageSelectorComponent from "../UI/Selectors/LanguageSelectorComponent";

const HeaderComponent = () => {
    return (
        <header className="flex w-full basis-1/6 items-center justify-between py-4 sm:py-6">
            <LogoComponent />
            <div className="flex gap-x-2 sm:gap-x-6">
                <LanguageSelectorComponent />
                <SignInButtonComponent size="small" />
            </div>
        </header>
    );
};

export default HeaderComponent;
