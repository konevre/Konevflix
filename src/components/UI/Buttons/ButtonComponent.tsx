import React from "react";

interface IButtonProps {
    size: "small" | "big";
    title: string;
}

const ButtonComponent = ({ size, title }: IButtonProps) => {
    // TODO - button onclick redirect

    const buttonStyle = size === "small" ? "h-[35px] w-[85px]" : "w-full h-12";

    return (
        <button
            className={`${buttonStyle} flex items-center justify-center rounded bg-primary-red p-3 text-white hover:bg-primary-red-hover`}
        >
            {title}
        </button>
    );
};

export default ButtonComponent;
