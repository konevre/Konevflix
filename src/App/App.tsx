import React from "react";

import HeaderComponent from "../components/Header/HeaderComponent";
import HeroComponent from "../components/Hero/HeroComponent";
import ValuePropsComponent from "../components/ValueProps/ValuePropsComponent";
import FooterComponent from "../components/Footer/FooterComponent";

const App = () => {
    return (
        <>
            <HeroComponent />
            <ValuePropsComponent />
            <FooterComponent />
        </>
    );
};

export default App;
