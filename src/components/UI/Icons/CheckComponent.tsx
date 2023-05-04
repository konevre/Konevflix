import React from "react";

interface ICheckProps {
    color: "red" | "grey";
}

const CheckComponent = ({ color }: ICheckProps) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={color === "red" ? "#E50914" : "#717171"}
            xmlns="http://www.w3.org/2000/svg"
            className="checkmark-group--icon"
            data-name="Checkmark"
            aria-hidden="true"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                fill={color === "red" ? "#E50914" : "#717171"}
            ></path>
        </svg>
    );
};

export default CheckComponent;
