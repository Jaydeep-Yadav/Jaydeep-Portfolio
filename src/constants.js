// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

// Experience Section Logo's
import Hexaware from './assets/company_logo/Hexaware.png';

// Education Section Logo's
import csit from './assets/education_logo/csit.png';
import school from './assets/education_logo/school.jpg';

// Project Section Logo's
import jobhunt from "../src/assets/work_logo/jobhunt.png"
import devconnect from "../src/assets/work_logo/DevConnect.png"

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VSCode', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Hexaware,
    role: "Software Engineer",
    company: "Hexaware Technologies",
    date: "May 2022 - Present",
    desc: "Developed dynamic and scalable applications handling both frontend and backend development.\nCollaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "ServiceNow"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: csit,
    school: "Chhatrapati Shivaji Institute of Technology",
    date: "July 2018 - May 2022",
    grade: "9.8 CGPA / 90.4 %",
    desc: "I have completed my bachelor's degree (B.tech) with Honors in Computer Science and Engineering from CSIT, Durg.",
    degree: "B.tech Hons. in Computer Science and Engineering",
  },
  {
    id: 1,
    img: school,
    school: "Mother Convent School, Durg",
    date: "Apr 2017 - March 2018",
    grade: "92.4 %",
    desc: "I completed my class 12th education from Mother Convent School, Durg, under CG board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "Class 12th - PCM",
  },
  {
    id: 2,
    img: school,
    school: "Mother Convent School, Durg",
    date: "Apr 2015 - March 2016",
    grade: "88.3 %",
    desc: "I completed my class 10th education from Mother Convent School, Durg, under the CG board, where I studied Science.",
    degree: "Class 10th",
  },
];

export const projects = [
  {
    id: 0,
    title: "Job Hunt",
    description:
      "Full-stack job search app with posting, editing, and tracking jobs.",
    image: jobhunt,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Node", "MongoDB", "Render", "Netlify"],
    github: "https://github.com/Jaydeep-Yadav/Job-Hunt",
    webapp: "https://job-hunt-jaydeep.netlify.app/",
  },
  {
    id: 0,
    title: "Dev Connect",
    description:
      "Connect place for developers with Real Time Chat.",
    image: devconnect,
    tags: ["React JS", "Redux", "Daisy UI", "Node", "Express", "Socket IO", "MongoDB", "Advance Auth", "AWS", "Nginx", "PM2"],
    github: "https://github.com/Jaydeep-Yadav/Dev-Connect",
    webapp: "http://13.60.198.108/",
  },
];  