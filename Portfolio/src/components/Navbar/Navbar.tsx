import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DarkMode from "./toggle-switch-dark-mode/DarkMode";
import "./Navbar.css";
import { motion, Variants } from "framer-motion";

const navbarVariants: Variants = {
  hidden: {
    opacity: 0,
    x:500,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="h-[8vh] fixed w-full font-montserrat shadow-sm shadow-white bg-gradient-to-br from-blue-600 to-blue-700 dark:from-slate-800 dark:to-slate-900 flex flex-row justify-between text-white items-center">
        <h1 className=" ml-[2%] font-[600] cursor-pointer" onClick={() => navigate("/")}>
          JoseLozanoDev
        </h1>
        <motion.ul
          className={`flex flex-col justify-center items-center text-black text-[2rem] gap-[7%] bg-white dark:bg-slate-700 dark:text-white h-[100vh] w-full fixed ${isMenuOpen ?'z-[200]':''} top-0`}
          variants={navbarVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
        >
          <li onClick={handleLinkClick}>
            <Link to={"/about"}>About</Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to={"/learning"}>Learning</Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to={"/services"}>Services</Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to={"/career"}>Career</Link>
          </li>
        </motion.ul>
        <div className="flex flex-row justify-center items-center">
        <DarkMode/>
        <div 
        className={`hamburger-menu${isMenuOpen ?' visible':''} z-[300]`}
        onClick={()=> setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`line`}></div>
          <div className={`line`}></div>
          <div className={`line`}></div>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
