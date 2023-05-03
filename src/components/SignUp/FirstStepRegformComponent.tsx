import React from "react";

import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import ButtonComponent from "../UI/Buttons/ButtonComponent";
import CTAInputComponent from "../UI/Inputs/CTAInputComponent";

const FirstStepRegformComponent = () => {
    return (
        <div className="mx-auto my-2 flex max-w-[450px] grow flex-col justify-center gap-y-5 px-8 py-10 sm:py-20 sm:text-center">
            <div className="text-start text-xs font-light uppercase">
                Step <span className="font-semibold">1</span> of{" "}
                <span className="font-semibold">3</span>
            </div>
            <TitleComponent
                title="Create a password to start your membership"
                style="text-black sm:text-3xl text-start"
            />
            <SubtitleComponent
                subtitle="Just a few more steps and you're done!"
                style="text-base text-black text-start"
            />
            <SubtitleComponent
                subtitle="We hate paperwork, too."
                style="text-base text-black text-start"
            />
            <CTAInputComponent type="email" color="white" />
            <CTAInputComponent type="password" color="white" />
            <div className="flex">
                <input type="checkbox" id="offer" className="h-7 w-7" />
                <label htmlFor="offer" className="grow">
                    Please do not email me Netflix special offers.
                </label>
            </div>
            <a href="#">
                <ButtonComponent size="big" title="Next" />
            </a>
        </div>
    );
};

export default FirstStepRegformComponent;
