import React from "react";
import Link from "next/link";

export const Button = ({ text, link, target, onClick }) => {
  return (
    <div onClick={onClick}>
      <Link href={link} passHref>
        <button
          className="custom-gradient text-white font-bold px-4 py-2 rounded-full"
          target={target}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export const ButtonLight = ({ text, link, target, onClick }) => {
  return (
    <div onClick={onClick}>
      <Link href={link} passHref>
        <button
          className="bg-primary text-secondary font-bold px-4 py-2 rounded-full hover:bg-secondary hover:text-primary transition-all"
          target={target}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};
