import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ml
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ML",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Cybersecurity",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "ML",
    icon: ml,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "CyberSecurity engineer",
    company_name: "Tata Elxsi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Developed robust security middleware solutions, ensuring the protection of sensitive data and seamless integration into various systems.",
      "Adapt at identifying vulnerabilities, implementing encryption, and enhancing application security, delivering scalable, high-performance middleware to safeguard digital infrastructures.",
      "Created dynamic Firewall rules."
    ],
  },
  {
    title: "Intern",
    company_name: "Highradious",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Created a ML backend for loan approvel",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Harvestify",
    description:
      "Web-based platform that allows gives user suggesion on what type of crop one should harvest there based on given info",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ashu2001-aug/Harvestify.github.io",
  },
  {
    name: "Crypto updator",
    description:
      "Web application that enables users to stay updated on recent crypto price",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ashu2001-aug/cryptocurrency-tracker.github.io",
  },
  {
    name: "Amazone clone",
    description:
      "A simple clone of e-commerce website Amazone",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ashu2001-aug/amazone-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
