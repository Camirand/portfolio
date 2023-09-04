import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import des icônes

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-white py-8 px-4">
        <div className="flex justify-center items-center space-x-4">
          {/* Nom */}
          <Link href="/contact">
            <span className="text-xm text-secondary font-bold">
              {new Date().getFullYear()} &copy; Marc-André Camirand
            </span>
          </Link>

          {/* Espace entre le nom et les icônes */}
          <div className="w-8"></div>

          {/* Icônes */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Camirand"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                className="text-secondary hover:text-blue cursor-pointer"
                size={24}
              />
            </a>
            <a
              href="https://ca.linkedin.com/in/marcandrecamirand"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                className="text-secondary hover:text-blue cursor-pointer"
                size={24}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
