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

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-primary px-4 flex flex-wrap justify-between items-center relative"
    >
      <Link href="/">
        <div className="flex items-center py-2">
          <Image src={logo} alt="Logo" width={36} height={36} />
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
              <NavLink href="/" text="Accueil" />
              <NavLink href="/realisations" text="Réalisations" />
              <NavLink href="/experiences" text="Expériences" />
            </div>
            <Button link="/contact" text="Embauchez-moi" onClick={closeMenu} />
          </motion.div>
        )}

        <div className="hidden lg:flex flex-row items-center space-x-6">
          <NavLink href="/" text="Accueil" />
          <NavLink href="/realisations" text="Réalisations" />
          <NavLink href="/experiences" text="Expériences" />
          <Button link="/contact" text="Embauchez-moi" />
        </div>
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
