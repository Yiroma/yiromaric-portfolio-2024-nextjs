"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactsBtn from "@/components/contactsBtn";

const ContactPage = () => {
  const sayHello = "Bonjour";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    user_message: "",
    user_email: "",
    acceptTerms: false,
  });

  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    const { user_message, user_email, acceptTerms } = formData;

    if (!user_message || !user_email || !acceptTerms) {
      setError(
        !user_message
          ? "Le champ message est obligatoire."
          : !user_email
          ? "Le champ email est obligatoire."
          : "Vous devez accepter les mentions légales."
      );
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.error(error);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* CONTACT BTN CONTAINER */}
        <div className="lg:w-1/2 flex flex-col lg:h-full items-center justify-center gap-8 text-4xl lg:text-6xl mt-12 mb-12">
          <div>
            {sayHello.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
          <p className="text-xl">Discutons ensemble</p>
          <ContactsBtn />
        </div>
        {/* FORM CONTAINER */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:h-full lg:w-1/2 bg-sky-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-8 sm:p-10 md:p-14 lg:p-18 xl:p-24"
        >
          <span>Bonjour Romaric,</span>
          <textarea
            rows={6}
            name="user_message"
            placeholder="Ecrivez votre texte ici"
            value={formData.user_message}
            onChange={handleInputChange}
            className="p-2 bg-white bg-opacity-40 rounded border-b-2 border-b-black outline-none resize-none"
          />
          <span>Votre adresse mail:</span>
          <input
            type="email"
            name="user_email"
            placeholder="votremail@exemple.com"
            value={formData.user_email}
            onChange={handleInputChange}
            className="p-2 bg-white bg-opacity-40 rounded border-b-2 border-b-black outline-none"
          />

          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleInputChange}
            />{" "}
            {`J'accepte les `}
            <Link href="/mentions-légales" className="font-medium text-sky-700 underline">
              {`conditions d'utilisations`}
            </Link>
          </label>
          <button type="submit" className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Envoyer
          </button>
          {success && (
            <span className="text-green-600 font-semibold">Le message est bien envoyé !</span>
          )}
          {error && <span className="text-red-700 font-semibold">{error}</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
