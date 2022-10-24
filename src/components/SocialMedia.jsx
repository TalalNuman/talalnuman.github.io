import React from "react";
import { BsTwitter, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/talalnuman1" target={"_blank"}>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/talalnuman/" target={"_blank"}>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/talalnuman/" target={"_blank"}>
          <BsInstagram />
        </a>
      </div>
      <div>
        
        <FaFacebook />
      </div>
    </div>
  );
}

export default SocialMedia;
