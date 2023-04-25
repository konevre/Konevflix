import { useState } from "react";

import { TInput } from "../types";

// Your password must contain between 4 and 60 characters.
// Please enter a valid email or phone number.

const useInput = (type: TInput) => {
    const [isFocused, setFocus] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");
    const [isValidInput, setIsValidInput] = useState<boolean>(false);

    const handleFocus = () => {
        setFocus(true);
    };

    const handleBlur = () => {
        setFocus(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInput(inputValue);

        if (type === "email") setIsValidInput(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue));
        if (type === "password") setIsValidInput(true);
    };

    return { handleFocus, handleBlur, handleInputChange, isFocused, isValidInput, input };
};

export default useInput;
