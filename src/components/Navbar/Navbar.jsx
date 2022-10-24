import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
        {/* <h1>Talal</h1> */}
      </div>

      <ul className="app__navbar-links">
        {["Home", "About", "Work", "Skills", "Testimonials", "Contact"].map(
          (item, index) => (
            <li className="app__flex p-text" key={index}>
              <div />
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            // whileInView={{ x: [300, 0] }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {[
                "Home",
                "About",
                "Work",
                "Skills",
                "Testimonials",
                "Contact",
              ].map((item, index) => (
                <li key={index} onClick={() => setToggle(false)}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      {/* {["Home", "About", "Work", "Skills", "Testimonials", "Contact"].map(
        (item, index) => (
          <li className="app__flex p-text" key={index}>
            <div />
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        )
      )} */}
    </nav>
  );
}

export default Navbar;
