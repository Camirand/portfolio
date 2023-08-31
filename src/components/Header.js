import Link from "next/link";
import Image from "next/image";
import avatar from "../assets/avatar.png";
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
  return (
    <div className="bg-primary px-6 flex flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2">
        <AnimatedText
          text={"<Développeur web>"}
          classname="text-4xl text-secondary font-bold"
        />
        <div className="text-gray-500 mt-6 text-left">
          <div className="flex items-center mt-2">
            <FaLaptopCode className="text-blue mr-2" />
            Développeur FullStack (2022 - ...)
          </div>
          <div className="flex items-center mt-2">
            <FaWordpress className="text-blue mr-2" />
            Développeur wordpress (2015 - ...)
          </div>
          <div className="flex items-center mt-2">
            <FaUserTie className="text-blue mr-2" />
            Ancien associé et planificateur financier (2013-2023)
          </div>

          <div className="flex items-center mt-2">
            <FaShip className="text-blue mr-2" />
            Ancien pirate des caraïbes
          </div>
          <div className="flex items-center mt-2">
            <FaBicycle className="text-blue mr-2" />
            Passionné de vélo de montagne.
          </div>
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
        <Image src={avatar} alt="Avatar" width={512} height={512} />
      </div>
    </div>
  );
};

export default Header;
