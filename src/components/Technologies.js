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
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  { icon: FaCss3, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: BiLogoTailwindCss, link: "https://tailwindcss.com/" },
  {
    icon: FaJs,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { icon: FaReact, link: "https://reactjs.org/" },
  { icon: TbBrandNextjs, link: "https://nextjs.org/" },
  { icon: TbBrandVite, link: "https://vitejs.dev/" },
  { icon: FaNodeJs, link: "https://nodejs.org/" },
  { icon: SiExpress, link: "https://expressjs.com/" },
  { icon: FaGem, link: "https://www.ruby-lang.org/en/" },
  { icon: SiRubyonrails, link: "https://rubyonrails.org/" },
  { icon: BiLogoMongodb, link: "https://www.mongodb.com/" },
  { icon: FaWordpress, link: "https://wordpress.org/" },
  { icon: TbBrandVercel, link: "https://vercel.com/" },
  { icon: FaGithub, link: "https://github.com/" },
  { icon: FaNpm, link: "https://www.npmjs.com/" },
  { icon: SiPostman, link: "https://www.postman.com/" },
  { icon: FaSlack, link: "https://slack.com/" },
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
