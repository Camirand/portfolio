import React from "react";

export const Button = ({ text, link, target, onClick }) => {
  return (
    <div onClick={onClick}>
      <a href={link} target={target} rel="noopener noreferrer">
        <button className="custom-gradient text-white font-bold px-4 py-2 rounded-full">
          {text}
        </button>
      </a>
    </div>
  );
};

export const ButtonLight = ({ text, link, target, onClick }) => {
  return (
    <div onClick={onClick}>
      <a href={link} target={target} rel="noopener noreferrer">
        <button
          className="bg-primary text-secondary font-bold px-4 py-2 rounded-full hover:bg-secondary hover:text-primary transition-all"
          target={target}
        >
          {text}
        </button>
      </a>
    </div>
  );
};
