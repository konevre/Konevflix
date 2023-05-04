import React, { useState } from "react";

import check from "../../../resources/signup/check.svg";
import PlanComponent from "./PlanComponent";
import CheckComponent from "../../UI/Icons/CheckComponent";

type Plans = "Basic" | "Standard" | "Premium";

const planObj: { [key: number]: string } = {
    0: "Basic",
    1: "Standard",
    2: "Premium",
};

const PlanformComponent = () => {
    const [plan, setPlan] = useState<Plans>("Premium");

    const changePlan = (plan: Plans) => {
        setPlan(plan);
    };

    const header = ["Basic", "Standard", "Premium"].map((item, index) => {
        const isAcitve = plan === planObj[index];
        const span = index === 0 ? "sm:col-start-3" : "";
        const color = isAcitve ? "bg-primary-red" : "bg-[#EF7A77]";
        return (
            <div
                onClick={() => changePlan(planObj[index] as Plans)}
                className={`${span} ${color} h-[75px] cursor-pointer items-center justify-center rounded-sm p-3 text-center font-semibold text-white sm:m-auto sm:mb-3 sm:flex sm:h-[90px] sm:w-[90px] lg:h-[120px] lg:w-[120px]`}
            >
                {item}
                {isAcitve && (
                    <div className="absolute top-[60px] h-5 w-5 rotate-45 transform bg-primary-red sm:top-[75px] lg:top-[105px]"></div>
                )}
            </div>
        );
    });

    const checks = new Array(3).fill(0).map((_, index) => {
        const isAcitve = plan === planObj[index];
        const color = isAcitve ? "red" : "grey";
        return (
            <div className="flex items-center justify-center p-2">
                <CheckComponent color={color} />
            </div>
        );
    });

    return (
        <div className="relative mt-10 grid grid-cols-3 gap-x-3 sm:grid-cols-5 sm:gap-y-3">
            {header}
            <div className="col-span-3 mt-5 p-2 text-center text-sm font-light sm:col-span-2 sm:mt-0 sm:text-start sm:text-base">
                Monthly price
            </div>
            <PlanComponent
                plan={plan}
                content={["EUR7.99", "EUR9.99", "EUR11.99"]}
                style="p-2 text-center font-semibold text-[#737373]"
            />
            <div className="col-span-3 h-[1px] w-full bg-[#CCCCCC] sm:col-span-5"></div>

            <div className="col-span-3 p-2 text-center text-sm font-light sm:col-span-2 sm:text-start sm:text-base">
                Video quality
            </div>
            <PlanComponent
                plan={plan}
                content={["Good", "Better", "Best"]}
                style="p-2 text-center font-semibold text-[#737373]"
            />
            <div className="col-span-3 h-[1px] w-full bg-[#CCCCCC] sm:col-span-5"></div>

            <div className="col-span-3 p-2 text-center text-sm font-light  sm:col-span-2 sm:text-start sm:text-base">
                Resolution
            </div>
            <PlanComponent
                plan={plan}
                content={["720p", "1080p", "4K+HDR"]}
                style="p-2 text-center font-semibold text-[#737373]"
            />
            <div className="col-span-3 h-[1px] w-full bg-[#CCCCCC] sm:col-span-5"></div>

            <div className="col-span-3 p-2 text-center text-sm font-light  sm:col-span-2 sm:text-start sm:text-base">
                Watch on your TV, computer, mobile phone and tablet
            </div>

            {checks}
        </div>
    );
};

export default PlanformComponent;
