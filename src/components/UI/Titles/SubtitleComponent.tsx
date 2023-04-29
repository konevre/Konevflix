import React from "react";

interface ISubtitle {
    subtitle: string;
    style: string;
}

const SubtitleComponent = ({ subtitle, style }: ISubtitle) => {
    return <h2 className={`${style} text-center font-normal text-white`}>{subtitle}</h2>;
};

export default SubtitleComponent;
