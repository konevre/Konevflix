import React from "react";

import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import devices from "../../resources/values/device-pile.png";

const CompValueComponent = () => {
    return (
        <div className="min-h-auto relative mx-0 flex w-full flex-col items-center justify-center gap-y-3 px-8 py-[4.5em] lg:flex-row xl:px-[10em]">
            <div className="flex basis-1/2 flex-col gap-y-8">
                <TitleComponent
                    title="Watch everywhere."
                    style="text-white text-center lg:text-start"
                />
                <SubtitleComponent
                    style="text-lg sm:text-2xl text-white text-center lg:text-start"
                    subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
                />
            </div>
            <div className="flex w-full basis-1/2 justify-center overflow-hidden">
                <img src={devices} alt="devices" className="relative w-full md:w-full" />

                <div className="absolute bottom-[30%] -z-10 w-[45%] overflow-hidden min-[400px]:bottom-[35%] min-[500px]:bottom-[40%] md:w-[45%] lg:w-[30%] xl:w-[24%]">
                    <video autoPlay playsInline muted loop className="w-full object-contain">
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default CompValueComponent;
