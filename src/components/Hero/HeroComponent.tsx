import React from "react";

import CTAComponent from "../CTA/CTAComponent";
import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import HeaderComponent from "../Header/HeaderComponent";

const HeroComponent = () => {
    return (
        <div className="h-full w-full bg-[url(../resources/hero/hero.png)] bg-cover bg-no-repeat px-8 xl:px-[10em]">
            <HeaderComponent />
            <div className="mx-auto flex h-full max-w-[950px] flex-col items-center justify-center gap-y-5 text-white">
                <TitleComponent title="Unlimited movies, TV shows and more." isCenter={true} />
                <SubtitleComponent isSmall={true} subtitle="Watch anywhere. Cancel anytime." />
                <CTAComponent />
            </div>
        </div>
    );
};

export default HeroComponent;
