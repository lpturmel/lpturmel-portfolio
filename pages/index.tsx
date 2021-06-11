import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import {
    SiAmazonaws,
    SiAzuredevops,
    SiCplusplus,
    SiCsharp,
    SiCss3,
    SiGnubash,
    SiGraphql,
    SiHtml5,
    SiMicrosoftazure,
    SiMongodb,
    SiMysql,
    SiNextDotJs,
    SiPowershell,
    SiPython,
    SiReact,
    SiTypescript,
} from "react-icons/si";
import Footer from "../components/Footer";

import Icon from "../components/Icon";
import ScrollDown from "../components/ScrollDown";
import Section from "../components/Section";
import Socials from "../components/Socials";

export default function Home() {
    const mainColor = "#0B022D";
    return (
        <div
            style={{
                height: "100vh",
                backgroundRepeat: "repeat-y",
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(195%2c 197%2c 203%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c791.9C145.935%2c795.182%2c220.905%2c613.693%2c345.032%2c536.88C472.244%2c458.159%2c646.709%2c456.061%2c736.304%2c336.259C831.539%2c208.914%2c879.431%2c32.84%2c836.484%2c-120.268C794.425%2c-270.208%2c633.953%2c-345.31%2c516.453%2c-447.509C415.998%2c-534.882%2c318.085%2c-617.236%2c198.299%2c-675.343C57.871%2c-743.463%2c-85.247%2c-840.792%2c-239.004%2c-813.973C-396.397%2c-786.52%2c-544.352%2c-676.409%2c-615.561%2c-533.387C-683.37%2c-397.195%2c-597.352%2c-238.533%2c-601.233%2c-86.444C-604.521%2c42.397%2c-688.252%2c172.645%2c-636.59%2c290.721C-584.815%2c409.055%2c-436.688%2c441.682%2c-335.201%2c521.582C-220.089%2c612.208%2c-146.469%2c788.606%2c0%2c791.9' fill='%23858995'%3e%3c/path%3e%3cpath d='M1920 1806.854C2057.348 1801.775 2108.03 1617.7930000000001 2199.95 1515.6109999999999 2265.83 1442.376 2331.235 1375.179 2383.458 1291.654 2443.256 1196.014 2515.5280000000002 1104.97 2526.868 992.746 2539.891 863.865 2548.777 704.956 2451.369 619.566 2352.081 532.528 2196.502 593.6220000000001 2064.6059999999998 587.517 1966.391 582.971 1872.02 568.947 1775.621 588.289 1671.532 609.174 1570.93 640.3820000000001 1485.696 703.674 1384.8809999999999 778.5350000000001 1256.019 857.826 1244.277 982.846 1232.483 1108.422 1357.685 1200.271 1429.304 1304.094 1488.224 1389.507 1553.943 1462.563 1626.4189999999999 1536.821 1721.208 1633.941 1784.383 1811.8690000000001 1920 1806.854' fill='white'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
                backgroundSize: "cover",
            }}
        >
            <Head>
                <title>Louis-Philippe Turmel</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <SideBar /> */}
            <Socials />
            <ScrollDown />
            <p className="top-8 right-8 text-gray-500 text-2xl absolute hidden lg:block">
                📍 45.5017° N, 73.5673° W
            </p>
            <main className="h-full p-8 flex flex-col text-center font-mono">
                <div className="w-full flex flex-wrap flex-row justify-center space-x-16 absolute m-auto top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <img
                        className="w-26 h-26 lg:w-80 lg:h-80 rounded-full"
                        src="/lp.jpg"
                    ></img>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        className="flex flex-col space-y-5 align-middle justify-center"
                    >
                        <p className="text-5xl font-bold">
                            {" "}
                            Louis-Philippe Turmel
                        </p>
                        <p className="text-gray-500 text-3xl">
                            {" "}
                            Fullstack Web developer | Devops engineer{" "}
                        </p>
                    </motion.div>
                </div>
            </main>
            <Section
                id="knowledge"
                title="Knowledge"
                subheader="Louis-Philippe Turmel"
            >
                <p className="font-bold mb-2"> Fullstack Development </p>
                <p>
                    I am trained with the Node.js (Typescript), React, MongoDB,
                    CSS3, HTML5 stack.
                </p>
                <div className="container mx-auto w-full mt-10">
                    <div className="flex flex-row align-middle justify-center space-x-6 mb-6">
                        <Icon
                            icon={
                                <SiTypescript className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiReact className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiMongodb className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiHtml5 className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiCss3 className="w-16 h-16 text-icon-color" />
                            }
                        />
                    </div>
                </div>
                <p className="font-bold mb-2"> Cloud experiences </p>
                <p>
                    I have various experiences with cloud providers. Although I
                    spend most of my time in AWS, I have worked a lot with Azure
                    and VSTS in the past. Experiences include deploying and
                    maintaining CDNs, EC2 instances, Serverless computing (API
                    and databases), domain registration, DNS Hosting, CI/CD
                    pipelines and more.
                </p>
                <div className="container mx-auto w-1/2 mt-10">
                    <div className="flex flex-row align-middle justify-evenly mb-6">
                        <Icon
                            icon={
                                <SiAmazonaws className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiAzuredevops className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiMicrosoftazure className="w-16 h-16 text-icon-color" />
                            }
                        />
                    </div>
                </div>
                <p className="font-bold mb-2">
                    {" "}
                    Well known languages and frameworks{" "}
                </p>

                <div className="container mx-auto w-1/2 mt-10 flex flex-col space-y-5">
                    <div className="flex flex-row align-middle justify-evenly">
                        <Icon
                            icon={
                                <SiPowershell className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiNextDotJs className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiCplusplus className="w-16 h-16 text-icon-color" />
                            }
                        />
                    </div>
                    <div className="flex flex-row align-middle justify-evenly">
                        <Icon
                            icon={
                                <SiGnubash className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiCsharp className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiPython className="w-16 h-16 text-icon-color" />
                            }
                        />
                    </div>
                    <div className="flex flex-row align-middle justify-evenly">
                        <Icon
                            icon={
                                <SiMysql className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiGraphql className="w-16 h-16 text-icon-color" />
                            }
                        />
                        <Icon
                            icon={
                                <SiPython className="w-16 h-16 text-icon-color" />
                            }
                        />
                    </div>
                </div>
            </Section>
            <Footer />
        </div>
    );
}
