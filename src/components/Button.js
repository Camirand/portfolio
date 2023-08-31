// Button.js
import React from "react";
import Link from "next/link";

export const Button = ({ text, link, target }) => {
  return (
    <div>
      <Link href={link} passHref>
        <button
          className="bg-gradient-to-r from-blue to-lightblue text-white font-bold px-4 py-2 rounded-full hover:to-hoverblue transition-all"
          target={target}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};
