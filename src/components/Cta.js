import React from "react";
import { ButtonLight } from "./Button";

const Cta = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue to-lightblue p-12 flex flex-wrap justify-evenly items-center min-h-[70vh]">
      <h2 className="text-primary text-center text-3xl mx-4">
        {"Votre chance d'acquérir un nouveau talent"}
      </h2>
      <div className="mx-4">
        <ButtonLight link={"/contact"} text={"Contactez-moi"} />
      </div>
    </div>
  );
};

export default Cta;
