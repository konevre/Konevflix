import React from "react";

import TVValueComponent from "./TVValueComponent";
import MobileValueComponent from "./MobileValueComponent";
import CompValueComponent from "./CompValueComponent";
import KidsValueComponent from "./KidsValueComponent";
import FAQComponent from "../FAQ/FAQComponent";

const ValuePropsComponent = () => {
    return (
        <>
            <div className="h-2 w-full bg-[#222222]" />
            <TVValueComponent />
            <div className="h-2 w-full bg-[#222222]" />
            <MobileValueComponent />
            <div className="h-2 w-full bg-[#222222]" />
            <CompValueComponent />
            <div className="h-2 w-full bg-[#222222]" />
            <KidsValueComponent />
            <div className="h-2 w-full bg-[#222222]" />
            <FAQComponent />
        </>
    );
};

export default ValuePropsComponent;
