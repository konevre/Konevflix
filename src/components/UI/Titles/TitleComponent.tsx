import React from "react";

interface ITitle {
    title: string;
}

const TitleComponent = ({ title }: ITitle) => {
    return <h2 className="text-center text-3xl font-bold text-white sm:text-[3em]">{title}</h2>;
};

export default TitleComponent;
