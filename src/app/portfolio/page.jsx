"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-stone-950 to-stone-600",
    title: "Taxi Loire Valley Services",
    desc: "Conception d'un site One Page pour un service de taxi dans la région Orléanaise, incluant la création complète du logo, de la charte graphique, et du site en vanilla JS. Ce projet vise à offrir une présentation élégante et fluide des services, tout en assurant une expérience utilisateur optimale.",
    img: "/pictures/loire-valley-services.webp",
    link: "https://taxiloirevalleyservices.com",
  },
  {
    id: 2,
    color: "from-stone-600 to-stone-900",
    title: "DevMX, le blog",
    desc: "Création du blog privé 'DevMX' avec React, conçu pour un groupe de développeurs du même nom. Ce projet m'a permis de valider mon titre de développeur web et web mobile. J'ai réalisé l'intégralité du site, en passant par la conception du logo et l'élaboration de la charte graphique, pour offrir une plateforme dédiée à l'échange et au partage entre développeurs.",
    img: "/pictures/devMX-le-blog.webp",
    link: "https://github.com/Yiroma/Blog-DevMX",
  },
  {
    id: 3,
    color: "from-stone-900 to-stone-600",
    title: "Emmaüs Connect",
    desc: "Développement d'une application pour Emmaüs Connect permettant l'enregistrement et l'évaluation de la reprise de smartphones, avec un système d'authentification et une interface dédiée aux administrateurs. Création de l'interface graphique libre et respect des critères clients pour les fonctionnalités. Ce projet a été réalisé lors d'un hackathon intense de 48 heures.",
    img: "/pictures/emmaus-connect.webp",
    link: "https://github.com/Yiroma/Hackathon2-cHackahuete",
  },
  {
    id: 4,
    color: "from-stone-600 to-stone-900",
    title: "TodoList",
    desc: "Un classique dans la création d'un projet full-stack, la réalisation d'une todo list éditable simple et esthétique.",
    img: "/pictures/TodoList.webp",
    link: "https://github.com/Yiroma/Check_4_ToDoList",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <h1 className="h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Mes derniers projets
        </h1>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-sky-200 to-stone-950" />

            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white items-center">
                  <h2 className="font-bold text-xl md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h2>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
                  <Link href={item.link} className="w-full flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      Découvrir
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h2 className="text-4xl  md:text-6xl lg:text-8xl">Travaillons ensemble</h2>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl text-center">
                Développeur Web --- Web Designer ------
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 right-0 bottom-0 left-0 m-auto rounded-full bg-black text-white text-sm flex items-center justify-center"
          >
            Contactez-moi
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
