import Header from "@/components/Header";
import Head from "next/head";
import TransitionEffects from "@/components/TransitionEffects";
import TechnologiesSection from "@/components/Technologies";
import StickyButtonsSection from "@/components/StickyButtonsSection";
import Cta from "@/components/Cta";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio de Marc-André Camirand</title>
        <meta
          name="description"
          content="Bienvenue sur le portfolio de Marc-André Camirand, développeur FullStack."
        />
        <meta
          name="keywords"
          content="Marc-André Camirand, Développeur Fullstack Québec, Portfolio, Accueil"
        />
        <meta name="author" content="Marc-André Camirand" />
        <meta property="og:title" content="Portfolio de Marc-André Camirand" />
        <meta
          property="og:description"
          content="Bienvenue sur le portfolio de Marc-André Camirand, développeur FullStack."
        />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <TransitionEffects />
      <main>
        <Header />
        <TechnologiesSection />
        <StickyButtonsSection />
        <Cta />
      </main>
    </div>
  );
};

export default Home;
