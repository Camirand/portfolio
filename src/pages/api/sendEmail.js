import sgMail from "@sendgrid/mail";
import { SiGmail } from "react-icons/si";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);
export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  console.log(req.body);

  const { email, name, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).send("Tous les champs sont requis.");
  }

  const content = {
    to: "camirand.mac@gmail.com",
    from: "camirand.mac@Gmail.com",
    subject: `Offre d'emploi de ${name}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message envoyé");
  } catch (error) {
    console.log("Erreur d'envoi de courriel", error);
    console.log("Détails de l'erreur:", error.response.body.errors);
    res.status(400).send("Erreur lors de l'envoi du message");
  }
};
