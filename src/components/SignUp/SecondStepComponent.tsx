import React from "react";

import checkmark from "../../resources/signup/Checkmark.png";
import check from "../../resources/signup/check.svg";
import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import ButtonComponent from "../UI/Buttons/ButtonComponent";

const SecondStepComponent = () => {
    return (
        <div className="mx-auto my-2 flex max-w-[400px] grow flex-col justify-center gap-y-5 px-8 py-10 sm:py-20 sm:text-center">
            <img src={checkmark} alt="checkmark" className="h-12 w-12 sm:mx-auto" />
            <div className="text-start text-xs font-light uppercase sm:text-center">
                Step <span className="font-semibold">2</span> of{" "}
                <span className="font-semibold">3</span>
            </div>
            <TitleComponent
                title="Choose you plan."
                style="text-black sm:text-3xl sm:text-center text-start"
            />
            <div className="flex gap-x-3">
                <img src={check} alt="check" />
                <SubtitleComponent
                    subtitle="No commitments, cancel anytime."
                    style="text-base text-black text-start"
                />
            </div>

            <div className="flex gap-x-3">
                <img src={check} alt="check" />
                <SubtitleComponent
                    subtitle="Everything on Netflix for one low price."
                    style="text-base text-black text-start"
                />
            </div>
            <div className="mb-7 flex gap-x-3">
                <img src={check} alt="check" />
                <SubtitleComponent
                    subtitle="Unlimited viewing on all devices"
                    style="text-base text-black text-start"
                />
            </div>
            <a href="#">
                <ButtonComponent size="big" title="Next" />
            </a>
        </div>
    );
};

export default SecondStepComponent;
