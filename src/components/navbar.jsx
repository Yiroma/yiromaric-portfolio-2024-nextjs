"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import NavLink from "./navLink";

const links = [
  { url: "/", title: "Accueil" },
  { url: "/profil", title: "Profil" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const socialLinks = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/Yiroma",
    img: "/icons/github.svg",
    alt: "Lien vers GitHub",
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/yiromaric/",
    img: "/icons/linkedin.svg",
    alt: "Lien vers LinkedIn",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      {/* NAVBAR DESKTOP */}
      <div className="hidden md:flex gap-4 w-1/3 ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="flex xl:w-1/3 xl:justify-center">
        <Link href="/" className="flex">
          <Image
            src="/logos/logo.svg"
            alt="logo Yi Romaric - Développeur Web"
            width={80}
            height={80}
          />
          <Image
            src="/logos/logoText.svg"
            alt="logo Yi Romaric - Développeur Web"
            width={120}
            height={80}
            className="hidden sm:hidden md:hidden lg:block"
          />
        </Link>
      </div>

      {/* SOCIAL LINK */}
      <div className="hidden md:flex justify-end gap-4 w-1/3">
        {socialLinks.map((social) => (
          <Link href={social.url} key={social.id} target="_blank">
            <Image src={social.img} alt={social.alt} width={26} height={26} />
          </Link>
        ))}
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* BURGER MENU */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-[100]"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
