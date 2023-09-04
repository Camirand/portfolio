import React, { useState, useEffect, useRef } from "react";
import { useDarkMode } from "@/context/DarkModeContext";

const StickyButtonsSection = () => {
  const sectionRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const { darkMode, setDarkMode } = useDarkMode();

  const ButtonBg = darkMode ? "bg-secondary" : "bg-primary";
  const SectionBg = darkMode ? "bg-secondary" : "bg-white";
  const textColor = darkMode ? "text-primary" : "text-secondary";

  const cardInfo = [
    {
      id: "card1",
      title: "Sociable",
      description:
        "La qualité d'une équipe et ses relations interpersonnelles sont directement proportionnel au succès de l'entreprise. C'est primordial d'avoir du fun au travail. J'ai une excellente écoute en plus de savoir bien communiquer. Tant qu'à créer des liens, aussi bien en créer des vrais! ... et j'adore la bière.",
    },
    {
      id: "card2",
      title: "Analytique",
      description:
        "Je suis quelqu'un qui aime prendre le temps d'analyser et décoder une situation plus complexe. J'aime comprendre le pourquoi des choses. J'ai un profil de personnalité INTP, qui résulte de mon esprit logique et rationnel. J'aime trouver des solutions créatives à des problèmes complexes.",
    },
    {
      id: "card3",
      title: "Authentique",
      description:
        "Quand il s'agit d'authenticité, je suis le genre de personne qui ne joue pas un rôle. J'ai été associé de mon entreprise pendant une décennie. Être vrai et transparent avec les collègues et les clients a assurément contribué à cette longévité. C'est comme quand je fais du chocolat bean to bar : je préfère partir de l'état brut, sans artifice. Vous ne me verrez pas manger un chocolat commercial qui déborde de bonbon par dessus!",
    },
    {
      id: "card4",
      title: "Autodidacte",
      description:
        "Puisqu'en groupe, on avance plus souvent qu'autrement à la vitesse du plus lent, j'ai développé cette capacité d'aller chercher ce que j'ai envie et de progresser à mon rythme. Le meilleur apprentissage est par les erreurs, tant qu'on ne les répètes pas deux fois ... sinon ce n'est plus une erreur. ref: Horticulture, Ébénisterie, Chocolat :)",
    },
  ];

  const handleButtonClick = (cardId) => {
    setActiveCard(cardId);
    const element = document.getElementById(cardId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (sectionRef.current) {
      setIsSticky(window.scrollY >= sectionRef.current.offsetTop);

      const cards = ["card1", "card2", "card3", "card4"];
      const tolerance = 200;

      for (const card of cards) {
        const element = document.getElementById(card);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight - tolerance &&
          rect.bottom >= tolerance
        ) {
          setActiveCard(card);
          setDarkMode(card === "card3" || card === "card4");
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderButton = (card) => (
    <button
      onClick={() => handleButtonClick(card.id)}
      className={`
      transition duration-300 ease-in-out 
      w-1/4
      ${ButtonBg} shadow-xl rounded 
      text-xs sm:text-xs md:text-base lg:text-base xl:text-base
      font-semibold md:mx-2 lg:mx-2 xl:mx-2
      sm: p-2 md:p-5 lg:p-5 xl:p-5
      ${
        activeCard === card.id
          ? "text-primary bg-gradient-to-r from-blue to-lightblue"
          : `${textColor} hover:text-primary hover:bg-gradient-to-r hover:from-blue hover:to-lightblue`
      }
    `}
    >
      {card.title}
    </button>
  );

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col ${
        darkMode ? "bg-secondary" : "bg-primary"
      } pb-64`}
    >
      <div className="relative">
        <div
          className={`sticky top-12 z-10 flex justify-between flex-wrap md:flex-nowrap py-5 ${SectionBg}`}
        >
          {cardInfo.map((card) => renderButton(card))}
        </div>

        <h2
          className={`py-64 text-5xl ${
            darkMode ? "text-primary" : "text-secondary"
          } font-bold text-center`}
        >
          Pourquoi moi?
        </h2>
        <div className="flex flex-col">
          {cardInfo.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className={`flex flex-col self-center px-5 py-24 w-full md:w-1/2 lg:w-1/3 ${
                darkMode ? "bg-secondary" : "bg-primary"
              } border-l border-r border-lightblue ${
                activeCard === card.id
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-50 pointer-events-none"
              }`}
            >
              <h2
                className={`flex text-5xl self-center pt-40 ${
                  darkMode ? "text-primary" : "text-secondary"
                } py-10`}
              >
                {card.title}
              </h2>
              <p
                className={`desc text-center pb-40 ${
                  darkMode ? "text-primary" : "text-secondary"
                }`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyButtonsSection;
