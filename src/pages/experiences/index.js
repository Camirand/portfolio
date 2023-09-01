import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Head from "next/head";
import TransitionEffects from "@/components/TransitionEffects";

const ExperiencePage = () => {
  return (
    <div>
      <Head>
        <title>Expériences de Marc-André Camirand</title>
        <meta
          name="description"
          content="Portfolio de Marc-André Camirand, développeur fullstack"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <TransitionEffects />

      <main className="p-4 bg-primary">
        <Experience />
        <Education />
      </main>
    </div>
  );
};

export default ExperiencePage;
