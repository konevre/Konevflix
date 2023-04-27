import React from "react";

import useInput from "../../../hooks/useInput";
import invalid from "../../../resources/hero/invalid.svg";

import { TInput } from "../../../types";

interface IInputProps {
    type: TInput;
}

const CTAInputComponent = ({ type }: IInputProps) => {
    const { handleFocus, handleBlur, handleInputChange, isFocused, isValidInput, input } =
        useInput(type);

    const containerStyle = isFocused ? "outline outline-white outline-offset-2 rounded" : "";
    const inputClass = input ? (isValidInput ? "border-green-500" : "border-red-500") : "";
    const labelStyle =
        isFocused || input ? "bottom-6 -left-3 scale-75" : "bottom-4 left-0 scale-100";

    return (
        <div className={`${containerStyle} relative`} onFocus={handleFocus} onBlur={handleBlur}>
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
                onChange={handleInputChange}
                value={input}
                minLength={5}
                maxLength={50}
                className={`${inputClass} w-full rounded border bg-[#161616B3] px-4 pb-2 pt-6 text-white outline-none`}
            />
            {!isValidInput && input && (
                <div className="absolute -bottom-7 flex items-center gap-x-2">
                    <img src={invalid} alt="invalid email" />
                    <div className="text-sm text-red-500">Enter valid email address</div>
                </div>
            )}
        </div>
    );
};

export default CTAInputComponent;
