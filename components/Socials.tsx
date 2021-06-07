import React from "react";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
    return (
        <div className="absolute top-1/2 flex flex-col justify-evenly transform -translate-y-1/2 z-50">
            <a
                className="popRight"
                href="https://github.com/ghostjester"
                target="_blank"
            >
                <SiGithub className="w-8 h-8 m-2" />
            </a>
            <a
                className="popRight"
                href="https://www.facebook.com/louisphilippe.turmel/"
                target="_blank"
            >
                <SiFacebook className="w-8 h-8 m-2" />
            </a>
            <a
                className="popRight"
                href="https://www.instagram.com/louisphilippeturmel/"
                target="_blank"
            >
                <SiInstagram className="w-8 h-8 m-2" />
            </a>
            <a
                className="popRight"
                href="https://ca.linkedin.com/in/louis-philippe-turmel-5a5463164"
                target="_blank"
            >
                <SiLinkedin className="w-8 h-8 m-2" />
            </a>
        </div>
    );
};

export default Socials;
