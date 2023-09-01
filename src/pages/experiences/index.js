import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Head from "next/head";
import TransitionEffects from "@/components/TransitionEffects";
import Cta from "@/components/Cta";

const ExperiencePage = () => {
  return (
    <div>
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

      <main className="bg-primary py-4">
        <Experience />
        <Education />
      </main>
      <Cta />
    </div>
  );
};

export default ExperiencePage;
