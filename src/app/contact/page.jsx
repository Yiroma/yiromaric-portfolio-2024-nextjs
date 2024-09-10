"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const sayHello = "Say Hello";

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
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
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
        </div>
        {/* FORM CONTAINER */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Chère Yiroma,</span>
          <textarea
            rows={6}
            name="user_message"
            value={formData.user_message}
            onChange={handleInputChange}
            className="bg-white bg-opacity-40 rounded border-b-2 border-b-black outline-none resize-none"
          />
          <span>My mail address is:</span>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            className="bg-white bg-opacity-40 rounded border-b-2 border-b-black outline-none"
          />

          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleInputChange}
            />{" "}
            {`J'accepte les mentions légales`}
          </label>
          <button type="submit" className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
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
