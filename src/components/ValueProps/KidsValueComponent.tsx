import React from "react";

import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import kids from "../../resources/values/kids.png";

const KidsValueComponent = () => {
    return (
        <div className="min-h-auto relative mx-0 flex w-full flex-col items-center justify-center gap-y-3 px-8 py-[4.5em] lg:flex-row-reverse xl:px-[10em]">
            <div className="flex basis-1/2 flex-col gap-y-8">
                <TitleComponent title="Create profiles for kids." style="" />
                <SubtitleComponent
                    style="text-lg sm:text-2xl"
                    subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                />
            </div>
            <div className="flex w-full basis-1/2 justify-center overflow-hidden">
                <img src={kids} alt="devices" className="relative -z-10 w-full" />
            </div>
        </div>
    );
};

export default KidsValueComponent;
