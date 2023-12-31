import React, { useRef } from "react";
import { motion as m, useScroll } from "framer-motion";
import Liicon from "./Liicon";
import { useDarkMode } from "@/context/DarkModeContext";

const Details = ({ type, time, place, adress, info, darkMode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  const titleColor = darkMode ? "text-primary" : "text-secondary";
  const subtitleColor = darkMode ? "text-primary/75" : "text-secondary/75";

  return (
    <li
      ref={ref}
      className="mb-16 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-left justify-between"
    >
      <Liicon reference={ref} progress={scrollYProgress} />
      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h3 className={`capitalize text-2xl font-bold ${titleColor}`}>
          {type}
          {"\u00A0"}@ {"\u00A0"}
          <span className="text-blue"> {place}</span>
        </h3>
        <span className={`capitalize font-medium ${subtitleColor}`}>
          {time} | {adress}
        </span>
      </m.div>
    </li>
  );
};

const Education = () => {
  const { darkMode } = useDarkMode();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    layoutEffect: false,
  });
  const educations = [
    {
      type: "Bootcamp Développeur FullStack",
      place: "Le Wagon",
      time: "2022",
      adress: "Montréal",
    },
    {
      type: "Titre planificateur financier",
      place: "Institut québécois de planification financière (IQPF)",
      time: "2013",
      adress: "Province de Québec",
    },
    {
      type: "Certificat représentant en épargne collective",
      place: "Canadian Securities Institute (CSI)",
      time: "2012",
      adress: "Province de Québec",
    },
    {
      type: "Certificat conseiller en sécurité financière",
      place: "Autorité des marchés financiers (AMF)",
      time: "2012",
      adress: "Province de Québec",
    },
    {
      type: "Bacc. en administration des affaires - services financiers",
      place: "Université Laval",
      time: "2010-2012",
      adress: "Ville de Québec",
    },
  ];
  const titleColor = darkMode ? "text-primary" : "text-secondary";

  return (
    <div className="pt-12 pb-32">
      <h2
        className={`w-full text-5xl font-bold ${titleColor} py-20 text-center`}
      >
        Éducation
      </h2>

      <div className="w-[90%] mx-auto relative">
        <m.div
          id="education-line"
          style={{ scaleY: scrollYProgress, originY: 0 }}
          className="absolute left-0 top-1 w-[4px] h-full custom-gradient"
          ref={ref}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          {educations.map((exp) => (
            <Details key={exp.type} {...exp} darkMode={darkMode} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
