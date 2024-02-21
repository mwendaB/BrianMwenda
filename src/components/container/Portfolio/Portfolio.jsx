import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
import { workImages, workNavs } from "../../../Data";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import {FiGithub} from "react-icons/fi"

const slideInFadeIn = ({ delay, duration }) => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration,
    },
  },
});

const ProjectCard = ({ index, img, name, description, tags, link }) => {
  return (
    <motion.div variants={slideInFadeIn(index * 0.2, 0.5)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="portfolio-card"
      >
        <div className="project-image">
          <img src={img} alt="project_image" />
          <div className="github-icon-container">
            <div onClick={() => window.open(link, "_blank")} className="black-gradient">
              <FiGithub size={20} color="#fff" />
            </div>
          </div>
        </div>
        <div className="project-details">
          <h3>{name}</h3>
          <p className="project-description">{description}</p>
        </div>
        <div className="project-tags">
          {tags.map((tag) => (
            <p key={`${name}-${tag}`} className="project-tag">
              #{tag}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const filteredProjects = tab.name === "all" ? workImages : workImages.filter(
      workImage => workImage.category.toLowerCase() === tab.name
    );
    setWorks(filteredProjects);
  }, [tab]);

  const activeTab = (e, i) => {
    console.log("Button clicked:", e.target.textContent);
    const selectedTabName = e.target.textContent.toLowerCase();
    console.log("Selected tab name:", selectedTabName);
    setTab({ name: selectedTabName });
    setActive(i);
    // console.log("Tab:", tab);
    // console.log("Active:", active);
  };
  
  

  return (
    <div className="container" id="portfolio">
       <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
      
      >
            <span>My Work</span>
            <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="buttons"
      >
        {workNavs.map((workNav, index) => (
           <button
           onClick={(e) => activeTab(e, index)}
           className={`${active === index ? "active" : ""}`}
           key={index}
           
           >
           
            {workNav}</button>
        ))}
      </motion.div>
      <div className="portfolio-container">
        {works.map((project, index) => (
          <ProjectCard key={project.id} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
