import React from "react";

interface ISubtitle {
    subtitle: string;
    isSmall: boolean;
}

const SubtitleComponent = ({ subtitle, isSmall }: ISubtitle) => {
    const style = isSmall ? "text-base sm:text-xl" : "text-lg sm:text-2xl";
    return <h2 className={`${style} text-center font-normal text-white`}>{subtitle}</h2>;
};

export default SubtitleComponent;
