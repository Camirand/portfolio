import { DarkModeProvider, useDarkMode } from "@/context/DarkModeContext";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <MyAppInner Component={Component} pageProps={pageProps} />
    </DarkModeProvider>
  );
}
const MyAppInner = ({ Component, pageProps }) => {
  const { darkMode, setDarkMode } = useDarkMode();

  useEffect(() => {
    const isDarkMode = window.localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    setDarkMode(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Component
          {...pageProps}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default MyApp;
