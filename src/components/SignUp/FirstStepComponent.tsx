import React from "react";

import devices from "../../resources/signup/devices.png";
import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import ButtonComponent from "../UI/Buttons/ButtonComponent";

const FirstStepComponent = () => {
    return (
        <div className="mx-auto my-10 flex max-w-[450px] grow flex-col justify-center gap-y-5 px-8 py-10 sm:my-20 sm:py-20 sm:text-center">
            <img src={devices} alt="devices" className="mx-auto w-[260px]" />
            <div className="text-xs font-light uppercase">
                Step <span className="font-semibold">1</span> of{" "}
                <span className="font-semibold">3</span>
            </div>
            <TitleComponent
                title="Finish setting up your account"
                style="text-black sm:text-3xl "
            />
            <SubtitleComponent
                subtitle="Netflix is personalized for you. Create a password to watch on any device at any time."
                style="text-base text-black text-start sm:text-center"
            />
            <a href="#">
                <ButtonComponent size="big" title="Next" />
            </a>
        </div>
    );
};

export default FirstStepComponent;
