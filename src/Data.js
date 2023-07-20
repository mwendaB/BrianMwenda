import {
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPython,
} from "react-icons/fa";
import { DiJavascript, DiDjango } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";

import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <FaGithub />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsFacebook />,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Brian mwenda",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+254 742643813",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "brianmwenda255@gmail.com",
  },
];

export const icons = [
  <FaHtml5 />,
  <DiDjango />,
  <DiJavascript />,
  <SiTypescript />,
  <FaReact />,
  <FaNodeJs />,
  <FaPython />,
  <FaFigma />,
];

export const experiences = [
  {
    id: 1,
    year: "2023- present",
    position: "FullStack Developer",
    company: "exhibitsolutions",
  },
  {
    id: 1,
    year: "2022- present",
    position: "FullStack Developer - parttime",
    company: "codekazi.com",
  },
  {
    id: 2,
    year: "2022",
    position: "Intern Web Developer",
    company: "Italanta.co.ke",
  },
  {
    id: 3,
    year: "2021-2023",
    position: "Freelance Web Developer",
    company: "#",
  },
];
export const finishes = [
  {
    id: 1,
    number: "2+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "3+",
    itemName: "Companies Worked For",
  },
  {
    id: 3,
    number: "15+",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "7+",
    itemName: "Clients Served",
  },
];
// Data.js

// Data.js

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    description: "This is a description for project 1. It showcases the use of React and Node.js.",
    link: "https://example.com/project-1",
    tags: ["React", "Node.js", "Web Development"],
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    description: "This is a description for project 2. It uses HTML, CSS, and JavaScript.",
    link: "https://example.com/project-2",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    description: "This is a description for project 3. It demonstrates the use of Redux.",
    link: "https://example.com/project-3",
    tags: ["React", "Redux", "Web Development"],
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
    description: "This is a description for project 4. It's a mobile application built with React Native.",
    link: "https://example.com/project-4",
    tags: ["React Native", "Mobile App", "App Development"],
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "app",
    description: "This is a description for project 5. It's an iOS app written in Swift.",
    link: "https://example.com/project-5",
    tags: ["Swift", "iOS App", "App Development"],
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
    description: "This is a description for project 6. It's a creative design using Adobe Illustrator.",
    link: "https://example.com/project-6",
    tags: ["Design", "Adobe Illustrator", "Graphic Design"],
  },
];



export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Ngong road, Nairobi , Kenya",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "brianmwenda255@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+254 742643813",
  },
];
