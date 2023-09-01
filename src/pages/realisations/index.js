import React from "react";
import Head from "next/head";
import TransitionEffects from "@/components/TransitionEffects";
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
import {
  TbBrandGithub,
  TbBrandNextjs,
  TbBrandVercel,
  TbBrandVite,
} from "react-icons/tb";
import { SiPostman, SiExpress, SiRubyonrails, SiMysql } from "react-icons/si";
import ProjectCard from "../../components/ProjectCard";
import avatar from "../../assets/avatar.png";
import portfolio from "../../assets/portfolio.png";
import Cta from "@/components/Cta";

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
        "Redesign complet d'un site web wix. Baja Life offre des expériences de voyages personnalisés. La cliente désirait améliorer son UX/UI, intégrer un blog, intégrer un dashboard afin d'afficher ses tours et ses disponibilités ainsi qu'un système de paiement.",
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
    {
      title: "Portfolio",
      description:
        "Développement de mon portfolio à partir du tout nouveau NextJS 13! Merci à Midjourney pour cette magnifique image en header.",
      technologies: [
        <TbBrandNextjs key="nextjs" />,
        <BiLogoTailwindCss key="tailwindcss" />,
        <TbBrandVercel key="vercel" />,
        <TbBrandGithub key="github" />,
      ],
      imageUrl: portfolio,
      projectLink: "https://www.marcandrecamirand.com/",
    },
  ];

  return (
    <div>
      <Head>
        <title>Réalisations de Marc-André Camirand</title>
        <meta
          name="description"
          content="Découvrez les projets réalisés par Marc-André Camirand, développeur FullStack."
        />
        <meta
          name="keywords"
          content="Marc-André Camirand, Développeur FullStack Québec, Projets, Réalisations"
        />
        <meta name="author" content="Marc-André Camirand" />
        <meta
          property="og:title"
          content="Réalisations de Marc-André Camirand"
        />
        <meta
          property="og:description"
          content="Découvrez les projets réalisés par Marc-André Camirand, développeur FullStack."
        />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <TransitionEffects />

      <main className="bg-primary py-32 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-secondary mb-20 text-center">
          Réalisations
        </h2>
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <Cta />
    </div>
  );
};

export default ProjectsSection;
