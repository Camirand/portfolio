import axios from "axios";

export default async function handler(req, res) {
  const { recaptchaValue } = req.body;

  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaValue}`;

  const recaptchaResponse = await axios.post(verificationURL);

  if (recaptchaResponse.data.success) {
    res.status(200).json({ status: "reCAPTCHA verification succeeded" });
  } else {
    res.status(400).json({ status: "reCAPTCHA verification failed" });
  }
}
