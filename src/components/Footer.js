import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  const bgColor = darkMode ? "bg-secondary" : "bg-primary";
  const textColor = darkMode ? "text-primary" : "text-secondary";
  const commonTextClass = `hover:text-lightblue ${textColor}`;

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/Camirand",
    },
    {
      icon: FaLinkedin,
      url: "https://ca.linkedin.com/in/marcandrecamirand",
    },
  ];

  return (
    <div>
      <footer className={`py-6 px-2 ${bgColor} ${textColor}`}>
        <div className="flex justify-center items-center space-x-4">
          <Link href="/contact">
            <span className={`text-xm font-bold ${commonTextClass}`}>
              {new Date().getFullYear()} &copy; Marc-André Camirand
            </span>
          </Link>
          <div className="w-8"></div>

          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a key={index} href={url} target="_blank" rel="noreferrer">
                <Icon
                  className={`${commonTextClass} cursor-pointer`}
                  size={24}
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
