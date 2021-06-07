import Head from "next/head";
import {
    SiCplusplus,
    SiNextDotJs,
    SiPowershell,
    SiPython,
    SiReact,
    SiTypescript,
} from "react-icons/si";
import Icon from "../components/Icon";
import SideBar from "../components/SideBar";

export default function Home() {
    const mainColor = "#0B022D";
    return (
        <div>
            <Head>
                <title>Louis-Philippe Turmel</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <SideBar /> */}
            <main className="container mx-auto max-w-xl p-8 flex flex-col text-center font-mono">
                <div>
                    <img
                        className="w-60 mx-auto rounded-full"
                        src="/lp.jpg"
                    ></img>
                    <p className="text-2xl font-bold mt-4">
                        {" "}
                        Louis-Philippe Turmel
                    </p>
                </div>

                <div className="mt-2">
                    <p className="text-gray-500">
                        {" "}
                        Fullstack Web developer | Devops engineer{" "}
                    </p>
                </div>

                <div className="flex-column align-middle mt-10 justify-items-center">
                    <p className="font-bold mb-2"> About me </p>
                    <p>
                        I am a networking / computer science student by day and
                        a fullstack developer by night (or rather in my free
                        time).
                    </p>
                    <p>
                        I have 4 years of experience in IT & Devops. Currently
                        interning at{" "}
                        <a
                            className="font-medium hover:underline hover:text-red-600"
                            href="https://2020spaces.com"
                            target="_blank"
                        >
                            {" "}
                            2020 Technologies
                        </a>
                    </p>
                </div>

                <div className="mt-16">
                    <p className="font-bold mb-2"> Skills </p>
                    <div className="container mx-auto w-64 mt-10">
                        <div className="flex flex-row align-middle justify-evenly mb-6">
                            <Icon
                                icon={<SiTypescript className="w-16 h-16" />}
                            />
                            <Icon icon={<SiReact className="w-16 h-16" />} />
                            <Icon icon={<SiPython className="w-16 h-16" />} />
                        </div>
                        <div className="flex flex-row align-middle justify-evenly">
                            <Icon
                                icon={<SiPowershell className="w-16 h-16" />}
                            />
                            <Icon
                                icon={<SiNextDotJs className="w-16 h-16" />}
                            />
                            <Icon
                                icon={<SiCplusplus className="w-16 h-16" />}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col justify-items-center align-middle">
                    <p className="font-bold mb-2"> My Projects </p>
                    <a
                        href="https://passvaulty.com"
                        target="_blank"
                        className="cursor-pointer mx-auto"
                    >
                        <img className="w-16 mr-0" src={"/lock.jpeg"} />
                    </a>
                </div>
            </main>

            <footer></footer>
        </div>
    );
}
