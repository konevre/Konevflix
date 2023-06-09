import React from "react";

import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import tv from "../../resources/values/tv.svg";

const TVValueComponent = () => {
    return (
        <div className="min-h-auto relative mx-0 flex w-full flex-col items-center justify-center gap-y-3 px-8 py-[4.5em] lg:flex-row xl:px-[10em]">
            <div className="flex basis-1/2 flex-col gap-y-8">
                <TitleComponent
                    title="Enjoy on your TV"
                    style="text-white text-center lg:text-start"
                />
                <SubtitleComponent
                    style="text-lg sm:text-2xl text-white text-center lg:text-start"
                    subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                />
            </div>
            <div className="flex w-full basis-1/2 justify-center">
                <img src={tv} alt="TV" className="relative -z-10 w-full md:w-full" />
                <video
                    autoPlay
                    playsInline
                    muted
                    loop
                    className="absolute bottom-[22%] -z-10  w-[68%] min-[461px]:bottom-[24%] md:bottom-[25%] lg:bottom-[31%] lg:w-[33%] xl:w-[28%]"
                >
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
                </video>
            </div>
        </div>
    );
};

export default TVValueComponent;
