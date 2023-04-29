import React from "react";

interface ITitle {
    title: string;
    style: string;
}

const TitleComponent = ({ title, style }: ITitle) => {
    return <h2 className={`${style} text-3xl font-bold text-white sm:text-5xl`}>{title}</h2>;
};

export default TitleComponent;
