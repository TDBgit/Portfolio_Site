import {FC} from "react";
import AnimatedCursor from "react-animated-cursor";

interface CursorProps{
    color: string
}

const Cursor: FC<CursorProps> = ({ color }) => {
    return ( 
        <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='200, 11, 150'
        outerAlpha={0.2}
        innerScale={0.7}
     //   innerSize={8}
     //   outerSize={8}
     //   innerScale={2}
     //   outerScale={5}
        innerStyle={{
            backgroundColor: color,
        }}
        outerStyle={{
            border: '1px solid ${color}',
         }}
         clickables={["a", "button", "select", "input", "link"]}
         />
        );
};
export default Cursor;