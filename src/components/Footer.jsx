import React from "react";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
// import '../screens/Home.css';  

function Footer() {
  const handleEmailClick = () => {
    window.location.href = "mailto:najeebkhanlaku@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+92088440190";
  };

  return (
    <>
      <hr className="h-[2px]" />
      <div className="flex flex-col lg:flex-row justify-between items-center px-8 md:px-16 py-8">
        <div className="text-center lg:text-left">
          <span className="font-semibold text-xl">Phone: </span>
          <span onClick={handlePhoneClick} className="cursor-pointer underline text-blue-500">+923088440190</span>
          <div className="mt-6">
            <span className="font-semibold text-xl">Email: </span>
            <span onClick={handleEmailClick} className="cursor-pointer underline text-blue-500">najeebkhanlaku@gmail.com</span>
          </div>
        </div>

        <div className="mt-6 lg:mt-0 text-center">
          <h2 className="font-semibold text-xl">Follow Me</h2>
          <div className="flex justify-center mt-2">
            <div className="contact-icon flex">
              <a href="" className="items">
                <FaInstagram className="icons  hover:scale-110 transition-all duration-200"    />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100053768207242" className="items">
                <CiFacebook className="icons  hover:scale-110 transition-all duration-200"   />
              </a>
              <a href="https://www.linkedin.com/in/najeeb-khan90" className="items">
                <CiLinkedin className="icons  hover:scale-110 transition-all duration-200"   />
              </a>
              <a href="" className="items" target="_blank" rel="noopener noreferrer">
                <BsTwitterX className="icons  hover:scale-110 transition-all duration-200"   />
              </a>
              <a href="https://github.com/NAJEEBKHAN123" className="items">
                <FaGithubSquare className="icons hover:scale-110 transition-all duration-200" />
              </a>
              <a href="mailto:najeebkhanlaku@gmail.com" className="items">
                <MdOutgoingMail className="icons  hover:scale-110 transition-all duration-200"  />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-0 text-center lg:text-right">
          <span className="block">Najeeb Khan web dev</span>
          <span>+923019862406</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
