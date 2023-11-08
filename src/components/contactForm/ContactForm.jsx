import React, { useState } from "react";
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";
import { useStyles } from "./ContactForm.styles";
import { FaArrowRight } from "react-icons/fa";

export default function ContactForm() {
  const classes = useStyles();
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setIsLoading(true);

    const { name, email, message } = formData;
    const sanitizedData = {
      name: "Name: " + DOMPurify.sanitize(name),
      email: "Email: " + DOMPurify.sanitize(email),
      message: "Message: " + DOMPurify.sanitize(message),
    };

    // const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    // const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    // const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    // const serviceID = "service_2svi5sl";
    // const templateID = "template_8781v0b";
    // const userID = "user_k8XMgvWkZThzIO7dKBfKI";

    const serviceID = "service_bzr4chd";
    const templateID = "template_87buw0r";
    const userID = "hQZVe76166o4-xLOy";

    emailjs
      .send(serviceID, templateID, sanitizedData, userID)
      .then((response) => {
        console.log("Email is sent successfully!", response.text);
        setFormData(initialState);
        setErrors({});
        setIsSent(true);
      })
      .catch((error) => {
        console.error("Email sending failed", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Le nom est requis";
    }

    if (!email.trim()) {
      errors.email = "L'e-mail est requis";
    } else if (!isValidEmail(email)) {
      errors.email = "Format d'email invalide";
    }

    if (!message.trim()) {
      errors.message = "Le message est requis";
    }

    return errors;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div>
      <div>
        <br />
      {isSent && (
        <div className="success-message">
          <p>Votre message a été envoyé avec succès !</p>
        </div>
      )}
      </div>
      {!isSent && (
        <form onSubmit={handleSubmit}>
          <div className={classes.formInput}>
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nom"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
              disabled={isLoading}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>
          <div className={classes.formInput}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              disabled={isLoading}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className={classes.formInput}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
              disabled={isLoading}
            ></textarea>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>
          <div className={classes.formInput}>
            <button type="submit" disabled={isLoading} className={classes.formButton}>
              <span>{isLoading ? "Envoi..." : "Envoyer"}</span>
              <FaArrowRight />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
