import React from "react";
import { motion } from "framer-motion";

export const SpotLights = () => {
  return (
    <div>
      {" "}
      <motion.div
        className="absolute z-0 rounded-full"
        initial={{ scale: 0.98 }}
        animate={{ scale: [0.98, 1, 0.98] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(15, 102, 253, 0.12) 5%, rgba(15, 102, 253, 0.10) 15%, rgba(255, 255, 255, 0.03) 75%, transparent 100%)",
          zIndex: 0,
          top: "5%",
          right: "0",
          width: "50vw",
          height: "50vw",
          transform: "translate(-50%, -50%)",
        }}
      ></motion.div>
    </div>
  );
};
