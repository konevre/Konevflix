import React, { useState } from "react";
import TitleComponent from "../UI/Titles/TitleComponent";
import AccordionComponent from "./AccordionComponent";

const faqsObj = [
    {
        title: "What is Netflix?",
        paragraphs: [
            "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
        ],
    },
    {
        title: "How much does Netflix cost?",
        paragraphs: [
            "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.",
        ],
    },
    {
        title: "Where can I watch?",
        paragraphs: [
            "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
        ],
    },
];

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
                title={title}
                paragraphs={paragraphs}
                isActive={isActive}
                onAccordion={onAccordion}
                index={index}
            />
        );
    });

    return (
        <div className="min-h-auto relative mx-0 flex w-full flex-col items-center justify-center gap-y-3 px-8 py-[4.5em]">
            <TitleComponent title="Frequently Asked Questions" />
            <div className="flex w-full flex-col gap-y-2">{faqs}</div>
        </div>
    );
};

export default FAQComponent;
