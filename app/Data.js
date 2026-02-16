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
    year: "Nov 2023 - Present",
    position: "Senior Front End Engineer",
    company: "Nathan Digital — Dubai, UAE",
    tasks: [
      "Developed a robust accounting system handling invoices, debts, multi-currency transactions, and ledger management.",
      "Optimized front-end performance with Nuxt and TypeScript, reducing load times by 40%.",
      "Implemented UI/UX enhancements that simplified complex financial workflows and improved user efficiency.",
      "Promoted to Front-End Team Lead after 9 months, leading developers building scalable web applications.",
      "Oversaw development of a CRM system with real-time analytics and automation for client management.",
      "Led creation of a drag-and-drop website builder enabling rapid business site launches.",
      "Established best practices in code reviews, testing strategies, and front-end architecture.",
      "Increased organic traffic and engagement by 30% through Next.js implementation and SEO optimization.",
      "Mentored junior developers transitioning from React to Vue 3, reinforcing core concepts and best practices."
    ],
  },
  {
    id: 2,
    year: "Feb 2022 - Nov 2023",
    position: "Software Engineer",
    company: "Codekazi — Nairobi, Kenya",
    tasks: [
      "Integrated RFID hardware with a patient tracking app (React/Python), reducing manual tracking time by 40%.",
      "Built a unified messaging inbox aggregating WhatsApp, Facebook, and Instagram, cutting response time by 55%.",
      "Integrated Facebook lead capture into CRM workflows, improving 24-hour follow-up from 62% to 89%.",
      "Developed B2C e-commerce filtering, reducing search time from 8 minutes to 2.5 minutes and boosting conversion by 23%.",
      "Created a dynamic room rate management feature for hospital B2B platforms, increasing revenue optimization by 18%.",
      "Led RFID-based asset management with real-time alerts, reducing theft/loss by 35% and eliminating manual audits.",
      "Integrated pharmacy, lab, and insurance APIs, cutting manual entry by 65% and reducing prescription time from 8 minutes to 3 minutes."
    ],
  },
  {
    id: 3,
    year: "Undated",
    position: "Front-End Developer",
    company: "Italanta",
    tasks: [
      "Refactored Node.js microservices and optimized database queries to improve API response times.",
      "Built RESTful APIs with TypeScript and Firebase Cloud Functions for async messaging workflows.",
      "Architected server-side applications with Angular 8+ and Firebase Realtime Database for large-scale training.",
      "Implemented real-time data synchronization between Firebase and client apps for state management.",
      "Set up automated testing and code review workflows using Jest and Cypress.",
      "Built PWA features with service workers and offline-first architecture."
    ],
  },
  {
    id: 4,
    year: "Undated",
    position: "Freelance Full Stack Engineer",
    company: "Self-Employed | Remote",
    tasks: [
      "Built Trapflix mobile app (React Native/Expo) with PHP/Laravel APIs, reaching 10k+ downloads.",
      "Developed Trapflix web platform with React and PHP, optimizing queries and caching for 25% faster loads.",
      "Created a warehouse management system (CodeIgniter/MySQL) with real-time inventory and barcode scanning, improving logistics by 30%.",
      "Delivered training in HTML, CSS, and JavaScript for junior developers."
    ],
  },
  {
    id: 5,
    year: "Undated",
    position: "Open Source (OSS) Developer",
    company: "Open Source",
    tasks: [
      "Marquee (Vue): built a dynamic marquee component for Vue 3 with animation controls, performance optimizations, and TypeScript types (99 GitHub stars).",
      "Penpot: improved frontend components and UI/UX for design collaboration features."
    ],
  },
];

export const finishes = [
  {
    id: 1,
    number: "5+",
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
