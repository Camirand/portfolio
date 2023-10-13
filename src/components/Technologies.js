import React from "react";
import { motion as m } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGem,
  FaWordpress,
  FaGithub,
  FaNpm,
  FaSlack,
} from "react-icons/fa";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandVite, TbBrandVercel } from "react-icons/tb";
import { SiPostman, SiExpress, SiRubyonrails } from "react-icons/si";

const technologies = [
  {
    icon: FaHtml5,
    name: "HTML5",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    icon: FaCss3,
    name: "CSS3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: BiLogoTailwindCss,
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },
  {
    icon: FaJs,
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { icon: FaReact, name: "React", link: "https://reactjs.org/" },
  { icon: TbBrandNextjs, name: "NextJS", link: "https://nextjs.org/" },
  { icon: TbBrandVite, name: "Vite", link: "https://vitejs.dev/" },
  { icon: FaNodeJs, name: "NodeJS", link: "https://nodejs.org/" },
  { icon: SiExpress, name: "ExpressJS", link: "https://expressjs.com/" },
  { icon: FaGem, name: "Ruby", link: "https://www.ruby-lang.org/en/" },
  {
    icon: SiRubyonrails,
    name: "Ruby on Rails",
    link: "https://rubyonrails.org/",
  },
  { icon: BiLogoMongodb, name: "MongoDB", link: "https://www.mongodb.com/" },
  { icon: FaWordpress, name: "WordPress", link: "https://wordpress.org/" },
  { icon: TbBrandVercel, name: "Vercel", link: "https://vercel.com/" },
  { icon: FaGithub, name: "GitHub", link: "https://github.com/" },
  { icon: FaNpm, name: "NPM", link: "https://www.npmjs.com/" },
  { icon: SiPostman, name: "Postman", link: "https://www.postman.com/" },
  { icon: FaSlack, name: "Slack", link: "https://slack.com/" },
];

const TechnologiesSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue to-lightblue p-6 flex flex-wrap justify-around items-center">
      {technologies.map((tech, index) => (
        <a
          key={tech.link}
          href={tech.link}
          target="_blank"
          rel="noreferrer"
          aria-label={tech.name}
          className={`p-2 transition-all transform duration-500 ease-in-out delay-${
            index * 100
          } hover:text-hoverblue`}
          style={{
            opacity: 0,
            animation: `fade-in-right ${index * 0.01}s forwards ${
              index * 0.1
            }s`,
          }}
        >
          <tech.icon size={32} />
        </a>
      ))}
    </div>
  );
};

export default TechnologiesSection;
