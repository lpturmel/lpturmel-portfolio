import React, { FunctionComponent } from "react";

export interface SectionProps {
    bg?: string;
    title: string;
    subheader: string;
    id: string;
}

const Section: FunctionComponent<SectionProps> = (props) => {
    return (
        <div
            className={`${props.bg} md:w-1/2 mb-16 w-full min-h-screen mx-auto relative text-left p-4`}
            id={props.id}
        >
            <p className="text-purple-500 font-semibold text-2xl">
                {props.subheader}
            </p>
            <p className="font-extrabold text-5xl">{props.title}</p>
            <div className="text-gray-400 mt-8 text-lg">{props.children}</div>
        </div>
    );
};

export default Section;
