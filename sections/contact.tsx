import Heading from "@/components/heading/heading";
import React from "react";
import Card from "@/components/ui/card";

export default function ContactSection() {
    return (
        <div id="contact" className="pt-24 px-3 lg:px-8">
            {/* Heading */}
            <Heading number="01" title_1="Contact" title_2="" />
            
            {/* Main featured card */}
            <div className="flex gap-4">
                <Card title="Phone">(904) 831-6353</Card>
                <Card title="Email">
                    <a href="mailto:trentondavisbutler@gmail.com" className="text-blue-500 hover:underline">
                        trentondavisbutler@gmail.com
                    </a>
                </Card>
                <Card title="GitHub">
                    <a 
                        href="https://github.com/TDBgit" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group text-blue-500 hover:underline transition-all"
                    >
                        <span className="group-hover:text-black transition-all">GitHub</span>
                    </a>
                </Card>
                <Card title="LinkedIn">
                    <a 
                        href="http://www.linkedin.com/in/trent-butler-0b1b49345" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group text-blue-500 hover:underline transition-all"
                    >
                        <span className="group-hover:text-black transition-all">LinkedIn</span>
                    </a>
                </Card>
            </div>
        </div>
    );
}
