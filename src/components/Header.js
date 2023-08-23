import Image from "next/image";
import avatar from "../assets/avatar.png";
import {
  FaShip,
  FaUserTie,
  FaBicycle,
  FaLaptopCode,
  FaWordpress,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-primary px-6 flex flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center w-full md:w-1/3">
        <h1 className="text-3xl text-secondary font-bold pt-10 ">
          {"<Développeur web>"}
        </h1>
        <div className="text-gray-500 mt-6 text-center">
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
            Associé et planificateur financier (2013-2023)
          </div>

          <div className="flex items-center mt-2">
            <FaShip className="text-blue mr-2" />
            Ancien pirate des caraïbes
          </div>
          <div className="flex items-center mt-2">
            <FaBicycle className="text-blue mr-2" />
            Passionné de vélo de montagne.
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
