import React from "react";
import { motion as m } from "framer-motion";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedText = ({ text, classname = "" }) => {
  return (
    <div className="w-full mx-auto flex items-center justify-center text-center overflow-hidden pt-20">
      <m.h1
        className={`${classname}`}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <m.span key={index} className="inline-block" variants={childVariants}>
            {word}&nbsp;
          </m.span>
        ))}
      </m.h1>
    </div>
  );
};

export default AnimatedText;
