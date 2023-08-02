import React from "react";
import { FiGithub, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

const WorkCard = ({ work }) => {
  return (
    <div className="workImage">
      <img src={work.img} alt="workImg" />

      {/* Project Description */}
      <div className="projectDescription">
        <h3>{work.name}</h3>
        <p>{work.description}</p>
        <div className="tags">
          {work.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Hover Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: [0, 1] }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hoverLayer"
      >
        <motion.a
          href={work.link}
          whileInView={{ scale: [0, 1] }}
          whileHover={{ scale: [1, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <FiGithub />
        </motion.a>
        <motion.a
          href={work.link}
          whileInView={{ scale: [0, 1] }}
          whileHover={{ scale: [1, 1.1] }}
          transition={{ duration: 0.3 }}
        >
          <FiEye />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default WorkCard;
