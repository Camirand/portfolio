import { FaGithub, FaLinkedin } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export const InputField = ({ type, name, placeholder, handleChange }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    required
    onChange={handleChange}
    className="block w-full p-2 mb-4 text-blue border border-blue-400 rounded-xl"
  />
);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("text-black");
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      setStatus("Veuillez confirmer que vous n'êtes pas un robot.");
      return;
    }

    // Vérification du reCAPTCHA côté serveur
    const recaptchaVerification = await fetch("/api/verifyRecaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recaptchaValue }),
    });

    const recaptchaData = await recaptchaVerification.json();

    if (recaptchaData.status !== "reCAPTCHA verification succeeded") {
      setStatus("Échec de la vérification du reCAPTCHA. Essayez à nouveau.");
      return;
    }

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    const data = await response.text();
    if (response.status === 200) {
      setStatusColor("text-blue");
    } else {
      setStatusColor("text-red-500");
    }

    setStatus(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center my-32 relative">
      <h1 className="text-5xl mb-6 text-secondary font-bold">Contactez-moi</h1>
      <div className="flex space-x-4 mb-6">
        <a href="https://github.com/Camirand" target="_blank" rel="noreferrer">
          <FaGithub
            className="text-secondary hover:text-blue cursor-pointer"
            size={24}
          />
        </a>
        <a
          href="https://ca.linkedin.com/in/marcandrecamirand"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            className="text-secondary hover:text-blue cursor-pointer"
            size={24}
          />
        </a>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center"
      >
        <InputField
          type="text"
          name="name"
          placeholder="Votre nom"
          handleChange={handleChange}
        />
        <InputField
          type="email"
          name="email"
          placeholder="info@votreentreprise.ca"
          handleChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          onChange={handleChange}
          rows="4"
          className="block w-full p-2 mb-4 text-blue border border-blue-400 rounded-xl"
        ></textarea>

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={handleRecaptchaChange}
        />
        <p className={`mt-4 ${statusColor}`}>{status}</p>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue to-lightblue text-white font-bold px-4 py-2 rounded-3xl hover:to-hoverblue transition-all mt-4"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
