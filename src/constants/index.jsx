import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import QuickNote from "../assets/QuickNote.png";
import iNAVTracker from "../assets/iNAV_Tracker.png";
import FeedbackFusion from "../assets/FeedbackFusion.png";
import cicd from "../assets/ci-cd.png";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";


export const NAVIGATION_LINKS = [
  { label: "Intro", href: "#intro" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Urvish Prajapati",
  Intro: "I'm",
  greet: "Hello there!",
  description:
    "Full Stack Developer building scalable web applications with modern technologies.",
};

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "2.5+ years",
  },
  {
    icon: (
      <TbBrandRedux
        className="text-4xl lg:text-5xl"
        style={{ color: "#764abc" }}
      />
    ),
    name: "Redux",
    experience: "2.5+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2.5+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "2.5+ years",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js",
    experience: "2.5+ years",
  },
  {
    icon: <TbBrandTypescript className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "TypeScript",
    experience: "2.5+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "2.5+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-[#336791] lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "2.5+ years",
  },
  {
    icon: <FaAws className="text-4xl text-white lg:text-5xl" />,
    name: "AWS",
    experience: "2+ years",
  },
  {
    icon: <FaDocker className="text-4xl text-docker lg:text-5xl" />,
    name: "Docker",
    experience: "2+ years",
  },
  {
    icon: (
      <img
        src={cicd}
        alt="CI/CD"
        className="w-10 h-10 lg:w-12 lg:h-12 object-contain filter invert"
      />
    ),
    name: "CI/CD",
    experience: "2+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company: "Prepseed",
    duration: "May 2023 - Present",
    description:
      "𝗟𝗲𝗱 end-to-end development of 𝟰 𝗽𝗿𝗼𝗷𝗲𝗰𝘁𝘀, from requirement gathering and client communication to development and deployment. Engineered a 𝗖𝗜/𝗖𝗗 pipeline that reduced deployment time from 15 minutes to 6 minutes, achieving a 𝟲𝟬% 𝗿𝗲𝗱𝘂𝗰𝘁𝗶𝗼𝗻. Built and deployed scalable full-stack applications on 𝗔𝗪𝗦 infrastructure using 𝗠𝗘𝗥𝗡 and 𝗡𝗲𝘅𝘁.𝗷𝘀. Designed and optimized database systems using 𝗠𝗼𝗻𝗴𝗼𝗗𝗕 and 𝗣𝗼𝘀𝘁𝗴𝗿𝗲𝗦𝗤𝗟 for efficient and reliable data management. Developed 𝗥𝗘𝗦𝗧 𝗔𝗣𝗜𝘀 for multiple modules, enhancing system functionality and data accessibility. Integrated 𝗥𝗮𝘇𝗼𝗿𝗽𝗮𝘆 for secure payments and 𝗗𝗲𝗹𝗵𝗶𝘃𝗲𝗿𝘆 APIs for efficient order shipping and tracking. Implemented 𝗥𝗕𝗔𝗖 to ensure secure and controlled permission management.",
  },
  {
    title: "React.js Intern",
    company: "SoftCoding Solutions",
    duration: "Jul 2022 - Aug 2022",
    description:
      "Developed the frontend of the Student Portal Web App, ensuring a user friendly and responsive interface. Managed global state using 𝗥𝗲𝗱𝘂𝘅 and Redux Thunk, enhancing application performance and maintainability. Utilized 𝗖𝗵𝗮𝗿𝘁.𝗷𝘀 for visualizing student attendance data, providing clear and interactive insights.",
  },
  {
    title: "MERN Stack Intern",
    company: "NullClass",
    duration: "Jan 2022 - Feb 2022",
    description:
      "Implemented 𝗝𝗪𝗧 based authentication to secure user sessions and protect API endpoints. Ensured the website’s responsiveness across mobile and tablet devices, delivering an optimal user experience across all platforms.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Feedback Fusion",
    image: FeedbackFusion,
    Link: "https://feedback-fusion.urvish.site/",
  },
  {
    id: 2,
    name: "i-NAV Tracker",
    image: iNAVTracker,
    Link: "https://inav-tracker.urvish.site/",
  },
  {
    id: 3,
    name: "QuickNote",
    image: QuickNote,
    Link: "https://quicknote.urvish.site/",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/urvish-j-p/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/urvish-j-p",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/urvish_j_p/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/urvish_j_p",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.facebook.com/urvish.j.p",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
];
