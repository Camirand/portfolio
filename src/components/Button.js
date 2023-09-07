import React, { useState } from "react";

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
    <div onClick={onClick} className="relative hover-fill-effect">
      <div className="button-lightbackground"></div>
      <a
        href={link}
        target={target}
        rel="noopener noreferrer"
        className="inline-block"
      >
        <button className="button-text" target={target}>
          {text}
        </button>
      </a>
    </div>
  );
};

export const ButtonDark = ({ text, link, target, onClick }) => {
  return (
    <div onClick={onClick} className="relative hover-fill-effect-dark">
      <div className="button-darkbackground"></div>
      <a
        href={link}
        target={target}
        rel="noopener noreferrer"
        className="inline-block"
      >
        <button className="button-text" target={target}>
          {text}
        </button>
      </a>
    </div>
  );
};
