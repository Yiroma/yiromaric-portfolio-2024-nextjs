"use client";

import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    id: 1,
    desc: "téléphone",
    link: "tel:+33695386099",
    icon: "/icons/phone.svg",
  },
  {
    id: 2,
    desc: "email",
    link: "mailto:yiromaric@gmail.com",
    icon: "/icons/email.svg",
  },
  {
    id: 3,
    desc: "whatsapp",
    link: "https://wa.me/33695386099",
    icon: "/icons/whatsapp.svg",
  },
];

const ContactsBtn = () => {
  return (
    <div className="w-full flex flex-row justify-center gap-8 md:p-8">
      {contacts.map((contact) => (
        <button
          key={contact.id}
          className="w-1/3 flex justify-center items-center p-4 rounded-lg ring-1 ring-black bg-black text-white font-semibold hover:bg-white hover:text-black"
        >
          <Link href={contact.link}>
            <Image src={contact.icon} alt={contact.desc} width={64} height={64} />
          </Link>
        </button>
      ))}
    </div>
  );
};

export default ContactsBtn;
