import React from "react";

import HeroComponent from "../components/Hero/HeroComponent";
import ValuePropsComponent from "../components/ValueProps/ValuePropsComponent";
import FooterComponent from "../components/Footer/FooterComponent";

const LandingPage = () => {
    return (
        <>
            <HeroComponent />
            <ValuePropsComponent />
            <FooterComponent />
        </>
    );
};

export default LandingPage;
