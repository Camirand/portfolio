import Header from "@/components/Header";
import Head from "next/head";
import TransitionEffects from "@/components/TransitionEffects";
import TechnologiesSection from "@/components/Technologies";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio de Marc-André Camirand</title>
        <meta
          name="description"
          content="Portfolio de Marc-André Camirand, développeur fullstack"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <TransitionEffects />
      <main>
        <Header />
        <TechnologiesSection />
      </main>
    </div>
  );
};

export default Home;
