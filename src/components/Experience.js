import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Details = React.forwardRef(
  ({ position, company, companyLink, time, adress, work, isActive }, ref) => {
    return (
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-full flex items-start"
      >
        <div className="relative mr-4">
          <div className="w-[4px] h-full bg-blue"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-10 left-[-70px] text-blue font-bold transform -rotate-90"
          >
            {time.split("-")[0]}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex flex-col"
        >
          <h3 className="capitalize font-bold text-2xl text-secondary">
            {position}&nbsp;
            <a
              href={
                companyLink.startsWith("http")
                  ? companyLink
                  : `http://${companyLink}`
              }
              target="_blank"
              rel="noreferrer"
              className="text-blue capitalize"
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium text-secondary/75">
            {time} | {adress}
          </span>
          <p className="font-medium w-full text-secondary">{work}</p>
        </motion.div>
      </li>
    );
  }
);
Details.displayName = "Details";

const Experience = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [activeDetail, setActiveDetail] = useState(null);

  const detailsRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const positions = detailsRefs.current.map(
      (ref) => ref.current.offsetTop - 50
    );
    const maxPosition = Math.max(...positions);
    let newActiveDetail = null;

    for (let i = 0; i < positions.length; i++) {
      if (scrollY >= positions[i]) {
        newActiveDetail = i;
      }
    }

    setActiveDetail(newActiveDetail);
    controls.start({
      height: `${((newActiveDetail + 1) / positions.length) * 100}%`,
    });
  }, [scrollY, controls]);

  return (
    <div className=" bg-primary py-20 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-secondary mb-20 text-center">
        Réalisations
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-0 top-0 w-[4px] bg-blue"
          initial={{ height: "33.33%" }}
          animate={controls}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <ul className="flex flex-col items-start pl-8">
          <Details
            ref={detailsRefs.current[0]}
            position="Développeur web"
            company="Votre entreprise"
            companyLink="/experiences"
            time="2023 - Futur"
            adress="Province de Québec"
            work="lorem"
            isActive={activeDetail >= 0}
          />
          <Details
            ref={detailsRefs.current[1]}
            position="Développeur web"
            company="Freelancer"
            companyLink="www.mieuxplanifier.com"
            time="2022-Présent"
            adress="Province de Québec"
            work="lorem"
            isActive={activeDetail >= 1}
          />
          <Details
            ref={detailsRefs.current[2]}
            position="Développeur web"
            company="MIEUX PLANIFIER INC"
            companyLink="www.mieuxplanifier.com"
            time="2015-Présent"
            adress="Ville de Québec"
            work="lorem"
            isActive={activeDetail >= 2}
          />
          <Details
            ref={detailsRefs.current[3]}
            position="Planificateur financier"
            company="MIEUX PLANIFIER INC"
            companyLink="www.mieuxplanifier.com"
            time="2013-2023"
            adress="Ville de Québec"
            work="lorem"
            isActive={activeDetail >= 3}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
