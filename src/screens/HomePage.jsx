import React from "react";
import mainimg from "../assets/newPic.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../screens/Home.css"; // Import CSS file for animations

const HomePage = () => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="h-full container mx-auto mb-10 mt-28 px-4 pb-20 flex flex-col lg:flex-row items-center justify-center">
      {/* Image Section */}
      <div className="h-full w-full flex items-center justify-center p-4 lg:w-1/2">
        <motion.div
          className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={mainimg}
            className="w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover rounded-full animated-border"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="h-full w-full flex flex-col items-center lg:items-start lg:w-1/2 px-4">
        <div className="text-center lg:text-left">
          {/* Animated Introduction */}
          <motion.div className="mb-6">
            <motion.h2
              className="text-lg sm:text-xl lg:text-2xl font-bold border-r-4 random"
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

          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start mt-6 gap-4"
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
                  className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center text-xs sm:text-sm lg:text-base font-bold rounded-full border-4 ${
                    index === 0
                      ? "bg-red-600 text-white border-yellow-400"
                      : "bg-black text-white border-yellow-400"
                  } hover:scale-110 transition-transform duration-300`}
                  variants={item}
                >
                  {item.endpointName}
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
