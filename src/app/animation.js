import { useState , useEffect } from "react";
import { motion } from "motion";

{/*Minglehub*/}
{/*Making new friends has never been made more easier */}

const TypewriterEffect = ({text}) => {
    [displayedText , setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
const interval = setInterval (() => {
    if(i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        i++;
    }else{
        clearIntervaal(interval);
    }
    }, 100);

    return () => clearInterval (interval);
} , [text]);

return (
    <motion.h1 className = "text-2x1 font-bold">
    {displayedText}
    </motion.h1>
  );
};

export default function App() {
    return <TypewriterEffect text = "Minglehub" />
}