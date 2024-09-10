"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import DownloadCv from "@/components/downloadCv";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-full overflow-auto flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-12">
        {/* IMAGE CONTAINER */}
        <div className="min-h-[70%] lg:h-full lg:w-1/2 relative flex items-center justify-center">
          <Image
            src="/pictures/yiroma1080.webp"
            alt="image d'accueil"
            // width={250}
            // height={250}
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="w-full text-3xl lg:text-4xl xl:text-6xl font-bold">
            Yi Romaric,
            <br />
            Développeur Web
          </h1>

          {/* DESC */}
          <p className="md:text-xl">
            Développeur web spécialisé dans l’utilisation de technologies modernes comme Next.js,
            Tailwind CSS, je maîtrise également GitHub pour le versionning et la création
            d’interfaces sur Figma. <br />
            Je collabore efficacement au sein des équipes pour concevoir des solutions innovantes et
            performantes.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <DownloadCv />

            <button className="p-4 rounded-lg ring-1 ring-black">Contactez-moi</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
