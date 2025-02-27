import {FC} from "react";

interface HeadingProps{
    number:string;
    title_1:string;
    title_2:string;
}

const Heading:FC<HeadingProps>=({number, title_1, title_2})=>{
    return (<div className = "relative my-10 px-8 z-20"
    >
        {/* Number */}
        <div className="outline-none flex flec-col justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre"
        >
            <h2 className = "font-pixel text-[180] text-center text-primary-foreground relative"
            >
                <span className="bottom_fade bg-clip-text text-transparent p-4"
                >{number}</span>
            </h2>
        </div>
        {/* heading text wrapper */}
        <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
        <p className = "text-[18vw] lg:text-[12vw] leading-[100%] text-primary-foreground"
        >{title_1}</p>
        <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-italic">
        <p className = "text-[18vw] lg:text-[12vw] leading-[100%] text-primary-foreground"
        >{title_2}</p>
        </div>
        </div>

    </div>);
}

export default Heading;