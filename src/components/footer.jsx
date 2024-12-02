"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-sky-800 text-white w-full h-16 flex flex-row items-center p-4">
      <div className="w-1/3">
        <Link href="/">
          <Image
            src="/logos/logo-white.svg"
            alt="Logo Yi Romaric, développeur web Next.js, React.js, Tailwind, MySQL"
            width={64}
            height={64}
          ></Image>
        </Link>
      </div>
      <Link href="/legals" className="w-1/3 text-center text-xs">
        Mentions légales
      </Link>
      <span className="w-1/3 text-right text-xs">
        Yi Romaric © {currentYear} tous droits réservés
      </span>
    </div>
  );
};

export default Footer;
