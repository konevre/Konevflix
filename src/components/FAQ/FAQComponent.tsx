import React, { useState } from "react";
import TitleComponent from "../UI/Titles/TitleComponent";
import AccordionComponent from "./AccordionComponent";

import { faqsObj } from "../../data/faqs";
import CTAComponent from "../CTA/CTAComponent";

const FAQComponent = () => {
    const [activeAccordion, setActiveAccordion] = useState<number>(-1);

    const onAccordion = (index: number) => {
        setActiveAccordion(index);
    };

    const faqs = faqsObj.map((question, index) => {
        const { title, paragraphs } = question;
        const isActive = index === activeAccordion;

        return (
            <AccordionComponent
                key={index}
                // interface props
                title={title}
                paragraphs={paragraphs}
                isActive={isActive}
                onAccordion={onAccordion}
                index={index}
            />
        );
    });

    return (
        <div className="min-h-auto relative mx-0 flex w-full flex-col items-center justify-center gap-y-5 px-8 py-[4.5em] md:gap-y-10 xl:px-[10em]">
            <TitleComponent title="Frequently Asked Questions" style="text-center" />
            <div className="flex w-full flex-col gap-y-2">{faqs}</div>
            <CTAComponent />
        </div>
    );
};

export default FAQComponent;
