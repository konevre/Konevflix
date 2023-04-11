import { useState } from "react";

const useCTA = () => {
    const [isFocused, setFocus] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

    const handleFocus = () => {
        setFocus(true);
    };

    const handleBlur = () => {
        setFocus(false);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail));
    };

    return { handleFocus, handleBlur, handleEmailChange, isFocused, email, isValidEmail };
};

export default useCTA;
