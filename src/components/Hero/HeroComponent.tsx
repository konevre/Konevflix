import React from "react";

import CTAComponent from "../CTA/CTAComponent";
import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import HeaderComponent from "../Header/HeaderComponent";

const HeroComponent = () => {
    return (
        <div className="flex h-full w-full flex-col bg-[url(../resources/hero/hero.png)] bg-cover bg-no-repeat p-8 pt-0 xl:px-[10em]">
            <HeaderComponent />
            <div className="mx-auto flex max-w-[950px] basis-5/6 flex-col items-center justify-center gap-y-5 text-white">
                <TitleComponent title="Unlimited movies, TV shows and more." style="text-center" />
                <SubtitleComponent
                    style="text-base sm:text-xl text-white"
                    subtitle="Watch anywhere. Cancel anytime."
                />
                <CTAComponent />
            </div>
        </div>
    );
};

export default HeroComponent;
