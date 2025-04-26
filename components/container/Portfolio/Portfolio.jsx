"use client"
import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
import { workImages, workNavs } from "@/app/Data";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

const ProjectCard = ({ img, name, description, tags, link }) => {
  return (
    <div className="portfolio-card-wrapper">
      <div className="portfolio-card">
        <div className="project-image">
          <Image src={img} alt="project_image" width={400} height={230} />
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
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const filteredProjects = tab.name === "all" 
      ? workImages 
      : workImages.filter(workImage => workImage.category.toLowerCase() === tab.name);
    setWorks(filteredProjects);
  }, [tab]);

  const activeTab = (e, i) => {
    const selectedTabName = e.target.textContent.toLowerCase();
    setTab({ name: selectedTabName });
    setActive(i);
  };

  return (
    <div className="container" id="portfolio">
      <div className="title">
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </div>
      <div className="buttons">
        {workNavs.map((workNav, index) => (
          <button
            onClick={(e) => activeTab(e, index)}
            className={`${active === index ? "active" : ""}`}
            key={index}
          >
            {workNav}
          </button>
        ))}
      </div>
      <div className="portfolio-container">
        {works.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;