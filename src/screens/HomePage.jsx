import React from "react";
import mainimg from "../assets/newPic.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../screens/Home.css"; // Import CSS file for animations
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
      <div className="h-[100%] w-[100%] flex items-center justify-center p-8 lg:justify-center lg:translate-x-[-20px]">
        {" "}
        {/* Slight left adjustment with transform */}
        <motion.div
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={mainimg}
            className="w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] lg:w-[280px] lg:h-[280px] object-cover rounded-full animated-border" // Add the new animation class here
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
              className="text-2xl font-bold md:text-4xl border-r-4 border-4 mt-24 random"
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 160 }}
              
            >
              <TypeAnimation
                sequence={[
                  "Welcome to my Profile",
                  2000,
                  "My Name is Najeeb Ullah",
                  2000,
                  "And I'm a Full Stack Developer",
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
            {/* <motion.h3
              className="text-lg font-semibold mb-2 md:text-xl"
              variants={item}
            >
              A Bit About Me...
            </motion.h3> */}
           
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
              { endpoint: "/about", endpointName: "About" },
             
            ].map((item, index) => (
              <Link key={index} to={item.endpoint}>
                <motion.div
                  className={`w-[90px] border-4 mx-2 border-solid border-yellow-200 hover:bg-blue-500 cursor-pointer transition-all h-[90px] duration-300 lg:w-[120px] lg:h-[120px] md:w-[110px] md:h-[110px] text-sm lg:text-lg ${
                    (index === 0 && "bg-red-600 text-white") ||
                    (index === 1 && "bg-black text-white")
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
