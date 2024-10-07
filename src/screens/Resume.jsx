import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import cvImg from "../assets/main2imge.jpg";
import { useGSAP } from "@gsap/react";

const Resume = () => {
  const elementRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(elementRef.current, {
      x: "-100vw",
      delay: 0.1,
      duration: 1,
      ease: "elastic.out(.6, .5)",
    });
    tl.from(elementRef.current.querySelector(".education"), {
      y: -100,
      opacity: 0,
      duration: 0.2,
    });
    tl.from(elementRef.current.querySelector(".aboutme"), {
      y: 100,
      opacity: 0,
      duration: 0.2,
    });
    tl.from(elementRef.current.querySelector(".skills"), {
      y: -100,
      opacity: 0,
      duration: 0.2,
    });
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:hassankhan5uy99@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+923132402444";
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/muhammad-hassan-76a17b272/",
      "_blank"
    );
  };

  const educationData = [
    {
      id: 1,
      subject: "SOFTWARE ENG",
      school: "ISLAMIA COLLEGE UNIVERSITY PESHAWAR",
    },
    {
      id: 2,
      subject: " FA.c COMPUTER SCIENCE",
      school: "CITY COLLEGE OF SCIENCE AND ARTS PESHAWAR",
    },
  ];

  return (
    <div className="mx-auto p-4 mt-20 px-7 lg:px-52" ref={elementRef}>
      <div className="w-full h-full flex justify-between">
        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            <h1 className="md:text-[3vw] text-[6vw]  font-semibold">
              Najeeb Ullah
            </h1>
            <h3 className="text-xl font-semibold text-blue-500">
              Web Developer
            </h3>
          </div>
          <div className="flex w-[50%] justify-between flex-col md:flex-row">
            <div>
              <div className="min-w-max">
                <span>📞</span>
                <span className="ml-1 text-blue-500" onClick={handlePhoneClick}>
                  +92 3088 440 190
                </span>
              </div>
              <div>
                <span>🔗</span>
                <span
                  className="ml-1 cursor-pointer text-blue-500"
                  onClick={handleLinkedInClick}
                >
                  linkedin
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="text-blue-500">@</span>
                <span
                  className="ml-1 hover:underline hover:cursor-pointer text-blue-500"
                  onClick={handleEmailClick}
                >
                  hassankhan5uy99@gmail.com
                </span>
              </div>
              <div className="min-w-max">
                <span>📍</span>
                <span className="ml-1">Canal Road Abdara Peshawar.</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src={cvImg}
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-md object-cover"
          alt=""
        />
      </div>
      <div className="flex justify-between lg:flex-row flex-col ">
        <div>
          <div className="education">
            <h2 className="text-2xl font-semibold">Education</h2>
            <hr className="w-[100%] h-1 bg-gray-800" />
            {educationData.map((edudata) => (
              <div className=" my-2" key={edudata.id}>
                <h3 className="text-xl font-semibold ">{edudata.subject}</h3>
                <h5 className="font-semibold text-blue-500 ">
                  {edudata.school}
                </h5>
                <div>
                  <span>{edudata.date}</span>
                </div>
              </div>
            ))}
          </div>
          </div>
        <div>
          <div className="aboutme">
            <h2 className="text-2xl font-semibold">About me</h2>
            <hr className="w-[100%] h-1 bg-gray-800" />
            <p className="lg:w-[250px] text-justify ">
              Experienced MERN stack developer skilled in React.js, Node.js,
              Express, MongoDB, Tailwind CSS, and Framer Motion. I excel at
              creating responsive, visually appealing user interfaces, and
              optimizing component styling with Tailwind CSS. Proficient in
              adding animations with Framer Motion to enhance user experience.
              Strong understanding of backend fundamentals ensures smooth
              functionality and data flow. Passionate about intuitive solutions
              and collaboration. Let's connect for innovative web development
              opportunities!
            </p>
          </div>
          <div className="skills">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <hr className="w-[100%] h-1 bg-gray-800" />
            <div className="flex mt-2 flex-wrap lg:w-[250px]">
              {[
                { id: 1, name: "HTML" },
                { id: 2, name: "CSS" },
                { id: 3, name: "JS" },
                { id: 4, name: "TAILWIND CSS" },
                { id: 5, name: "REACT.js" },
                { id: 6, name: "REDUX.TOOLKIT" },
                { id: 7, name: "NODE.js" },
                { id: 8, name: "EXPRESS.js" },
                { id: 9, name: "MONGOOSE" },
              ].map((skill) => (
                <h5
                  className="bg-gray-300 py-1 px-3 mx-1 my-1 font-semibold "
                  key={skill.id}
                >
                  {skill.name}
                </h5>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
