import React from "react";

import minus from "../../resources/values/minus.svg";

// ACTIVE - #4E4E4E
// NOT ACTIVE - #2D2D2D

interface IAccordionProps {
    index: number;
    title: string;
    paragraphs: string[];
    onAccordion: (index: number) => void;
    isActive: boolean;
}

const AccordionComponent = ({
    index,
    title,
    paragraphs,
    onAccordion,
    isActive,
}: IAccordionProps) => {
    const pars = paragraphs.map((paragraph, i) => {
        return (
            <div key={i} className="text-lg text-white md:text-2xl">
                {paragraph}
            </div>
        );
    });

    const divStyle = isActive ? "bg-[#4E4E4E]" : "bg-[#2D2D2D]";

    // TODO - ACCORDION ANIMATION
    const accordionAnimation = "transition-[height] ease-in-out duration-1000";
    const accordionStyle = isActive ? "max-h-[1000px] p-6 mt-[1px]" : "max-h-0";

    const togglerStyle = isActive ? "rotate-90" : "rotate-0";

    return (
        <div>
            <div
                className={`${divStyle} flex w-full cursor-pointer justify-between p-6 hover:bg-[#4E4E4E]`}
                onClick={() => (isActive ? onAccordion(-1) : onAccordion(index))}
            >
                <div className="text-lg text-white md:text-2xl">{title}</div>

                <img
                    src={minus}
                    alt="toggler"
                    className={`${togglerStyle} transofrm transition-all duration-300 ease-in-out`}
                />
            </div>

            <div
                className={`${accordionStyle} ${accordionAnimation} flex flex-col gap-y-3 overflow-hidden bg-[#2D2D2D]`}
            >
                {pars}
            </div>
        </div>
    );
};

export default AccordionComponent;
