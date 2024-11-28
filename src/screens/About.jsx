import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
    <div className="h-auto w-full flex items-center justify-center px-6 py-10 sm:px-4 sm:py-8 lg:mt-40 sm:mt-20">
      <div className="h-full w-full lg:w-3/4 sm:w-full">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl sm:text-3xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600 mb-12"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          About Me
        </motion.h1>

        {/* About Section */}
        <motion.div
          className="bg-slate-100 border-2 rounded-lg border-red-500 p-10 sm:p-6 text-justify shadow-xl hover:shadow-2xl transition-shadow duration-500"
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <span className="text-pink-400 font-semibold text-xl block mb-6">Hello, My name is Najeeb Ullah</span>
          <p className="text-lg sm:text-base leading-relaxed text-gray-700">
            I am an experienced <strong>MERN stack developer</strong> skilled in 
            <strong> React.js</strong>, <strong>Node.js</strong>, <strong>Express</strong>, 
            <strong> MongoDB</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>. 
            I specialize in creating responsive and visually appealing user interfaces with 
            <strong> Tailwind CSS</strong>, and I am proficient in adding smooth animations 
            using <strong>Framer Motion</strong> to enhance the user experience. My strong 
            understanding of backend fundamentals ensures smooth data flow and functionality. 
            I am passionate about creating intuitive, user-friendly solutions, and working collaboratively 
            to bring innovative web development projects to life.
          </p>
        </motion.div>

        {/* Contact Call to Action */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <a
            href="mailto:najeebkhanlaku@gmail.com"
            className="bg-gradient-to-r from-red-600 to-yellow-400 text-white px-8 py-4 text-lg font-bold rounded-full hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
