import Link from "next/link";
import Image from "next/image";
import avatar from "../assets/digart.png";
import AnimatedText from "./AnimatedText";
import { Button } from "./Button";
import {
  FaShip,
  FaUserTie,
  FaBicycle,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaWordpress,
} from "react-icons/fa";

const Header = () => {
  const experienceData = [
    { icon: FaLaptopCode, text: "Développeur FullStack (2022 - ...)" },
    { icon: FaWordpress, text: "Développeur wordpress (2015 - ...)" },
    {
      icon: FaUserTie,
      text: "Ancien associé et planificateur financier (2013-2023)",
    },
    { icon: FaShip, text: "Ancien pirate des caraïbes" },
    { icon: FaBicycle, text: "Passionné de vélo de montagne." },
  ];

  return (
    <div className="bg-primary px-6 flex flex-col md:flex-row min-h-[90vh]">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2">
        <AnimatedText
          text={"<Développeur web>"}
          classname="text-4xl text-secondary font-bold"
        />
        <div className="text-gray-500 mt-6 text-left">
          {experienceData.map(({ icon: Icon, text }, index) => (
            <div className="flex items-center mt-2" key={index}>
              <Icon className="text-blue mr-2" aria-label="icon description" />
              {text}
            </div>
          ))}
          <div className="py-8 text-center">
            <Button
              link={"/CV.pdf"}
              text={
                <>
                  Curriculum Vitae
                  <FaExternalLinkAlt className="ml-2 text-white inline-block" />
                </>
              }
              target={"_blank"}
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-end items-center">
        <Image
          src={avatar}
          alt="Avatar"
          width={512}
          height={512}
          priority={true}
        />
      </div>
    </div>
  );
};

export default Header;
