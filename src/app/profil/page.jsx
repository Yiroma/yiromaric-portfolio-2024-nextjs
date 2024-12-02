"use client";

import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

import Brain from "@/components/brain";
import DownloadCv from "@/components/downloadCv";
import { BiographySign, ScrollIcon } from "@/components/SvgIcons";

const skills = [
  "Next.js",
  "React.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "SASS",
  "Express.js",
  "Node.js",
  "SQL",
  "Architecture MVC",
  "API RESTful",
  "Git",
  "GitHub",
  "Méthodologie Scrum",
  "Figma",
  "VsCode",
];

const experiences = {
  exp1: {
    title: "Développeur web & Web Designer",
    desc: "Analyse des besoins, Conception, Plannification, Développement, Intégration de bases de données, Déploiement, Optimisation des performances, Collaboration et Comunication, Support technique",
    date: "Février 2024 > Aujourd'hui",
    company: "Yiroma",
  },
  exp2: {
    title: "Développeur Full Stack",
    desc: " Développement du site “DevMX, le blog” pour le passage du titre professionnel",
    date: "Octobre 2023",
    company: "Wild Code School",
  },
  exp3: {
    title: "Développeur Full Stack",
    desc: "Structure de base, HTML, CSS, SASS, JavaScript, Développement Front-end React.js, Connaissance UI et UX, Conception Figma, Développement Back-end Express.js, Api RESTful, Gestion de base de données MySQL, Concept MVC, Versionning Git/Github, Méthodologie Agile SCRUM",
    date: "Mars 2023 > Juillet 2023",
    company: "Wild Code School",
  },
};

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      {/* CONTAINER */}
      <div className="h-[calc(100vh-6rem)] overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-32 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-2/3">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHIE</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              {`Bonjour,`} <br />
              <br /> {`Je m'appelle Romaric YI,`} <br />{" "}
              {`j'ai commencé le développement web par l'apprentissage des bases HTML, CSS et JavaScript.`}{" "}
              <br />{" "}
              {`Avec le temps, j'ai évolué vers React.js, et aujourd'hui, j'utilise
              principalement Next.js combiné à Tailwind CSS pour créer des applications performantes
              et élégantes.`}{" "}
              <br />{" "}
              {`J'ai également acquis une bonne maîtrise de GitHub, et je prends plaisir à concevoir
              des interfaces utilisateur via Figma.`}{" "}
              <br />{" "}
              {`Grâce à la méthodologie
              Scrum, je m’intègre facilement dans des projets d'équipe pour développer des solutions
              efficaces et innovantes.`}
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              {`"J'aime créer des expériences web qui allient performance et esthétique. Je suis prêt à relever de nouveaux défis et à collaborer avec des équipes
dynamiques."`}
            </span>
            {/* BIOGRAPHY SIGN SVG */}
            <div className="self-end">
              <BiographySign />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <ScrollIcon />
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded p-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* SKILLS SCROLL SVG */}
            <ScrollIcon />
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {/* EXPERIENCE 1 */}
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between min-h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {experiences.exp1.title}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">{experiences.exp1.desc}</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    {experiences.exp1.date}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 ml-3 rounded bg-white text-sm font-semibold w-fit">
                    {experiences.exp1.company}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              {/* EXPERIENCE 2 */}
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between min-h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {experiences.exp2.title}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">{experiences.exp2.desc}</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    {experiences.exp2.date}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 ml-3 rounded bg-white text-sm font-semibold w-fit">
                    {experiences.exp2.company}
                  </div>
                </div>
              </div>

              {/* EXPERIENCE 3 */}
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between min-h-48 mb-12">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {experiences.exp3.title}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">{experiences.exp3.desc}</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    {experiences.exp3.date}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 ml-3 rounded bg-white text-sm font-semibold w-fit">
                    {experiences.exp3.company}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              <DownloadCv />
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:w-1/3 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
