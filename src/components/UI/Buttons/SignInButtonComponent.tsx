import React from "react";

interface IButtonProps {
    size: "small" | "big";
}

const SignInButtonComponent = ({ size }: IButtonProps) => {
    // TODO - button onclick redirect

    const buttonStyle = size === "small" ? "h-[35px] w-[85px]" : "w-full h-12";

    return (
        <button
            className={`${buttonStyle} flex items-center justify-center rounded bg-primary-red p-3 text-white hover:bg-primary-red-hover`}
        >
            Sign In
        </button>
    );
};

export default SignInButtonComponent;
