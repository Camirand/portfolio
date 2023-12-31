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
  TbBrandPrisma,
} from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import ProjectCard from "../../components/ProjectCard";
import avatar from "../../assets/workinprogress.png";
import portfolio from "../../assets/portfolio.png";
import aiassistant from "../../assets/aissistant.png";

import Cta from "@/components/Cta";
import { SpotLights } from "@/components/SpotLights";

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

      if (scrollPosition > 80) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setDarkMode]);

  const projects = [
    {
      title: "AI Assistant",
      description:
        "Développement d'une application fullstack SAAS qui permet à l'utilisateur de générer des photos, des conversations ou du code grâce à l'intelligence artificielle. L'utilisateur bénéficie de 5 crédits avant de passer au compte premium pour pouvoir poursuivre de façon illimitée.",
      technologies: [
        <FaReact key="aissistant-react" aria-label="React" />,
        <TbBrandNextjs key="aissistant-nextjs " aria-label="NextJS" />,
        <BiLogoTailwindCss
          key="aissistant-tailwindcss"
          aria-label="TailwindCSS"
        />,
        <FaStripe key="aissistant-stripe" aria-label="Stripe" />,
        <TbBrandVercel key="aissistant-vercel" aria-label="Vercel" />,
        <TbBrandPrisma key="aissistant-prisma" aria-label="Prisma" />,
      ],
      imageUrl: aiassistant,
      projectLink: "https://aissistantgpt.vercel.app/",
    },
    {
      title: "Plant clinic",
      description:
        "Développement d'une application fullstack qui permet à l'utilisateur d'identifier une plante ou la maladie d'une plante à partir d'une photo. Selon l'abonnement de l'utilisateur, il peut également obtenir des conseils pour traiter la maladie.",
      technologies: [
        <FaReact key="plant-clinic-react" aria-label="React" />,
        <BiLogoTailwindCss
          key="plant-clinic-tailwindcss"
          aria-label="TailwindCSS"
        />,
        <FaNodeJs key="plant-clinic-nodejs" aria-label="NodeJS" />,
        <SiExpress key="plant-clinic-express" aria-label="Express" />,
        <BiLogoMongodb key="plant-clinic-mongodb" aria-label="MongoDB" />,
        <FaStripe key="plant-clinic-stripe" aria-label="Stripe" />,
      ],
      imageUrl: avatar,
      projectLink: "disabled",
    },
    {
      title: "Baja Life",
      description:
        "Redesign complet d'un site web wix. Baja Life offre des expériences de voyages personnalisés. La cliente désirait améliorer son UX/UI, intégrer un blog, intégrer un dashboard afin d'afficher ses tours et ses disponibilités ainsi qu'un système de paiement.",
      technologies: [
        <FaReact key="baja-life-react" aria-label="React" />,
        <TbBrandNextjs key="baja-life-nextjs" aria-label="NextJS" />,
        <BiLogoTailwindCss
          key="baja-life-tailwindcss"
          aria-label="TailwindCSS"
        />,
        <FaWordpress key="baja-life-wordpress" aria-label="Wordpress" />,
        <FaStripe key="baja-life-stripe" aria-label="Stripe" />,
      ],
      imageUrl: avatar,
      projectLink: "disabled",
    },
    {
      title: "Portfolio",
      description:
        "Développement de mon portfolio à partir du tout nouveau NextJS 13! Merci à Midjourney pour cette magnifique image en Hero.",
      technologies: [
        <FaReact key="portfolio-react" aria-label="React" />,
        <TbBrandNextjs key="portfolio-nextjs" aria-label="NextJS" />,
        <BiLogoTailwindCss
          key="portfolio-tailwindcss"
          aria-label="TailwindCSS"
        />,
        <FaCss3 key="portfolio-css3" aria-label="CSS3" />,
        <TbBrandVercel key="portfolio-vercel" aria-label="Vercel" />,
        <TbBrandGithub key="portfolio-github" aria-label="Github" />,
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
        <SpotLights />
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
