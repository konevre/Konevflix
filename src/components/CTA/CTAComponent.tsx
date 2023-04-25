import React from "react";

import invalid from "../../resources/hero/invalid.svg";
import chevron from "../../resources/hero/chevron-right.svg";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import useInput from "../../hooks/useInput";
import InputComponent from "../UI/Inputs/InputComponent";

const CTAComponent = () => {
    return (
        <div className="flex flex-col gap-y-5">
            <SubtitleComponent
                isSmall={false}
                subtitle="Ready to watch? Enter your email to create or restart your membership."
            />
            <div className=" flex w-full flex-col justify-center gap-x-2 gap-y-5 sm:flex-row">
                <InputComponent type="email" style="CTA" />
                <button
                    className={`flex min-w-[200px] items-center justify-center gap-x-2 rounded bg-primary-red p-3 text-2xl text-white hover:bg-primary-red-hover`}
                >
                    Get Started
                    <img src={chevron} alt="chevron" />
                </button>
            </div>
        </div>
    );
};

export default CTAComponent;
