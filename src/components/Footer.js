import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-white text-center py-8">
        <span className="text-xm text-secondary font-semibold">
          {" "}
          {new Date().getFullYear()} &copy; Marc-André Camirand
        </span>
      </footer>
    </div>
  );
};

export default Footer;
