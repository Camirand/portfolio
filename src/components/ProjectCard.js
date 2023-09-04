import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  projectLink,
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="bg-primary shadow-md rounded-xl flex flex-col mt-20">
      <div
        className="w-full h-56 relative rounded-t-lg overflow-hidden"
        onClick={openModal}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          priority={true}
        />
      </div>

      <div className="flex flex-col flex-grow p-4">
        <h2 className="text-secondary text-2xl font-bold mt-2">{title}</h2>
        <p className="text-gray-600 mt-2 flex-grow">{description}</p>
        <h3 className="text-secondary font-bold pt-4">
          Technologies utilisées:
        </h3>
        <div className="mt-2 flex flex-wrap">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-blue bg-lightblue rounded-full px-2 py-1 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="text-center pb-6">
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className={`inline-block text-white font-bold px-4 py-2 rounded-full custom-gradient transition-all mt-4 
                      ${
                        projectLink === "disabled"
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
          style={projectLink === "disabled" ? { pointerEvents: "none" } : {}}
        >
          {projectLink !== "disabled" ? "Voir le projet" : "À venir"}
        </a>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg relative">
            <button
              className="absolute -top-12 right-0 border border-white text-white hover:text-gray-900 hover:border-gray-900 custom-gradient p-2"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>
            <Image src={imageUrl} alt={title} width={600} height={400} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
