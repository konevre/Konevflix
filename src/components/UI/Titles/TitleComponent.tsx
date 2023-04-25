import React from "react";

interface ITitle {
    title: string;
    isCenter: boolean;
}

const TitleComponent = ({ title, isCenter }: ITitle) => {
    const titleStyle = isCenter && "text-center";
    return <h2 className={`${titleStyle} text-3xl font-bold text-white sm:text-5xl`}>{title}</h2>;
};

export default TitleComponent;
