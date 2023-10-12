import React, { useState, useEffect, useCallback } from "react";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Head from "next/head";
import TransitionEffects from "@/components/TransitionEffects";
import Cta from "@/components/Cta";
import { useDarkMode } from "@/context/DarkModeContext";
import { motion } from "framer-motion";
import { SpotLights } from "@/components/SpotLights";

const ExperiencePage = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = useCallback(() => {
    const scrollPosition = window.scrollY;
    const educationElement = document.getElementById("education-section");
    if (educationElement) {
      const offsetTop = educationElement.offsetTop;
      if (scrollPosition >= offsetTop) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, [setDarkMode]);

  useEffect(() => {
    window.addEventListener("scroll", toggleDarkMode);
    return () => {
      window.removeEventListener("scroll", toggleDarkMode);
    };
  }, [toggleDarkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Expériences de Marc-André Camirand</title>
        <meta
          name="description"
          content="Portfolio de Marc-André Camirand, développeur FullStack."
        />
        <meta
          name="keywords"
          content="Marc-André Camirand, Développeur FullStack Québec, Expériences, Portfolio"
        />
        <meta name="author" content="Marc-André Camirand" />
        <meta
          property="og:title"
          content="Expériences de Marc-André Camirand"
        />
        <meta
          property="og:description"
          content="Portfolio de Marc-André Camirand, développeur FullStack."
        />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <TransitionEffects />

      <main
        className={`bg-primary py-4 ${darkMode ? "dark:bg-secondary" : ""}`}
      >
        <SpotLights />
        <Experience />
        <div id="education-section">
          <Education />
        </div>
        <Cta />
      </main>
    </div>
  );
};

export default ExperiencePage;
