/* eslint-disable react/jsx-key */
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

import work1 from "@/public/work1.png";
import work from "@/public/work.png";
import work2 from "@/public/work2.png";
import work3 from "@/public/work3.png";
import work4 from "@/public/work4.png";
import work5 from "@/public/work5.png";
import work6 from "@/public/work6.png";

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

// experiences.js
export const experiences = [
  {
    id: 1,
    year: "Jan 2024 - Present",
    position: "Senior Frontend Developer",
    company: "Nathan & Nathan",
    tasks: [
      "Developed and maintained web applications using Nextjs,Reactjs and Nuxtjs",
      "Work closely with the backend team To Implement high quality API which are dynamic.",
      "Collaborate with the design team to give the clients Quality designs which are both interactive and dynamic",
      "Worked closely with the QA team to identify and fix bugs early in the development process, resulting in a 98% defect-free release.",
      "Collaborated with DevOps engineers to implement a CI/CD pipeline, reducing deployment time from days to hours."
    ],
  },
  {
    id: 2,
    year: "2023 - Nov 2023",
    position: "FullStack Developer",
    company: "exhibitsolutions",
    tasks: [
      "Developed and maintained web applications using React.js and Node.js.",
      "Implemented RESTful APIs to interact with the backend.",
      "Collaborated with the design team to improve UI/UX.",
    ],
  },
  {
    id: 3,
    year: "2022 - present",
    position: "FullStack Developer - part-time",
    company: "codekazi.com",
    tasks: [
      "Built and deployed responsive websites using HTML, CSS, and JavaScript.",
      "Assisted in backend development with Express.js and MongoDB.",
      "Provided technical support and bug fixes for existing projects.",
    ],
  },
  {
    id: 4,
    year: "2022",
    position: "Intern Software Developer",
    company: "Italanta.co.ke",
    tasks: [
      "Assisted senior developers in building web applications.",
      "Gained experience in front-end technologies like React.js.",
      "Contributed to team projects and attended code reviews.",
    ],
  },
  {
    id: 5,
    year: "2021 - 2023",
    position: "Freelance Web Developer",
    company: "#",
    tasks: [
      "Worked with clients to understand project requirements.",
      "Designed and developed custom websites according to client needs.",
      "Ensured timely delivery and handled ongoing maintenance.",
    ],
  },
];

export const finishes = [
  {
    id: 1,
    number: "4.5+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "4+",
    itemName: "Companies Worked For",
  },
  {
    id: 3,
    number: "15+",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "8+",
    itemName: "Clients Served",
  },
];
// Data.js


export const workImages = [
  {
    id: 1,
    img: work,
    name: "LMS",
    category: "web",
    description: "A modern, feature-rich Learning Management System built with Next.js 14. The LMS provides a comprehensive solution for creating, managing, and delivering educational content with an intuitive user interface.",
    link: "https://lms-plum-beta.vercel.app/",
    tags: ["Nextjs", "stripe", "prisma", "clerk", "mui", "tailwindcss"],
  },
  {
    id: 2,
    img: work2,
    name: "Nikestore",
    category: "web",
    description: "A modern, responsive Nike-inspired eCommerce platform built with React and Vite. This lightweight yet powerful online store offers a seamless shopping experience with an emphasis on performance and visual appeal.",
    link: "https://nike-store-nine.vercel.app/",
    tags: ["Vite", "Tailwind","Stripe", "Reactjs", ""],
  },
  {
    id: 3,
    img: work3,
    name: "Bulk-Sms Dashboard",
    category: "web",
    description: "This is a description for project 3. It demonstrates the use of Redux.",
    link: "https://example.com/project-3",
    tags: ["React", "Redux","Nextjs", "Web Development"],
  },
  {
    id: 4,
    img: work4,
    name: "Hotel Management system",
    category: "app",
    description: "This is a project 4. It's a mobile application built with React Native.",
    link: "https://example.com/project-4",
    tags: ["Php", "Codeignitor", "Vuejs", "App Development"],
  },
  {
    id: 5,
    img: work5,
    name: "Evogym",
    category: "app",
    description: "Evogym is a gym website where members can book sessions, renew their memberships, and new members can sign up.",
    link: "https://gym-wheat-phi.vercel.app/",
    tags: ["Reactjs", "Vite", "Saas", "App Development"],
  },
  {
    id: 6,
    img: work6,
    name: "Shop-Eight",
    category: "design",
    description: "Shop-Eight is an online store where customers can purchase products and pay on the site. A notification is then sent to the sellers, and the delivery process starts.",
    link: "https://shop-eight-psi.vercel.app/",
    tags: ["Design", "Reactj", "Graphic Design"],
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
