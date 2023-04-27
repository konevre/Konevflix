import React from "react";

import LogoComponent from "../UI/Logo/LogoComponent";
import TitleComponent from "../UI/Titles/TitleComponent";
import LoginInputComponent from "../UI/Inputs/LoginInputComponent";
import SignInButtonComponent from "../UI/Buttons/SignInButtonComponent";
import CaptchaComponent from "../UI/Captcha/CaptchaComponent";
import FooterLoginComponent from "../Footer/FooterLoginComponent";

const LoginComponent = () => {
    return (
        <>
            <div className="p-4 xl:px-[10em]">
                <LogoComponent />
                <div className="mt-6 text-[#B3B3B3]">
                    <TitleComponent title="Sign In" isCenter={false} />
                    <div className="my-7 flex flex-col gap-y-4">
                        <LoginInputComponent type="email" />
                        <LoginInputComponent type="password" />
                    </div>
                    <SignInButtonComponent size="big" />
                    <div className="mt-4 flex items-center">
                        <div className="flex grow items-center">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" className="pl-2 text-sm font-light">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-sm">
                            Need help?
                        </a>
                    </div>
                    <div className="my-4 text-[#737373]">
                        New to Netflix?
                        <a href="" className="pl-2 text-white">
                            Sign up now
                        </a>
                        .
                    </div>
                    <CaptchaComponent />
                </div>
            </div>
            <div className="mt-10 h-[1px] bg-[#737373]"></div>
            <FooterLoginComponent />
        </>
    );
};

export default LoginComponent;
