import React from "react";

import LogoComponent from "../UI/Logo/LogoComponent";
import TitleComponent from "../UI/Titles/TitleComponent";
import CaptchaComponent from "../UI/Captcha/CaptchaComponent";
import FormComponent from "../Form/FormComponent";
import FooterSmallComponent from "../Footer/FooterSmallComponent";

const LoginComponent = () => {
    return (
        <div className="md:bg-[url(../resources/login/bg.jpg)] md:bg-cover md:bg-no-repeat">
            <div className="p-4 sm:p-8">
                <LogoComponent />
                <div className="mt-6 text-[#B3B3B3] md:mx-auto md:mb-16 md:min-h-[620px] md:w-[28em] md:rounded md:bg-black/75 md:p-16 md:pb-8">
                    <TitleComponent title="Sign In" style="" />
                    <FormComponent />
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
            <div className="mt-10 h-[1px] bg-[#737373] md:hidden"></div>
            <FooterSmallComponent color="black" />
        </div>
    );
};

export default LoginComponent;
