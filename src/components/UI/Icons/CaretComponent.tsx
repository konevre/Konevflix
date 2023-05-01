import React from "react";

interface ICaretProps {
    color: "white" | "black";
}

const CaretComponent = ({ color }: ICaretProps) => {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill={color === "white" ? "black" : "white"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.34113 9.7475L2.14463 4.95075C1.64938 4.38638 2.05188 3.5 2.80351 3.5H11.1965C11.3647 3.49986 11.5294 3.5482 11.6709 3.63925C11.8123 3.73029 11.9245 3.86018 11.994 4.01336C12.0636 4.16653 12.0874 4.3365 12.0629 4.50291C12.0383 4.66931 11.9662 4.8251 11.8554 4.95163L7.65888 9.74663C7.57676 9.84061 7.47547 9.91593 7.36183 9.96754C7.24819 10.0192 7.12482 10.0459 7.00001 10.0459C6.8752 10.0459 6.75183 10.0192 6.63819 9.96754C6.52455 9.91593 6.42326 9.84061 6.34113 9.74663V9.7475Z"
                fill={color === "white" ? "black" : "white"}
            />
        </svg>
    );
};

export default CaretComponent;
