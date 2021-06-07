import React from "react";

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
    return (
        <div className="flex flex-row justify-between p-4">
            <p>Louis-Philippe Turmel</p>
            <div>
                <a>Socials</a>
                <a>Skills</a>
                <a>Experiences</a>
                <a>Projects</a>
            </div>
        </div>
    );
};

export default Navbar;
