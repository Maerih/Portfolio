import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Typewriter from 'typewriter-effect';

export class AboutAli extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about maerih" src="./themes/Flat-Remix-Blue-Dark/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ali' skills" src="./themes/Flat-Remix-Blue-Dark/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ali' projects" src="./themes/Flat-Remix-Blue-Dark/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ali's resume" src="./themes/Flat-Remix-Blue-Dark/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Achievements</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ali' education" src="./themes/Flat-Remix-Blue-Dark/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Socials</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutAli;

export const displayAboutAli = () => {
    return <AboutAli />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 rounded-full">
                <img className="w-full" src="./images/logos/maerih.png"/>
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>I'm <span className="font-bold">Maerih</span> ,</div>
                <div className="font-normal ml-1">A<span className="text-blue-600 font-bold">
                <Typewriter options={{
                    autoStart:true,
                    loop:true,
                    strings: [
                        "Security Researcher!",
                        "Programmer!",
                        "Pythonist!",
                        "C++ Developer!"
                    ],
                }

                }/>
                 </span></div>
            </div>
            <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I explore the latest threats and develop strategies to counteract them. </li>
                <li className=" mt-3 list-building"> Use Python and C++ most of the time for my projects. </li>
                <li className=" mt-3 list-time"> Building Security Solutions: Developing systems and frameworks. </li>
                <li className=" mt-3 list-star"> I’m eager to learn more in cybersecurity and expand my expertise. </li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className="flex items-center font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Socials <img className="w-16 inline" src="./images/logos/pic-3.png" />
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="https://x.com/onyonka_maeri" target="_blank" rel="noreferrer">
                    <img src="./images/icons/twitter.png" alt="Twitter" className="w-8 h-8 rounded-full border border-gray-300 hover:bg-orange-700 hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/maeri/" target="_blank" rel="noreferrer">
                    <img src="./images/icons/linkedin.png" alt="LinkedIn" className="w-8 h-8 rounded-full border border-gray-300 hover:bg-orange-700 hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://github.com/maerih" target="_blank" rel="noreferrer">
                    <img src="./themes/Flat-Remix-Blue-Dark/apps/github-desktop.svg" alt="LinkedIn" className="w-8 h-8 rounded-full border border-gray-300 hover:bg-orange-700 hover:text-white transition-colors duration-300" />
                </a>
                {/* Add more social icons here */}
            </div>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className="flex items-center font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills <img className="w-16 inline" src="./images/logos/pic-4.png" />
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                I’ve worked with a diverse range of programming languages and frameworks, applying them to various aspects of security engineering and research.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise include <strong className="text-ubt-gedit-orange">exploit development,  penetration testing & debugging!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="ali javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="ali c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="ali python" />
                        <img className="m-1" src="https://img.shields.io/badge/Java-0175C2?style=flat&logo=dart&logoColor=white" alt="ali dart" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="ali HTML" /></a>
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="ali git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="ali firebase" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="ali react" />
                        <img className="m-1" src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white" alt="ali flutter" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="ali tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="ali node.js" className="m-1" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="ali jquery" className="m-1" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="ali linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Advanced Malware Analysis Tool",
            date: "Jun 2023",
            description: [
                "Developed a tool for analyzing and dissecting advanced malware samples to understand their behavior and impact.",
            ],
            domains: ["Python", "C++", "Malware Analysis"]
        },
        {
            name: "Custom Exploit Framework",
            date: "Mar 2023",
            description: [
                "Built a framework for developing and testing custom exploits, including a modular design for various attack vectors.",
            ],
            domains: ["Python", "C++", "Exploit Development"]
        },
        {
            name: "Network Security Audit Toolkit",
            date: "Jan 2023",
            description: [
                "Created a toolkit for conducting comprehensive network security audits, including vulnerability scanning and risk assessment.",
            ],
            domains: ["Python", "Network Security"]
        },
        {
            name: "Windows Kernel Driver Analysis",
            date: "Sep 2022",
            description: [
                "Performed detailed analysis of Windows kernel drivers to identify security vulnerabilities and potential exploits.",
            ],
            domains: ["C++", "Windows Internals", "Kernel Programming"]
        },
        {
            name: "Automated Penetration Test Framework",
            date: "Jul 2022",
            description: [
                "Developed an automated framework for conducting penetration tests, including integration with common testing tools and reporting systems.",
            ],
            domains: ["Python", "Penetration Testing"]
        },
        {
            name: "Incident Response Simulation",
            date: "May 2022",
            description: [
                "Simulated various cybersecurity incidents to develop and test response strategies and improve incident handling processes.",
            ],
            domains: ["Python", "Incident Response", "Forensics"]
        }
    ];

    const tag_colors = {
        "Python": "blue-500",
        "C++": "pink-400",
        "Malware Analysis": "red-600",
        "Exploit Development": "orange-500",
        "Network Security": "green-500",
        "Windows Internals": "purple-600",
        "Kernel Programming": "gray-600",
        "Penetration Testing": "yellow-500",
        "Incident Response": "teal-500",
        "Forensics": "indigo-500"
    }

    return (
        <>
            <div className="flex items-center font-semibold text-2xl mt-2 md:mt-4 mb-4">
                Projects <img className="w-16 inline" src="./images/logos/pic-5.png" />
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href="#" target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-2 px-3 my-2 border border-gray-200 border-opacity-50 rounded-lg hover:bg-navy-700 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className="text-lg font-semibold">{project.name}</div>
                                    <div className="text-gray-500 text-sm">{project.date}</div>
                                </div>
                                <ul className="tracking-normal leading-tight text-sm text-gray-700 ml-4 mt-2">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                let tag_color = tag_colors[domain];
                                                return <span key={index} style={{ borderWidth: "1pt" }} className={`px-2 py-1 border-${tag_color} text-${tag_color} m-1 rounded-full border`}>{domain}</span>
                                            })
                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Maeri-achivements.pdf" title="ali resume" frameBorder="0"></iframe>
    )
}
