import React from "react";

import CTAComponent from "../Header/CTA/CTAComponent";

const HeroComponent = () => {
    return (
        <div className="h-full w-full bg-[url(../resources/hero/hero.png)] bg-cover bg-no-repeat px-6">
            <div className="mx-auto flex h-full max-w-[950px] flex-col items-center justify-center gap-y-5 text-white">
                <h1 className="text-center text-3xl font-bold sm:text-[3em]">
                    Unlimited movies, TV shows and more.
                </h1>
                <h2 className="font-normal sm:text-2xl">Watch anywhere. Cancel anytime.</h2>
                <p className="text-center text-lg sm:text-xl">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <CTAComponent />
            </div>
        </div>
    );
};

export default HeroComponent;
