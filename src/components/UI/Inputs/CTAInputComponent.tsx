import React from "react";

import useInput from "../../../hooks/useInput";
import invalid from "../../../resources/hero/invalid.svg";

import { TInput } from "../../../types";

interface IInputProps {
    type: TInput;
    color: "black" | "white";
}

const CTAInputComponent = ({ type, color }: IInputProps) => {
    const { handleFocus, handleBlur, handleInputChange, isFocused, isValidInput, input } =
        useInput(type);

    const containerStyle = isFocused ? "outline outline-white outline-offset-2 rounded" : "";
    const inputClass = input ? (isValidInput ? "border-green-500" : "border-red-500") : "";
    const labelStyle =
        isFocused || input ? "bottom-6 -left-3 scale-75" : "bottom-4 left-0 scale-100";
    const colorStyle = color === "black" ? "bg-[#161616B3] text-white" : `text-black`;

    const labelText = type === "email" ? "Email address" : "Add a password";

    return (
        <div>
            <div className={`${containerStyle} relative`} onFocus={handleFocus} onBlur={handleBlur}>
                <label
                    htmlFor={type}
                    className={`${labelStyle} pointer-events-none absolute transform pl-4 pt-2 text-gray-500 transition-all duration-150 ease-in`}
                >
                    {labelText}
                </label>
                <input
                    type="text"
                    id={type}
                    name={type}
                    onChange={handleInputChange}
                    value={input}
                    minLength={5}
                    maxLength={50}
                    className={`${colorStyle} ${inputClass} w-full rounded border px-4 pb-2 pt-6 outline-none`}
                />
            </div>
            {!isValidInput && input && (
                <div className="mt-2 flex items-center gap-x-2">
                    <img src={invalid} alt="invalid email" />
                    <div className="text-sm text-red-500">Enter valid email address</div>
                </div>
            )}
        </div>
    );
};

export default CTAInputComponent;
