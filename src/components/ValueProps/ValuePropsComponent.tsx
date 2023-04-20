import React from "react";

import TVValueComponent from "./TVValueComponent";
import MobileValueComponent from "./MobileValueComponent";

const ValuePropsComponent = () => {
    return (
        <>
            <div className="h-2 w-full bg-[#222222]" />
            <TVValueComponent />
            <div className="h-2 w-full bg-[#222222]" />
            <MobileValueComponent />
        </>
    );
};

export default ValuePropsComponent;
