import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Skills from "../components/Data/skills.json";

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const controls = useAnimation();

  // Track the element's visibility
  useEffect(() => {
    const element = ref.current;

    const onScroll = () => {
      if (element) {
        const top = element.getBoundingClientRect().top;
        const inView = top < window.innerHeight * 0.9;
        setIsVisible(inView);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trigger animations when element becomes visible
  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [isVisible, controls]);

  return (
    <div className="flex items-center justify-center min-h-screen py-12">
      <div className="w-full max-w-5xl px-4">
        {/* Heading */}
        <motion.h1
          className="text-3xl font-bold text-center mb-12 mt-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
        >
          Skills
        </motion.h1>

        {/* Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" ref={ref}>
          {Skills.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-black p-4 rounded-md border border-yellow-500 shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }} // Scale and rotate on hover
            >
              <img
                src={`assets/${item.imageSrc}`}
                alt={item.title}
                className="w-14 h-14 mx-auto mb-2"
                onError={(e) => console.error("Image failed to load:", e.target.src)}
              />
              <h3 className="text-lg text-white">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
