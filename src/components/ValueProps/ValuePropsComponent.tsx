import React from "react";

import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import tv from "../../resources/values/tv.svg";

const ValuePropsComponent = () => {
    return (
        <>
            <div className="h-2 w-full bg-[#222222]" />
            <div className="min-h-auto mx-0 flex flex-col gap-y-3 px-8 py-[4.5em]">
                <TitleComponent title="Enjoy on your TV" />
                <SubtitleComponent
                    isSmall={false}
                    subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                />
                <img src={tv} alt="TV" />
            </div>
            <div className="h-2 w-full bg-[#222222]" />
        </>
    );
};

export default ValuePropsComponent;
