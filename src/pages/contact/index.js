import Contact from "@/components/Contact";
import Head from "next/head";
import TransitionEffects from "@/components/TransitionEffects";
import Cta from "@/components/Cta";

import { SpotLights } from "@/components/SpotLights";

const ContactPage = () => {
  return (
    <div>
      <Head>
        <Head>
          <title>Contact de Marc-André Camirand</title>
          <meta
            name="description"
            content="Contactez Marc-André Camirand, développeur FullStack."
          />
          <meta
            name="keywords"
            content="Marc-André Camirand, Développeur FullStack Québec, Contact"
          />
          <meta name="author" content="Marc-André Camirand" />
          <meta property="og:title" content="Contact de Marc-André Camirand" />
          <meta
            property="og:description"
            content="Contactez Marc-André Camirand, développeur FullStack."
          />
          <meta property="og:image" content="/logo.png" />
          <link rel="icon" href="/logo.png" />
        </Head>
      </Head>
      <TransitionEffects />

      <main className="bg-white py-4">
        <SpotLights />
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
