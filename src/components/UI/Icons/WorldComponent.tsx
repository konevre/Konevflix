import React from "react";

interface IWorldProps {
    color: "white" | "black";
}

const WorldComponent = ({ color }: IWorldProps) => {
    // TODO: how to change path ?
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_28_36)">
                <path
                    d="M6.99999 12.8333C10.2217 12.8333 12.8333 10.2218 12.8333 7C12.8333 3.77825 10.2217 1.16667 6.99999 1.16667C3.77824 1.16667 1.16666 3.77825 1.16666 7C1.16666 10.2218 3.77824 12.8333 6.99999 12.8333Z"
                    stroke="white"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M1.16669 7H12.8334"
                    stroke="white"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.00002 12.8333C8.2886 12.8333 9.33335 10.2218 9.33335 7C9.33335 3.77825 8.2886 1.16667 7.00002 1.16667C5.71144 1.16667 4.66669 3.77825 4.66669 7C4.66669 10.2218 5.71144 12.8333 7.00002 12.8333Z"
                    stroke="white"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M2.87531 2.95808C3.41637 3.50058 4.05931 3.93079 4.76717 4.22401C5.47503 4.51723 6.23387 4.66766 7.00006 4.66667V4.66667C7.76624 4.66766 8.52508 4.51723 9.23294 4.22401C9.9408 3.93079 10.5837 3.50058 11.1248 2.95808"
                    stroke="white"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.1248 11.0419C10.5837 10.4994 9.9408 10.0692 9.23294 9.77599C8.52508 9.48277 7.76624 9.33234 7.00006 9.33333C6.23387 9.33234 5.47503 9.48277 4.76717 9.77599C4.05931 10.0692 3.41637 10.4994 2.87531 11.0419"
                    stroke="white"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_28_36">
                    <rect width="20" height="20" fill={color} />
                </clipPath>
            </defs>
        </svg>
    );
};

export default WorldComponent;
