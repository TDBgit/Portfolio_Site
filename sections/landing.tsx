import Header from "@/components/navigation/header/header";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function LandingSection() {
    return (
        <div className="relative h-screen overflow-hidden p-8">
            {/* Header */}
            <Header />
            
            {/* Show magnetic fancy button on small screens and hide on medium */}
            <div className="absolute bottom-36 left-10 z-20 md:hidden">
                <MagneticWrapper>
                <FancyButton 
                text="LinkedIn" 
                icon={<FaLinkedin />} 
                href="http://www.linkedin.com/in/trent-butler-0b1b49345" 
                />
                </MagneticWrapper>
                <div className="mt-4">
                    <MagneticWrapper>
                    <FancyButton 
                    text="GitHub" 
                    icon={<FaGithub />} 
                    href="https://github.com/TDBgit" 
                />
                    </MagneticWrapper>
                </div>
            </div>
            
            {/* Live clock */}
            <div className="absolute right-10 bottom-10">
                <LiveClock timeZone="America/East Coast" />
            </div>
            
            {/* Slogan */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-20 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]">
                <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase">
                    <div className="group">
                        <a href="#projects">
                            <span className="gradient-text group-hover:bg-gradient-to-r from-[#00d372] via-[#56acff] to-[#d87cac]">
                              <u>Projects</u>
                                </span>
                        </a>
                    </div>
                    <div className="group">
                        <a href="#contact">
                            <span className="gradient-text group-hover:bg-gradient-to-r from-[#00d372] via-[#56acff] to-[#d87cac]">
                            <u>contact</u>
                            </span>
                        </a>
                    </div>
                    <div className="group">
                        <a href="#about">
                            <span className="gradient-text group-hover:bg-gradient-to-r from-[#00d372] via-[#56acff] to-[#d87cac]">
                            <u>about</u>
                                </span>
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Magnetic scroll down */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[4rem] md:bottom-[3rem] 2xl:bottom-[2rem]">
                {/* Scroll Down Button */}
            </div>
        </div>
    );
}
