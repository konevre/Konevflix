import React from "react";

interface ITitle {
    title: string;
}

const TitleComponent = ({ title }: ITitle) => {
    return <h2 className="text-center text-3xl font-bold text-white sm:text-5xl">{title}</h2>;
};

export default TitleComponent;
