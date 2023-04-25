import React from "react";

import useCTA from "../../hooks/useCTA";

import invalid from "../../resources/hero/invalid.svg";
import chevron from "../../resources/hero/chevron-right.svg";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";

const CTAComponent = () => {
    const { handleFocus, handleBlur, handleEmailChange, isFocused, email, isValidEmail } = useCTA();

    const inputClass = email ? (isValidEmail ? "border-green-500" : "border-red-500") : "";
    const labelStyle =
        isFocused || email ? "bottom-6 -left-3 scale-75" : "bottom-4 left-0 scale-100";
    const containerStyle = isFocused ? "outline outline-white outline-offset-2 rounded" : "";
    const buttonStyle = !isValidEmail && email ? "mt-4 sm:mt-0" : "";

    return (
        <>
            <SubtitleComponent
                isSmall={false}
                subtitle="Ready to watch? Enter your email to create or restart your membership."
            />
            <div className="-mt-3 flex w-full flex-col justify-center gap-x-2 gap-y-5 sm:flex-row">
                <div
                    className={`${containerStyle} relative sm:w-1/3`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                    <label
                        htmlFor="email"
                        className={`${labelStyle} pointer-events-none absolute transform pl-4 pt-2 text-gray-500 transition-all duration-150 ease-in`}
                    >
                        Email address
                    </label>

                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleEmailChange}
                        value={email}
                        minLength={5}
                        maxLength={50}
                        className={`${inputClass} w-full rounded border bg-[#161616B3] px-4 pb-2 pt-6 outline-none`}
                    />
                    {!isValidEmail && email && (
                        <div className="absolute -bottom-7 flex items-center gap-x-2">
                            <img src={invalid} alt="invalid email" />
                            <div className="text-sm text-red-500">Enter valid email address</div>
                        </div>
                    )}
                </div>
                <button
                    className={`${buttonStyle} flex min-w-[200px] items-center justify-center gap-x-2 rounded bg-primary-red p-3 text-2xl text-white hover:bg-primary-red-hover`}
                >
                    Get Started
                    <img src={chevron} alt="chevron" />
                </button>
            </div>
        </>
    );
};

export default CTAComponent;
