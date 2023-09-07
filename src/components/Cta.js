import React from "react";
import { ButtonLight, ButtonDark } from "./Button";
import { useDarkMode } from "@/context/DarkModeContext";

const Cta = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="w-full bg-gradient-to-r from-blue to-lightblue p-12 flex flex-wrap justify-evenly items-center min-h-[70vh]">
      <h2 className="text-primary text-center text-3xl mx-4">
        {"Votre chance d'acquérir un nouveau talent"}
      </h2>
      {darkMode ? (
        <ButtonDark link={"/contact"} text={"Contactez-moi"} />
      ) : (
        <ButtonLight link={"/contact"} text={"Contactez-moi"} />
      )}
    </div>
  );
};

export default Cta;
