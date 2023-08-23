import Image from "next/image";

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  projectLink,
}) => {
  return (
    <div className="bg-primary shadow-md rounded-xl flex flex-col px-10 mt-20">
      <div className="w-full h-56 relative">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-t-lg"
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
          className="inline-block bg-gradient-to-r from-blue to-lightblue text-white font-bold px-4 py-2 rounded-full hover:to-hoverblue transition-all mt-4"
        >
          Voir le projet
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
