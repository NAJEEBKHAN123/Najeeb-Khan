import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import pro1img from "../assets/pro1.png";
// import pro2img from "../assets/weatherapp.png";
// import codevenator from "../assets/codevenator.png";
// import ProjectItem from "./ProjectItem";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    const onScroll = () => {
      if (element) {
        const top = element.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight * 1.3);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="h-auto w-full flex items-center justify-center p-6 mt-24 lg:mt-52">
      <div className="h-full w-full lg:w-[90%] ">
        <motion.h1
          className="text-4xl font-bold -mt-32 p-2"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          About
        </motion.h1>
        <motion.div
                  className=" border-2 rounded-lg border-red-500 p-14  bg-slate-300 "
                  initial={{ opacity: 0, y: -500     }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 120 }}
        
        >
          <span className="text-pink-400 font-bold">Hello, My name is Najeeb Ullah</span> <br />
          I Experienced MERN stack developer skilled in React.js, Node.js, Express, MongoDB, Tailwind CSS, and Framer Motion. I excel at creating responsive, visually appealing user interfaces, and optimizing component styling with Tailwind CSS. Proficient in adding animations with Framer Motion to enhance user experience. Strong understanding of backend fundamentals ensures smooth functionality and data flow. Passionate about intuitive solutions and collaboration. Let's connect for innovative web development opportunities!
        </motion.div>
      </div>
    </div>
    
  );
}

export default About;
