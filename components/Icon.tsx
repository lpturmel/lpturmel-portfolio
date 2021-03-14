import React from "react";

export interface IconProps {
    path: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ path }) => {
    return (
        <div>
            <img className="w-20 m-2" src={path} />
        </div>
    );
};

export default Icon;
