import { useState } from "react";

import { TInput } from "../types";
import { validateEmail, validatePassword } from "../utils/validators";

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

        if (type === "email") setIsValidInput(validateEmail(inputValue));
        if (type === "password") setIsValidInput(validatePassword(inputValue));
    };

    return { handleFocus, handleBlur, handleInputChange, isFocused, isValidInput, input };
};

export default useInput;
