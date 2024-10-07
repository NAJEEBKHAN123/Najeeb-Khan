import React, { useState } from "react";
import { motion } from "framer-motion";

function ProjectItem({ title, description, img, codeLink, webLink }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex  mt-10 lg:mt-28 border-2 p-2 flex-col-reverse border-gray-500 lg:flex-row rounded-md"
    >
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center  lg:bg-white mt-1 lg:mt-0 text-gray-500 lg:text-start">
          {title}
        </h2>
        <p className="lg:w-[75%] mb-5 text-justify tracking-wide mt-8 text-xl">
          {description}
        </p>
        <div className="flex justify-around lg:justify-start gap-3 px-1">
          <a href={codeLink}>
            <motion.button
              className="  hover:bg-gray-300  py-1  px-3 rounded-md font-semibold mt-2 text-[0.80rem] border border-gray-500"
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Source Code
            </motion.button>
          </a>
          <a href={webLink}>
            <motion.button
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="  hover:bg-gray-300  py-1  px-3 rounded-md font-semibold mt-2 text-[0.80rem] border border-gray-500"
            >
              See Live
            </motion.button>
          </a>
        </div>
      </div>

      <div className="h-full w-full   lg:border-l-2 border-gray-400 lg:pl-2">
        {isLoading && (
          <div className="flex items-center justify-center w-full h-[247px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            ></svg>
          </div>
        )}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          src={img}
          alt=""
          onLoad={handleImageLoad}
          className={`w-[516px] h-[247px]  m-auto object-contain ${
            isLoading ? "hidden" : ""
          }`}
        />
        <hr className="h-[2px] bg-gray-500 lg:hidden" />
      </div>
    </motion.div>
  );
}

export default ProjectItem;
