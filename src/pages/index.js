import Header from "@/components/Header";
import Head from "next/head";

import ProjectsSection from "@/components/ProjectsSection";
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
      <main>
        <Header />
        <TechnologiesSection />
        <ProjectsSection />
      </main>
    </div>
  );
};

export default Home;
