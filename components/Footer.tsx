import React from "react";

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <div className="h-1/5 text-xl bg-bg-gray font-bold text-center flex align-middle">
            <p className="m-auto text-icon-color">
                © Copyright 2021. Louis-Philippe Turmel. All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
