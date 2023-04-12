import React from "react";

import world from "../../../resources/world.svg";
import caret from "../../../resources/caret.svg";

const LanguageSelectorComponent = () => {
    return (
        <div className="relative flex h-[35px] w-14 items-center bg-black/40 focus-within:rounded focus-within:border focus-within:border-[#5E5E60] focus-within:outline focus-within:ring focus-within:ring-white focus-within:ring-offset-2 sm:w-32">
            <img src={world} alt="" className="absolute left-2 top-[10px] -z-10 h-4 w-4" />
            <select
                name="language"
                id="lang-selector"
                className="h-full w-full appearance-none rounded border border-[#5E5E60] bg-[#191919]/40 px-5 pl-9 text-white outline-none focus:border-none"
            >
                <option value="eng">English</option>
                <option value="rus">Русский</option>
            </select>
            <div className="">
                <img src={caret} alt="" className="absolute right-2 top-[10px] -z-10 h-4 w-4" />
            </div>
        </div>
    );
};

export default LanguageSelectorComponent;
