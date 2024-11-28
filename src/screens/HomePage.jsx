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
    <div className="h-full container mx-auto mb-10 mt-20 px-4 flex flex-col lg:flex-row items-center justify-center">
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
  className="flex justify-center h-full mt-10 w-full lg:justify-start relative space-x-6"
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
        className={`w-24 border-4 mx-2 border-solid border-yellow-200 hover:bg-blue-500 cursor-pointer transition-all h-24 duration-300 lg:w-28 lg:h-28 md:w-26 md:h-26 text-sm lg:text-lg ${
          (index === 0 && "bg-red-600 text-white") ||
          (index === 1 && "bg-black text-white")
        } rounded-full flex items-center justify-center`}
        variants={item}
        style={{
          marginLeft: index === 1 ? "50px" : "0px", // Moves only "Projects"
        }}
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
