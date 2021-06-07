import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
export interface ScrollDownProps {}
import { Link } from "react-scroll";

const ScrollDown: React.FunctionComponent<ScrollDownProps> = () => {
    return (
        <Link
            className="w-full"
            to="knowledge"
            spy={true}
            smooth={true}
            duration={500}
        >
            <div className="scrollDown absolute bottom-20 right-0 lg:flex flex-row cursor-pointer hidden">
                <p className="font-semibold text-center m-auto">SCROLL DOWN</p>
                <HiOutlineArrowNarrowRight className="w-12 h-12" />
            </div>
        </Link>
    );
};

export default ScrollDown;
