import React from "react";

type Plans = "Basic" | "Standard" | "Premium";

interface IPlanProps {
    plan: Plans;
    content: string[];
    style?: string;
}

const plans = {
    Basic: 0,
    Standard: 1,
    Premium: 2,
};

const PlanComponent = ({ plan, content, style }: IPlanProps) => {
    return (
        <>
            {content.map((item, index) => {
                const color = plans[plan] === index ? "text-primary-red" : "text-[#737373]";
                return <div className={`${color} ${style}`}>{item}</div>;
            })}
        </>
    );
};

export default PlanComponent;
