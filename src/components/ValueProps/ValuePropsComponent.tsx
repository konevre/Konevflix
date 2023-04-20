import React from "react";

import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import tv from "../../resources/values/tv.svg";
import video from "../../resources/values/video.m4v";

const ValuePropsComponent = () => {
    return (
        <>
            <div className="h-2 w-full bg-[#222222]" />
            <div className="min-h-auto relative mx-0 flex w-full flex-col items-center justify-center gap-y-3 px-8 py-[4.5em] md:flex-row">
                <div className="flex basis-1/2 flex-col gap-y-8">
                    <TitleComponent title="Enjoy on your TV" />
                    <SubtitleComponent
                        isSmall={false}
                        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                    />
                </div>
                <div className="flex w-full basis-1/2 justify-center">
                    <img src={tv} alt="TV" className="w-full md:w-full" />
                    <video
                        autoPlay
                        playsInline
                        muted
                        loop
                        className="absolute bottom-[22%] -z-10  w-[68%] min-[461px]:bottom-[24%] md:bottom-[33%] md:w-[35%] lg:bottom-[30%]"
                    >
                        <source src={video} />
                    </video>
                </div>
            </div>
            <div className="h-2 w-full bg-[#222222]" />
        </>
    );
};

export default ValuePropsComponent;
