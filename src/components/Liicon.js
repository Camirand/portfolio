import React from "react";
import { motion as m, useScroll } from "framer-motion";

const Liicon = ({ reference, educationRef, progress }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-[-35px] stroke-blue">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-blue stroke-1 fill-none"
        />
        <m.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[3px] fill-primary offset-circle"
          style={{ pathLength: progress }}
        />
        <circle cx="75" cy="50" r="10" className="stroke-1 fill-blue" />
      </svg>
    </figure>
  );
};

export default Liicon;
