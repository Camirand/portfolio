import React from "react";
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
  FaStripe,
} from "react-icons/fa";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandVite, TbBrandVercel } from "react-icons/tb";
import { SiPostman, SiExpress, SiRubyonrails, SiMysql } from "react-icons/si";

const TechnologiesSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue to-lightblue p-6 flex flex-wrap justify-around items-center">
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <FaHtml5 size={32} className="hover:text-hoverblue transition-all" />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <FaCss3 size={32} className="hover:text-hoverblue transition-all" />
      </a>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <BiLogoTailwindCss
          size={32}
          className="hover:text-hoverblue transition-all"
        />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <FaJs size={32} className="hover:text-hoverblue transition-all" />
      </a>
      <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <FaReact size={32} className="hover:text-hoverblue transition-all" />
      </a>
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <TbBrandNextjs
          size={32}
          className="hover:text-hoverblue transition-all"
        />
      </a>
      <a
        href="https://vitejs.dev/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <TbBrandVite
          size={32}
          className="hover:text-hoverblue transition-all"
        />
      </a>
      <a
        href="https://nodejs.org/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <FaNodeJs size={32} className="hover:text-hoverblue transition-all" />
      </a>
      <a
        href="https://expressjs.com/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <SiExpress size={32} className="hover:text-hoverblue transition-all" />
      </a>
      <a
        href="https://www.ruby-lang.org/en/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <FaGem size={32} className="hover:text-hoverblue transition-all" />
      </a>
      <a
        href="https://rubyonrails.org/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <SiRubyonrails
          size={32}
          className="hover:text-hoverblue transition-all"
        />
      </a>
      <a
        href="https://www.mongodb.com/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <BiLogoMongodb
          size={32}
          className="hover:text-hoverblue transition-all"
        />
      </a>
      <a
        href="https://wordpress.org/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <FaWordpress
          size={32}
          className="hover:text-hoverblue transition-all"
        />
      </a>
      <a
        href="https://vercel.com/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <TbBrandVercel
          size={32}
          className="hover:text-hoverblue transition-all"
        />
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <FaGithub size={32} className="hover:text-hoverblue transition-all" />
      </a>
      <a
        href="https://www.npmjs.com/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <FaNpm size={32} className="hover:text-hoverblue transition-all" />
      </a>
      <a
        href="https://www.postman.com/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <SiPostman size={32} className="hover:text-hoverblue transition-all" />
      </a>
      <a
        href="https://slack.com/"
        target="_blank"
        rel="noreferrer"
        className="p-2"
      >
        <FaSlack size={32} className="hover:text-hoverblue transition-all" />
      </a>
    </div>
  );
};

export default TechnologiesSection;
