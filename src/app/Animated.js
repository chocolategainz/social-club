"use client";
import { useState , useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const useAnimate = (text, speed = 20) => {
    const [index , setIndex] = useState(0);
    const displayText = useMemo(() => text.slice(0, index), [index]);
useEffect(() => {
    if (index >= text.length)
        return;

    const timeoutId = setTimeout(() => {
        setIndex(i => i + 1);
    }, speed);

    return () => {
        clearTimeout(timeoutId);
    };
}, [index, text, speed]);
return displayText;
};

export default function App() {
   const text = useAnimate("MINGLEHUB.", 150);
    return(
        <motion.h1 className="animatedText">
       <p>{text}</p>     
        </motion.h1>
    ); 
}