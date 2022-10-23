import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";

import "./About.scss";

const abouts = [
  {
    title: "Web Developement",
    description:
      "I can build a beautiful and scalable SPA using HTML, CSS, React.js, Redux, Node.js, Express.js & MongoDB.",
    img: images.about01,
  },
  {
    title: "Web Design",
    description:
      "I can design a beautiful and attractive UI using Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop.",
    img: images.about02,
  },
  {
    title: "App Developement",
    description:
      "I can build a beautiful and scalable mobile app using React Native.",
    img: images.about03,
  },
  {
    title: "App Design",
    description:
      "I can design a beautiful and attractive mobile app UI using Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop.",
    img: images.about04,
  },
];

export default function About() {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((abouts) => setAbouts(abouts));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Dev</span>
        <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text">{about.title}</h2>
            <p className="p-text"> {about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
