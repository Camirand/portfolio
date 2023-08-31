import React from "react";

const Details = ({ position, company, companyLink, time, adress, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-full flex items-start">
      <div className="w-[4px] h-full bg-blue mr-4"></div>
      <div className="flex flex-col">
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
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className=" bg-primary py-20 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-secondary mb-32 text-center">
        Expériences
      </h2>
      <div className="w-[75%] mx-auto relative">
        <div className="absolute left-0 top-0 w-[4px] h-full bg-blue"></div>{" "}
        {/* Ligne verticale continue ici */}
        <ul className="flex flex-col items-start pl-8">
          <Details
            position="Développeur web"
            company="Freelancer"
            companyLink="www.mieuxplanifier.com"
            time="2022-Présent"
            adress="Province de Québec"
            work="lorem"
          />
          <Details
            position="Développeur web"
            company="MIEUX PLANIFIER INC"
            companyLink="www.mieuxplanifier.com"
            time="2015-Présent"
            adress="Ville de Québec"
            work="lorem"
          />
          <Details
            position="Planificateur financier"
            company="MIEUX PLANIFIER INC"
            companyLink="www.mieuxplanifier.com"
            time="2013-2023"
            adress="Ville de Québec"
            work="lorem"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
