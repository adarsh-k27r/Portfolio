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
  gcloud,
  mytales,
  teller,
  face,
  threejs,
  github,
  internship,
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full Stack Web Developer",
    icon: mobile,
  },
  {
    title: "DevOps practitioner",
    icon: backend,
  },
  {
    title: "Artificial Intelligence",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cloud Computing",
    company_name: "Google",
    icon: gcloud,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Completed Google Cloud Arcade Facilitator program 2023, mastering cloud computing, Kubernetes, CI/CD, Compute Engine, Docker, YAML, BigQuery ML, Firebase deployment, and Firestore.",
      "Developed hands-on expertise in DevOps, utilizing Kubernetes, CI/CD pipelines, Docker for containerization, and automated deployment processes.",
      "Acquired advanced skills in data analytics with BigQuery ML, Firebase-based app deployment, and NoSQL database management using Firestore.",
    ],
  },
  {
    title: "Opensource Contribution",
    company_name: "Hacktoberfest 2023",
    icon: github,
    iconBg: "#383E56",
    date: "Oct 2023",
    points: [
      "Completed the challenge with a focus on algorithm analysis, delivering impactful contributions in open source projects.",
      "Actively submitted and had 4 Pull Requests and Merges approved out of a total of 6 contributions that I made, showcasing effective collaboration and code improvement skills.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "SalahKart- A Product of Jaspy Technologies Pvt. Ltd.",
    icon: internship,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Employed BeautifulSoup and Selenium WebDriver to scrape data from LinkedIn profiles.",
      "Conducted resume parsing, extracting skills from resumes and job descriptions to calculate the matching percentage.",
      "Utilized SpaCy and NLTK for advanced NLP tasks.",
      "Conducted Semantic Textual Similarity (STS) for accurate skill assessment.",
      "Developed a Named Entity Recognition (NER) pipeline using Transformers by Hugging Face.",
      "Extracted nouns and verbs from resumes on a section-wise basis for enhanced resume analysis.",
      "Designed and documented workflow using Lucid Chart for flow diagrams and brainstorming sessions.",
      "Created a backend database with a Level 2 ER Diagram using the Eraser.io",
      "Performed unit and integration testing manually to ensure code quality and reliability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Adarsh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "myTales: A Story Sharing App",
    description:
      "Web-based Blogging platform that allows users to write and share their stories with the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: mytales,
    source_code_link: "https://github.com/adarsh-k27r/myTales",
  },
  {
    name: "Containerization of a Web Microservice using Docker and Kubernetes Orchestration",
    description:
      "Containerized Node microservice using Docker and then deployed it on Google Kubernetes Engine using the provided manifest files.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "YAML",
        color: "pink-text-gradient",
      },
    ],
    image: docker,
    source_code_link: "https://github.com/adarsh-k27r/microservice-k8s",
  },
  {
    name: "Teller's: An Advanced Blogging Platform",
    description:
      "Teller's takes storytelling to the next level with its sophisticated features and enhanced user experience. Building on the foundation of myTales , Teller's offers advanced blogging tools that cater to both casual writers and professional bloggers.",
    tags: [
      {
        name: "react + vite",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: teller,
    source_code_link: "https://github.com/adarsh-k27r/teller",
  },
  {
    name: "Face Detection using OpenCV and GStreamer Pipeline (C++)",
    description:
      "This is a face-detector app powered by C++, OpenCV and Multimedia Pipeline like GStreamer.",
    tags: [
      {
        name: "c++17",
        color: "blue-text-gradient",
      },
      {
        name: "GStreamer",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: face,
    source_code_link: "https://github.com/adarsh-k27r/Face-Detector",
  },
];

export { services, technologies, experiences, testimonials, projects };
