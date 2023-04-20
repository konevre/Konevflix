import React from "react";

import HeaderComponent from "../components/Header/HeaderComponent";
import HeroComponent from "../components/Hero/HeroComponent";
import ValuePropsComponent from "../components/ValueProps/ValuePropsComponent";

const App = () => {
    return (
        <>
            <HeaderComponent />
            <HeroComponent />
            <div className="w-full">
                <ValuePropsComponent />
            </div>
        </>
    );
};

export default App;
