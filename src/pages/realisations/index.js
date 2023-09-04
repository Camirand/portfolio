import React, { useEffect } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import Head from "next/head";
import Image from "next/image";
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
import avatar from "../../assets/workinprogress.png";
import portfolio from "../../assets/portfolio.png";
import Cta from "@/components/Cta";

const ProjectsSection = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const totalDocScrollLength = docHeight - windowHeight;
      const scrollPosition = Math.floor(
        (scrollTop / totalDocScrollLength) * 100
      );

      if (scrollPosition > 50) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "Plant clinic",
      description:
        "Développement d'une application fullstack qui permet à l'utilisateur d'identifier une plante ou la maladie d'une plante à partir d'une photo. Selon l'abonnement de l'utilisateur, il peut également obtenir des conseils pour traiter la maladie.",
      technologies: [
        <FaReact key="plant-clinic-react" />,
        <BiLogoTailwindCss key="plant-clinic-tailwindcss" />,
        <FaNodeJs key="plant-clinic-nodejs" />,
        <SiExpress key="plant-clinic-express" />,
        <BiLogoMongodb key="plant-clinic-mongodb" />,
        <FaStripe key="plant-clinic-stripe" />,
      ],
      imageUrl: avatar,
      projectLink: "disabled",
    },
    {
      title: "Baja Life",
      description:
        "Redesign complet d'un site web wix. Baja Life offre des expériences de voyages personnalisés. La cliente désirait améliorer son UX/UI, intégrer un blog, intégrer un dashboard afin d'afficher ses tours et ses disponibilités ainsi qu'un système de paiement.",
      technologies: [
        <FaReact key="baja-life-react" />,
        <TbBrandNextjs key="baja-life-nextjs" />,
        <BiLogoTailwindCss key="baja-life-tailwindcss" />,
        <FaWordpress key="baja-life-wordpress" />,
        <FaStripe key="baja-life-stripe" />,
      ],
      imageUrl: avatar,
      projectLink: "disabled",
    },
    {
      title: "Portfolio",
      description:
        "Développement de mon portfolio à partir du tout nouveau NextJS 13! Merci à Midjourney pour cette magnifique image en Hero.",
      technologies: [
        <FaReact key="portfolio-react" />,
        <TbBrandNextjs key="portfolio-nextjs" />,
        <BiLogoTailwindCss key="portfolio-tailwindcss" />,
        <FaCss3 key="portfolio-css3" />,
        <TbBrandVercel key="portfolio-vercel" />,
        <TbBrandGithub key="portfolio-github" />,
      ],
      imageUrl: portfolio,
      projectLink: "https://www.marcandrecamirand.com/",
    },
  ];

  const bgColor = darkMode ? "bg-secondary" : "bg-primary";
  const titleColor = darkMode ? "text-primary" : "text-secondary";

  return (
    <div className={bgColor}>
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

      <main
        className={`py-32 flex flex-col items-center justify-center ${bgColor}`}
      >
        <h2 className={`text-5xl font-bold mb-20 text-center ${titleColor}`}>
          Réalisations
        </h2>
        <div className="px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
      <Cta />
    </div>
  );
};

export default ProjectsSection;
