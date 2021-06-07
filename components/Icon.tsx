import { ReactNode } from "react";
import { SiTypescript } from "react-icons/si";

export interface IconProps {
    icon: ReactNode;
}

const Icon: React.FunctionComponent<IconProps> = ({ icon }) => {
    return <div>{icon}</div>;
};

export default Icon;
