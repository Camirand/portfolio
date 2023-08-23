import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGem,
  FaDatabase,
  FaStripe,
  FaWordpress,
  FaGithub,
  FaNpm,
  FaSlack,
} from "react-icons/fa";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandVite } from "react-icons/tb";
import { SiPostman, SiExpress, SiRubyonrails, SiMysql } from "react-icons/si";
import ProjectCard from "./ProjectCard";
import avatar from "../assets/avatar.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Plant clinic",
      description:
        "Développement d'une application fullstack qui permet à l'utilisateur d'identifier une plante ou la maladie d'une plante à partir d'une photo. Selon l'abonnement de l'utilisateur, il peut également obtenir des conseils pour traiter la maladie.",
      technologies: [
        <FaReact key="react" />,
        <BiLogoTailwindCss key="tailwindcss" />,
        <FaNodeJs key="nodejs" />,
        <SiExpress key="express" />,
        <BiLogoMongodb key="mongodb" />,
        <FaStripe key="stripe" />,
      ],
      imageUrl: avatar,
      projectLink: "lien_vers_projet_Plant_clinic",
    },
    {
      title: "Baja Life",
      description:
        "Redesign complet d'un site web wix. Baja Life offre des expériences de voyages personnalisés. La cliente désirait améliorer son UX/UI, intégrer un blog, intégrer un dashboard afin d'afficher ses tours et ses disponibilités ainsi qu'un système de paiement",
      technologies: [
        <FaReact key="react" />,
        <TbBrandNextjs key="nextjs" />,
        <BiLogoTailwindCss key="tailwindcss" />,
        <FaWordpress key="wordpress" />,
        <FaStripe key="stripe" />,
      ],
      imageUrl: avatar,
      projectLink: "lien_vers_projet_baja_life",
    },
  ];

  return (
    <div
      id="projects-section"
      className="p-4 bg-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSection;