import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LogoComponent from "../UI/Logo/LogoComponent";

import FooterSmallComponent from "../Footer/FooterSmallComponent";
import FirstStepComponent from "./FirstStepComponent";
import FirstStepRegformComponent from "./FirstStepRegformComponent";
import SecondStepComponent from "./SecondStepComponent";
import SecondStepFormComponent from "./SecondStepFormComponent";

const SignUpComponent = () => {
    return (
        <div className="min-h-full bg-white">
            <header className="flex items-center justify-between p-3 sm:p-6 sm:px-10">
                <LogoComponent />
                <a href="/login" className="text-sm font-semibold text-black sm:text-lg">
                    Sign In
                </a>
            </header>
            <div className="h-[1px] bg-[#E6E6E6]"></div>
            <Routes>
                <Route path="/" element={<FirstStepComponent />} />
                <Route path="regform" element={<FirstStepRegformComponent />} />
                <Route path="plan" element={<SecondStepComponent />} />
                <Route path="planform" element={<SecondStepFormComponent />} />
            </Routes>
            <div className="h-[1px] bg-[#E6E6E6]"></div>
            <FooterSmallComponent color="white" />
        </div>
    );
};

export default SignUpComponent;
