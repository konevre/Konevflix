import React from "react";

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
            <div key={i} className="text-white">
                {paragraph}
            </div>
        );
    });

    return (
        <>
            <div
                className="flex w-full justify-between bg-[#2D2D2D] p-3 hover:bg-[#4E4E4E]"
                onClick={() => (isActive ? onAccordion(-1) : onAccordion(index))}
            >
                <div className="text-white">{title}</div>
                <div className="">{isActive ? "x" : "+"}</div>
            </div>
            {isActive && <div className="bg-[#2D2D2D] p-3">{pars}</div>}
        </>
    );
};

export default AccordionComponent;
