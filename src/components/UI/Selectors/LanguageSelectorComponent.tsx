import React from "react";

import world from "../../../resources/world.svg";
import caret from "../../../resources/caret.svg";
import CaretComponent from "../Icons/CaretComponent";
import WorldComponent from "../Icons/WorldComponent";

const LanguageSelectorComponent = () => {
    const selectorStyle = "";

    return (
        // <div className="relative flex h-[35px] w-16 items-center bg-black/40 focus-within:rounded focus-within:border focus-within:border-[#5E5E60] focus-within:outline focus-within:ring focus-within:ring-white focus-within:ring-offset-2 sm:w-32">
        //     <img src={world} alt="world" className="absolute left-2 top-[10px]  h-4 w-4" />
        //     <select
        //         name="language"
        //         id="lang-selector"
        //         className="h-full w-full appearance-none rounded border border-[#5E5E60] bg-[#191919]/40 px-7 pl-9 text-white outline-none focus:border-none"
        //     >
        //         <option value="eng">English</option>
        //         <option value="rus">Русский</option>
        //     </select>
        //     <div className="">
        //         <img src={caret} alt="" className="absolute right-2 top-[10px] h-4 w-4" />
        //     </div>
        // </div>
        <div className="relative flex h-12 w-32 items-center bg-white">
            <div className="absolute left-2 top-4 h-4 w-4">
                <WorldComponent color="black" />
            </div>
            <select
                name="language"
                id="lang-selector"
                className="h-full w-full appearance-none rounded border border-[#5E5E60] bg-white px-7 pl-9 text-[#737373]"
            >
                <option value="eng">English</option>
                <option value="rus">Русский</option>
            </select>
            <div className="absolute right-2 top-5 h-4 w-4">
                <CaretComponent color="black" />
                {/* <img src={caret} alt="caret" className="absolute right-2 top-5 h-4 w-4" /> */}
            </div>
        </div>
    );
};

export default LanguageSelectorComponent;
