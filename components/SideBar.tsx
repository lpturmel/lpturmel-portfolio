import React from "react";

export interface SideBarProps {}

const SideBar: React.FunctionComponent<SideBarProps> = () => {
    const socialsStyle = "";

    const Logo = (url: string) => {
        return (
            <div className="w-16 h-16 mx-auto rounded-full text-center border border-gray-500 cursor-pointer">
                {" "}
                {url}{" "}
            </div>
        );
    };
    return (
        <div className="h-screen border-l-2 border-gray-400 w-20 absolute right-0 flex flex-col-reverse">
            <a
                href="https://www.instagram.com/louisphilippeturmel/"
                target="_blank"
                className="w-100% my-4"
            >
                <div className="w-16 h-16 mx-auto rounded-full text-center border border-gray-500 cursor-pointer flex align-middle justify-items-center hover:bg-gray-200">
                    <svg
                        className="w-8 m-auto h-8"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                    >
                        <g>
                            <g>
                                <path
                                    d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
			C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
			H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
			V363.272z"
                                />
                            </g>
                        </g>
                        <g>
                            <g>
                                <path
                                    d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
			c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"
                                />
                            </g>
                        </g>
                        <g>
                            <g>
                                <circle cx="396" cy="116" r="20" />
                            </g>
                        </g>
                    </svg>
                </div>
            </a>
            <a
                href="https://www.facebook.com/louisphilippeturmel/"
                target="_blank"
                className="w-100% my-4"
            >
                <div className="w-16 h-16 mx-auto rounded-full text-center border border-gray-500 cursor-pointer flex align-middle justify-items-center hover:bg-gray-200">
                    <svg
                        className="w-8 m-auto h-8 hover:text-white"
                        id="Bold"
                        //enable-background="new 0 0 24 24"
                        height="512"
                        viewBox="0 0 24 24"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
                    </svg>
                </div>
            </a>
            <a></a>
        </div>
    );
};

export default SideBar;
