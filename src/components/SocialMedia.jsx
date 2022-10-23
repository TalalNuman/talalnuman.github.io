import React from "react";
import { BsTwitter, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <FaFacebook />
      </div>
    </div>
  );
}

export default SocialMedia;
