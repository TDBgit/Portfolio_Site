import { FC, ReactNode } from "react";

interface ButtonProps {
    text: string;
    icon: ReactNode;
    href: string; // Added href prop
}

const FancyButton: FC<ButtonProps> = ({ text, icon, href }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fancy-btn"
        >
            <div className="group bg-black hover:bg-transparent text-primary-foreground hover:text-black rounded-[108rem] py-5 px-10 flex items-center gap-2 font-bold text-3xl cursor-pointer transition-all duration-75">
                <span>{text}</span>
                <span className="group-hover:translate-x-[0.75vw] transition-transform duration-100">
                    {icon}
                </span>
            </div>
        </a>
    );
};

export default FancyButton;
