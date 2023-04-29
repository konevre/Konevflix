import React from "react";

import { footerLinksSmall } from "../../data/footerLinks";
import LanguageSelectorComponent from "../UI/Selectors/LanguageSelectorComponent";

interface IFooterSmall {
    color: "white" | "black";
}

const FooterSmallComponent = ({ color }: IFooterSmall) => {
    const links = footerLinksSmall.map((item, index) => {
        const { link, title } = item;
        return (
            <li key={index}>
                <a href={link} className="text-xs text-[#737373] active:text-primary-red">
                    {title}
                </a>
            </li>
        );
    });

    const footerStyle = color === "black" ? "md:bg-black/75" : "bg-[#F3F3F3]";

    return (
        <footer
            className={`${footerStyle} min-h-auto relative flex w-full flex-col gap-y-8 px-4 py-6 sm:p-8 xl:px-[10em]`}
        >
            <a href="#" className=" text-base text-[#737373] active:text-primary-red">
                Questions? Contact Us.
            </a>
            <ul className="grid grid-cols-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">{links}</ul>
            <LanguageSelectorComponent />
        </footer>
    );
};

export default FooterSmallComponent;
