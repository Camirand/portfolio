import React, { useRef, useEffect } from "react";
import { motion as m, useScroll } from "framer-motion";
import Liicon from "./Liicon";
import { SiAsda } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

const Details = ({ position, company, time, adress, work }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });
  return (
    <li
      ref={ref}
      className="mb-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-left justify-between"
    >
      <Liicon reference={ref} progress={scrollYProgress} />
      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h3 className="capitalize text-2xl font-bold text-secondary">
          {position}
          {"\u00A0"}@ {"\u00A0"}
          <span className="text-blue"> {company}</span>
        </h3>
        <span className="capitalize font-medium text-secondary/75">
          <span className=" text-secondary font-bold">{time}</span> | {adress}
        </span>
        <ul className="font-medium w-full text-secondary/75 py-2">{work}</ul>
      </m.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    layoutEffect: false,
  });

  const experiences = [
    {
      position: "Développeur web",
      company: "Votre entreprise",
      time: "2023 - Futur",
      adress: "Province de Québec",
      work: (
        <>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              {
                "Dans laquelle je pourrai me visualiser et m'investir à long terme"
              }
            </div>
          </li>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              {
                "Dans laquelle la collaboration et le travail d'équipe est au coeur du succès"
              }
            </div>
          </li>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Dans laquelle je saurai élever mon expertise en développement web
            </div>
          </li>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Dans laquelle le plaisir et la performance règne
            </div>
          </li>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Dans laquelle je pourrai contribuer avec mon expertise en affaires
              au besoin
            </div>
          </li>
        </>
      ),
    },
    {
      position: "Développeur web",
      company: "Travailleur autonome",
      time: "2022-Présent",
      adress: "Province de Québec",

      work: (
        <>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Conception et développement FullStack de{" "}
              <span className="text-blue font-bold">Plantclinic</span> (React,
              Tailwinds, MongoDB, Redux, Stripe, NodeJS)
            </div>
          </li>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Redesign et développement FullStack de{" "}
              <span className="text-blue font-bold">BajaLife</span> (NextJS,
              Sanity, Stripe) - En cours
            </div>
          </li>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              {"Idéation et développement FullStack d'une application de"}{" "}
              <span className="text-blue font-bold">
                planification financière automatisée
              </span>{" "}
              (React, Tailwinds, MongoDB, Redux, Stripe, Rechart NodeJS) - En
              cours
            </div>
          </li>
        </>
      ),
    },
    {
      position: "Développeur web",
      company: "MIEUX PLANIFIER INC",
      time: "2015-Présent",
      adress: "Ville de Québec",
      work: (
        <>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Chargé du maintien de{" "}
              <span className="text-blue font-bold"> Mieux Planifier</span>{" "}
              (GatsbyJS, Cockpit CMS, fundData API, AWS)
            </div>
          </li>

          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Optimisation du CRM pour améliorer la productivité des conseillers
              et planificateurs financier
            </div>
          </li>

          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Gestion de stratégies web (google ads, facebook ads, webinaire,
              landing pages, etc.)
            </div>
          </li>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Conception et mise en place du site et de son contenu en 2015.{" "}
              (Wordpress)
            </div>
          </li>
        </>
      ),
    },
    {
      position: "Associé et planificateur financier",
      company: "MIEUX PLANIFIER INC",
      time: "2013-2023",
      adress: "Ville de Québec",
      work: (
        <>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Développement des affaires et gestion de comptes clients
            </div>
          </li>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Analyses, planification, suivis et optimisation des comptes
              clients et du cabinet
            </div>
          </li>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Gestion relationnelle avec les partenaires, fournisseurs et
              clients
            </div>
          </li>
          <li className="hover:text-secondary flex items-start">
            <div className="flex-shrink-0">
              <FaArrowRight className="text-blue mt-1" />
            </div>
            <div className="flex-grow ml-2">
              Recrutement, intégration et formation de personnel
            </div>
          </li>
        </>
      ),
    },
  ];

  return (
    <div className=" bg-primary my-32">
      <h2 className="w-full text-5xl font-bold text-secondary mb-20 text-center">
        Expériences
      </h2>

      <div className="w-[90%] mx-auto relative">
        {" "}
        {/* ligne vertitale */}
        <m.div
          id="experience-line"
          style={{ scaleY: scrollYProgress, originY: 0 }}
          className="absolute left-0 top-1 w-[4px] h-full custom-gradient"
          ref={ref}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          {experiences.map((exp) => (
            <Details key={exp.position + exp.company} {...exp} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
