"use client";

import Link from "next/link";

const ContactMe = () => {
  return (
    <Link href="/contact" className="flex justify-center">
      <button className="p-4 rounded-lg ring-1 ring-black">Contactez-moi</button>
    </Link>
  );
};

export default ContactMe;
