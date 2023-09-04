import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGithub, FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/logo.png";
import { Button } from "./Button";

const NavLink = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [text]);

  return (
    <Link href={href}>
      <motion.div className="relative group">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute h-[2px] bg-blue bottom-[-1px] left-0 origin-left"
          style={{ width: textWidth }}
        />
        <span
          ref={textRef}
          className={`font-bold pb-1 ${
            isActive ? "text-blue" : "text-secondary hover:text-blue"
          }`}
        >
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (router.pathname === "/") {
        setVisible(true);
      } else if (window.innerWidth > 768) {
        setVisible(
          currentScrollPosition < 100 || currentScrollPosition <= scrollPosition
        );
      }

      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, router.pathname]);

  return (
    <motion.nav
      initial={{ translateY: 0 }}
      animate={{ translateY: visible ? 0 : "-100%" }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="bg-primary px-4 flex flex-wrap justify-between items-center fixed w-full top-0 z-50"
    >
      <Link href="/">
        <div className="flex items-center py-2">
          <Image src={logo} alt="Logo" width={36} height={36} priority={true} />
          <span className="text-secondary font-bold pl-6">
            Marc-André Camirand
          </span>
        </div>
      </Link>
      <button
        className="lg:hidden block text-secondary z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 270 }}
            transition={{
              type: "spring",
              stiffness: 10,
              damping: 1,
              duration: 1,
            }}
          >
            <FaTimes size={24} />
          </motion.div>
        ) : (
          <FaBars size={24} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-primary flex flex-col justify-center items-center z-10 lg:hidden"
          >
            <div onClick={closeMenu} className="mb-6 space-y-8">
              <NavLink key="Accueil" href="/" text="Accueil" />
              <NavLink
                key="Realisations"
                href="/realisations"
                text="Réalisations"
              />
              <NavLink
                key="Experiences"
                href="/experiences"
                text="Expériences"
              />
            </div>
            <Button
              key="Contact"
              link="/contact"
              text="Embauchez-moi"
              onClick={closeMenu}
            />
          </motion.div>
        )}

        <div className="hidden lg:flex flex-row items-center space-x-6">
          <NavLink key="AccueilDesktop" href="/" text="Accueil" />
          <NavLink
            key="RealisationsDesktop"
            href="/realisations"
            text="Réalisations"
          />
          <NavLink
            key="ExperiencesDesktop"
            href="/experiences"
            text="Expériences"
          />
          <Button key="ContactDesktop" link="/contact" text="Embauchez-moi" />
        </div>
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
