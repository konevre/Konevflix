import React from "react";

import logo from "../../../resources/logo.png";

const LogoComponent = () => {
    return (
        <a href="#">
            <img src={logo} alt="logo" className="h-6 sm:h-[45px]" />
        </a>
    );
};

export default LogoComponent;
