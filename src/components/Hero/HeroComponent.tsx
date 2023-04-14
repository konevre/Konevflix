import React from "react";

import CTAComponent from "../Header/CTA/CTAComponent";
import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";

const HeroComponent = () => {
    return (
        <div className="h-full w-full bg-[url(../resources/hero/hero.png)] bg-cover bg-no-repeat px-6">
            <div className="mx-auto flex h-full max-w-[950px] flex-col items-center justify-center gap-y-5 text-white">
                <TitleComponent title="Unlimited movies, TV shows and more." />
                <SubtitleComponent isSmall={true} subtitle="Watch anywhere. Cancel anytime." />
                <SubtitleComponent
                    isSmall={false}
                    subtitle="Ready to watch? Enter your email to create or restart your membership."
                />
                <CTAComponent />
            </div>
        </div>
    );
};

export default HeroComponent;
