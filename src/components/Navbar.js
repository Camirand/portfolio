import { useState } from "react";
import { FaGithub, FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary px-4 flex flex-wrap justify-between items-center relative">
      {" "}
      <Link href="/">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={76} height={76} />
          <span className="text-secondary font-bold">Marc-André Camirand</span>
        </div>
      </Link>
      {/* mobile browsers */}
      <button
        className="lg:hidden block text-secondary z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-primary flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
          isOpen ? "block z-10" : "hidden -z-10"
        } lg:hidden`}
      >
        <Link href="/">
          <ul
            onClick={closeMenu}
            className="text-secondary font-bold pb-1 border-b-2 border-transparent hover:text-blue hover:border-blue mb-4"
          >
            Accueil
          </ul>
        </Link>
        <Link href="#projects-section">
          <ul
            onClick={closeMenu}
            className="text-secondary font-bold pb-1 border-b-2 border-transparent hover:text-blue hover:border-blue mb-4"
          >
            Réalisations
          </ul>
        </Link>
        <div className="flex justify-center mb-4">
          <a
            href="https://github.com/Camirand"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              className="text-secondary hover:text-blue cursor-pointer m-2"
              size={24}
            />
          </a>
          <a
            href="https://ca.linkedin.com/in/marcandrecamirand"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              className="text-secondary hover:text-blue cursor-pointer m-2"
              size={24}
            />
          </a>
        </div>
        <a href="/contact">
          <button className="bg-gradient-to-r from-blue to-lightblue text-white font-bold px-4 py-2 rounded-full hover:to-hoverblue transition-all">
            Embauchez-moi
          </button>
        </a>
      </div>
      {/*  desktop browsers */}
      <div className={`hidden lg:flex flex-row items-center space-x-6`}>
        <Link href="/">
          <ul className="text-secondary font-bold pb-1 border-b-2 border-transparent hover:text-blue hover:border-blue">
            Accueil
          </ul>
        </Link>
        <Link href="#projects-section">
          <ul className="text-secondary font-bold pb-1 border-b-2 border-transparent hover:text-blue hover:border-blue">
            Réalisations
          </ul>
        </Link>
        <a href="https://github.com/Camirand" target="_blank" rel="noreferrer">
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
        <a href="/contact">
          <button className="bg-gradient-to-r from-blue to-lightblue text-white font-bold px-4 py-2 rounded-full hover:to-hoverblue transition-all">
            Embauchez-moi
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
