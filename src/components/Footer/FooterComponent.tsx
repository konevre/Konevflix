import React from "react";

import { footerLinks } from "../../data/footerLinks";
import LanguageSelectorComponent from "../UI/Selectors/LanguageSelectorComponent";

const FooterComponent = () => {
    const links = footerLinks.map((item, index) => {
        const { link, title } = item;
        return (
            <li key={index}>
                <a href={link} className="text-sm text-[#B3B3B3] underline active:text-primary-red">
                    {title}
                </a>
            </li>
        );
    });

    return (
        <footer className="min-h-auto e relative mx-0 flex w-full flex-col gap-y-8 px-8 py-7 xl:px-[10em]">
            <a
                href="#"
                className=" text-base font-semibold text-[#B3B3B3] underline active:text-primary-red"
            >
                Questions? Contact Us.
            </a>
            <ul className="grid gap-y-3 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {links}
            </ul>
            <LanguageSelectorComponent />
        </footer>
    );
};

export default FooterComponent;
