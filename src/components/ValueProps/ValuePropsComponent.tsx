import React from "react";

import TVValueComponent from "./TVValueComponent";
import MobileValueComponent from "./MobileValueComponent";
import CompValueComponent from "./CompValueComponent";

const ValuePropsComponent = () => {
    return (
        <>
            <div className="h-2 w-full bg-[#222222]" />
            <TVValueComponent />
            <div className="h-2 w-full bg-[#222222]" />
            <MobileValueComponent />
            <div className="h-2 w-full bg-[#222222]" />
            <CompValueComponent />
        </>
    );
};

export default ValuePropsComponent;
