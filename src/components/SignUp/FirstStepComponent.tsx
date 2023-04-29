import React from "react";
import LogoComponent from "../UI/Logo/LogoComponent";

import devices from "../../resources/signup/devices.png";
import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import ButtonComponent from "../UI/Buttons/ButtonComponent";
import FooterSmallComponent from "../Footer/FooterSmallComponent";

const FirstStepComponent = () => {
    return (
        <div className="min-h-full bg-white">
            <header className="flex items-center justify-between p-3">
                <LogoComponent />
                <a href="/login" className="text-sm font-semibold text-black">
                    Sign In
                </a>
            </header>
            <div className="h-[1px] bg-[#E6E6E6]"></div>
            <div className="mt-20 flex grow flex-col justify-center gap-y-5 px-8 pb-20 pt-5">
                {/* devices */}
                <img src={devices} alt="devices" />
                {/* steps */}
                <div className="text-xs font-light uppercase">
                    Step <span className="font-semibold">1</span> of{" "}
                    <span className="font-semibold">3</span>
                </div>
                {/* title */}
                <TitleComponent title="Finish setting up your account" style="text-black" />
                {/* subtitle */}
                <SubtitleComponent
                    subtitle="Netflix is personalized for you. Create a password to watch on any device at any time."
                    style="text-base sm:text-xl text-black text-start"
                />
                {/* button next */}
                <a href="#">
                    <ButtonComponent size="big" title="Next" />
                </a>
            </div>
            {/* footer */}
            <FooterSmallComponent color="white" />
        </div>
    );
};

export default FirstStepComponent;
