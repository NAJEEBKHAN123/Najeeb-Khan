import React from "react";
import mainimg from "../assets/newPic.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  // Animation Variants
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full container mb-10 mt-20 flex items-center justify-center flex-col-reverse lg:flex-row">
      {/* Image Section with Colorful Background */}
      <div className="h-[100%] w-[100%] flex items-center justify-center p-8 lg:justify-end">
        <motion.div
          className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[410px] lg:h-[410px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={mainimg}
            className="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[390px] lg:h-[390px] object-cover rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="h-full w-full p-6 flex items-center justify-center lg:justify-start">
        <div className="text-center lg:text-left">
          {/* Animated Introduction Text */}
          <motion.div className="mb-6 lg:mb-12 lg:mt-7">
            <motion.h2
              className="text-2xl font-bold md:text-4xl"
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 160 }}
            >
              <TypeAnimation
                sequence={[
                  "Hello 👋 it’s Me, Najeeb, and",
                  2000,
                  "I am a React.js Developer.",
                  2000,
                  "I am a Node.js Developer.",
                  2000,
                  "I am a Coder.",
                  2000,
                  "I am a Programmer.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.h2>
          </motion.div>

          {/* About Me Section */}
          <motion.div
            className="mt-2"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.h3
              className="text-lg font-semibold mb-2 md:text-xl"
              variants={item}
            >
              A Bit About Me
            </motion.h3>
            <motion.p
              className="text-md tracking-wide text-justify lg:w-[30rem] leading-relaxed"
              variants={item}
            >
              Experienced MERN stack developer skilled in React.js, Node.js,
              Express, MongoDB, Tailwind CSS, and Framer Motion. I excel at
              creating responsive, visually appealing user interfaces and
              optimizing component styling with Tailwind CSS. Proficient in
              adding animations with Framer Motion to enhance user experience.
              Strong understanding of backend fundamentals ensures smooth
              functionality and data flow. Passionate about intuitive solutions
              and collaboration. Let's connect for innovative web development
              opportunities!
            </motion.p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex justify-center h-full mt-10 w-full lg:justify-start"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            {[
              { endpoint: "/resume", endpointName: "Resume" },
              { endpoint: "/projects", endpointName: "Projects" },
            ].map((item, index) => (
              <Link key={index} to={item.endpoint}>
                <motion.div
                  className={`w-[90px] border-2 mx-2 border-solid border-gray-800 hover:bg-blue-500 cursor-pointer transition-all h-[90px] duration-300 lg:w-[120px] lg:h-[120px] md:w-[110px] md:h-[110px] text-sm lg:text-lg ${
                    (index === 0 && "bg-red-600 text-white") ||
                    (index === 1 && "bg-gray-500 text-white")
                  } rounded-full flex items-center justify-center`}
                  variants={item}
                >
                  <span className="font-bold">{item.endpointName}</span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
