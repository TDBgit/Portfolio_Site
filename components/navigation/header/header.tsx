import FancyButton from '@/components/ui/fancy-button';
import Profile from '@/components/ui/profile';
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper';
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Header() {
    return (
        <div className="w-full flex items-center justify-center md:justify-between">
            <Profile/>
            <div className="hidden md:inline">
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
        </div>
    );
}
