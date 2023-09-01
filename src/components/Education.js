import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const EducationDetail = React.forwardRef(
  ({ school, degree, time, adress, description, isActive }, ref) => {
    return (
      <li
        ref={ref}
        className="py-12 first:mt-0 last:mb-0 w-full flex items-start"
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
            {degree}&nbsp;
            <span className="text-blue">@{school}</span>
          </h3>
          <span className="capitalize font-medium text-secondary/75">
            {time} | {adress}
          </span>
          <p className="font-medium w-full text-secondary">{description}</p>
        </motion.div>
      </li>
    );
  }
);

const Education = () => {
  const eduControls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [activeEduDetail, setActiveEduDetail] = useState(0);
  const eduSectionRef = useRef(null);

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
    const eduTop = eduSectionRef.current ? eduSectionRef.current.offsetTop : 0;
    const updateActiveEduDetail = () => {
      const positions = detailsRefs.current.map((ref) =>
        ref.current ? ref.current.offsetTop - 50 : 0
      );
      let newActive = null;
      for (let i = 0; i < positions.length; i++) {
        if (scrollY >= positions[i]) {
          newActive = i;
        }
      }
      setActiveEduDetail(newActive);
      eduControls.start({
        height: `${((newActive + 1) / positions.length) * 100}%`,
      });
    };

    if (scrollY >= eduTop) {
      updateActiveEduDetail();
    }
  }, [scrollY, eduControls]);

  return (
    <div
      ref={eduSectionRef}
      className="py-32 flex flex-col items-center justify-center"
    >
      <h2 className="text-5xl font-bold text-secondary mb-32 text-center">
        Éducation
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-0 top-0 w-[4px] bg-blue"
          initial={{ height: "0%" }}
          animate={eduControls}
          transition={{ duration: 0.8 }}
        ></motion.div>
        <ul className="px-4 flex flex-col items-start pl-8">
          <EducationDetail
            ref={detailsRefs.current[0]}
            school="Le Wagon"
            degree="Bootcamp développement web FullStack"
            time="2022"
            adress="Montréal"
            description="Programme intensif de 9 semaines pour apprendre à coder, concevoir et déployer des applications web."
            isActive={activeEduDetail >= 0}
          />
          <EducationDetail
            ref={detailsRefs.current[1]}
            school="IQPF"
            degree="Titre planificateur financier"
            time="2013"
            adress="Ville de Québec"
            description="Le titre de planificateur financier est le plus haut niveau de compétence en planification financière au Québec."
            isActive={activeEduDetail >= 1}
          />
          <EducationDetail
            ref={detailsRefs.current[2]}
            school="Université Laval"
            degree="Baccalauréat en administration des affaires, majeur en services financiers"
            time="2010-2013"
            adress="Ville de Québec"
            description="Le baccalauréat en administration des affaires (B.A.A.) est un programme de premier cycle de 90 crédits."
            isActive={activeEduDetail >= 2}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
EducationDetail.displayName = "Education";
