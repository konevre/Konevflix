import React from "react";

import check from "../../resources/signup/check.svg";
import TitleComponent from "../UI/Titles/TitleComponent";
import SubtitleComponent from "../UI/Titles/SubtitleComponent";
import ButtonComponent from "../UI/Buttons/ButtonComponent";
import PlanformComponent from "./Planform/PlanformComponent";

const SecondStepFormComponent = () => {
    return (
        <div className="mx-auto my-2 flex max-w-[970px] grow flex-col justify-center gap-y-5 px-5 py-5 sm:py-10 sm:text-center">
            <div className="text-start text-xs font-light uppercase">
                Step <span className="font-semibold">2</span> of{" "}
                <span className="font-semibold">3</span>
            </div>
            <TitleComponent
                title="Choose the plan that's right for you."
                style="text-black sm:text-3xl text-start"
            />
            <div className="flex gap-x-3">
                <img src={check} alt="check" />
                <SubtitleComponent
                    subtitle="Watch all you want. Ad-free."
                    style="text-base text-black text-start"
                />
            </div>
            <div className="flex gap-x-3">
                <img src={check} alt="check" />
                <SubtitleComponent
                    subtitle="Recommendations just for you."
                    style="text-base text-black text-start"
                />
            </div>
            <div className="flex gap-x-3">
                <img src={check} alt="check" />
                <SubtitleComponent
                    subtitle="Change or cancel your plan anytime."
                    style="text-base text-black text-start"
                />
            </div>

            {/* PLANFORM */}
            <PlanformComponent />
            <div className="mb-5 text-start text-xs text-[#737373]">
                HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your
                internet service and device capabilities. Not all content is available in all
                resolutions. See our{" "}
                <a href="#" className="text-[#0071eb]">
                    Terms of Use
                </a>{" "}
                for more details.
                <br />
                <br />
                Only people who live with you may use your account. Watch on 4 different devices at
                the same time with Premium, 2 with Standard and 1 with Basic.
            </div>
            <a href="#">
                <ButtonComponent size="big" title="Next" />
            </a>
        </div>
    );
};

export default SecondStepFormComponent;
