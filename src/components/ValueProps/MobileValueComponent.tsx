import React from "react";

import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";

import st from "../../resources/values/st.jpg";
import boxshow from "../../resources/values/boxshot.png";
import downloading from "../../resources/values/download.gif";

const MobileValueComponent = () => {
    return (
        <div className="min-h-auto relative mx-0 flex w-full flex-col items-center justify-center gap-y-3 px-8 py-[4.5em] sm:px-28 lg:flex-row-reverse xl:px-[10em]">
            <div className="flex basis-1/2 flex-col gap-y-8">
                <TitleComponent title="Download your shows to watch offline." />
                <SubtitleComponent
                    isSmall={false}
                    subtitle="Save your favorites easily and always have something to watch."
                />
            </div>
            <div className="flex w-full basis-1/2 justify-center">
                <img src={st} alt="TV" className="relative -z-10 w-full" />
                <div className="absolute bottom-[12%] flex w-2/3 min-w-[15rem] rounded-xl border-2 border-[#222222] bg-black p-2 shadow-md shadow-black md:p-3 lg:w-1/3">
                    <div className="mr-4">
                        <img src={boxshow} alt="" className="h-12 sm:h-16" />
                    </div>
                    <div className="flex grow flex-col items-start justify-center">
                        <div className="text-sm text-white sm:text-base">Stranger Things</div>
                        <div className="text-xs text-blue-700 sm:text-sm">Downloading...</div>
                    </div>
                    <div className="align-self-end flex items-center">
                        <img src={downloading} alt="gif" className="h-12 w-12" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileValueComponent;
