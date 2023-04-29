import React, { useEffect } from "react";

import useInput from "../../../hooks/useInput";
import { TInput } from "../../../types";

interface IInputProps {
    type: TInput;
    handler: (type: string) => void;
}

const errors = {
    email: "Please enter a valid email or phone number.",
    password: "Your password must contain between 4 and 60 characters.",
};

const LoginInputComponent = ({ type, handler }: IInputProps) => {
    const { handleFocus, handleBlur, handleInputChange, isFocused, isValidInput, input } =
        useInput(type);

    useEffect(() => {
        if (input && isValidInput) handler(input);
        if (input && !isValidInput) handler("");
    }, [input]);

    const inputClass = input ? (isValidInput ? "" : "-mb-[2px] border-b-2 border-b-[#E87C03]") : "";
    const passwordStyle =
        isFocused || input ? "bottom-7 -left-1 scale-90" : "bottom-4 left-0 scale-100";
    const emailStyle =
        isFocused || input ? "bottom-7 -left-2 scale-90" : "bottom-4 left-0 scale-100";
    const labelStyle = type === "email" ? emailStyle : passwordStyle;

    const labelText = type === "email" ? "Email or phone number" : "Password";

    return (
        <div>
            <div className="relative h-full w-full" onFocus={handleFocus} onBlur={handleBlur}>
                <label
                    htmlFor={type}
                    className={`${labelStyle} pointer-events-none absolute transform pl-5 pt-4 text-sm font-light text-[#8C8C8C] transition-all duration-150 ease-in`}
                >
                    {labelText}
                </label>
                <input
                    id={type}
                    type={type}
                    name={type}
                    onChange={handleInputChange}
                    value={input}
                    minLength={4}
                    maxLength={60}
                    className={`${inputClass} w-full rounded bg-[#333333] px-5 pb-2 pt-5 text-white outline-none focus:bg-[#454545]`}
                />
            </div>
            {!isValidInput && input && (
                <div className="mt-2 text-xs text-[#E87C03]">{errors[type]}</div>
            )}
        </div>
    );
};

export default LoginInputComponent;
