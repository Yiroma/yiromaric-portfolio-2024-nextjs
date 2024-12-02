"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const LegalsPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="min-h-[calc(100vh-6rem)] flex flex-col py-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <h1 className="text-center text-2xl md:text-4xl xl:text-6xl font-semibold">
          Mentions Légales
        </h1>

        <h2 className="text-xl font-bold pt-8 pb-2">Editeur du site</h2>
        <p>
          Le présent site est édité par : <br />
          <b>Nom :</b> Romaric YI <br />
          <b>Contact :</b>{" "}
          <Link href="mailto:yiromaric@gmail.com" className="text-sky-800 font-semibold underline">
            yiromaric@gmail.com
          </Link>{" "}
          /{" "}
          <Link href="tel:+3395386099" className="text-sky-800 font-semibold underline">
            06 95 38 60 99
          </Link>
        </p>

        <h2 className="text-xl font-bold pt-8 pb-2">Hébergeur du site</h2>
        <p>
          L’hébergement du site est assuré par : <br />
          <b>{`Nom de l'hébergeur:`}</b> Hostinger International Ltd. <br />
          <b>Adresse :</b> 61, Lordou Vironos Street, 6023 Larnaca, Chypre
          <br />
          <b>Site web :</b>{" "}
          <Link
            href="https://www.hostinger.fr/contact"
            className="text-sky-800 font-semibold underline"
          >
            https://www.hostinger.fr/contact
          </Link>
        </p>

        <h2 className="text-xl font-bold pt-8 pb-2">Propriété intellectuelle</h2>
        <p>
          Tous les éléments du site (textes, images, illustrations, logos, icônes, etc.) sont
          protégés par les lois en vigueur sur la propriété intellectuelle et sont la propriété
          exclusive de Romaric YI, sauf mention contraire. Toute reproduction, représentation,
          modification, publication, ou adaptation de tout ou partie des éléments du site, quel que
          soit le moyen ou le procédé utilisé, est interdite sans l’autorisation écrite préalable de
          Romaric YI.
        </p>

        <h2 className="text-xl font-bold pt-8 pb-2">Données personnelles</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), les informations
          personnelles collectées via ce site (formulaires de contact, devis, etc.) sont traitées de
          manière confidentielle. <br />
          <b>Responsable du traitement :</b> Romaric YI <br />
          Les données sont collectées dans le cadre de la gestion des relations commerciales (devis,
          factures, contacts). Elles ne seront jamais transmises à des tiers sans votre consentement
          explicite, sauf en cas de nécessité légale. <br />
          <br />
          Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au RGPD, vous
          disposez des droits suivants : <br />
          Droit d’accès, de rectification et de suppression de vos données personnelles <br />
          Droit à la portabilité de vos données <br />
          Droit de limiter ou de vous opposer au traitement de vos données <br />
          Droit d’introduire une réclamation auprès de la CNIL <br />
          <br />
          Pour exercer ces droits, vous pouvez adresser une demande à{" "}
          <Link href="http://contact@yiroma.fr" className="text-sky-800 font-semibold underline">
            contact@yiroma.fr
          </Link>
          . Une réponse vous sera apportée dans un délai maximal d’un mois.
        </p>

        <h2 className="text-xl font-bold pt-8 pb-2">Cookies</h2>
        <p>
          Le site peut utiliser des cookies pour améliorer l’expérience utilisateur et réaliser des
          statistiques de visite. Vous avez la possibilité de refuser l’utilisation des cookies lors
          de votre première visite via un bandeau d’information. Vous pouvez également configurer
          votre navigateur pour bloquer les cookies ou les supprimer.
        </p>

        <h2 className="text-xl font-bold pt-8 pb-2">Limitation de responsabilité</h2>
        <p>
          Romaric YI s’efforce d’assurer l’exactitude des informations diffusées sur ce site.
          Toutefois, il ne peut être tenu responsable des erreurs ou omissions. Le Prestataire
          décline toute responsabilité pour les dommages directs ou indirects pouvant résulter de
          l’accès ou de l’utilisation du site, y compris en cas de virus informatique ou de tout
          autre dommage au matériel informatique.
        </p>

        <h2 className="text-xl font-bold pt-8 pb-2">Liens hypertextes</h2>
        <p>
          Ce site peut contenir des liens vers des sites externes. Romaric YI décline toute
          responsabilité quant au contenu de ces sites tiers. Toute création de lien hypertexte vers
          ce site doit faire l’objet d’une autorisation préalable et écrite de Romaric YI.
        </p>

        <h2 className="text-xl font-bold pt-8 pb-2">Droits applicable</h2>
        <p>
          Les présentes mentions légales sont soumises à la législation française. En cas de litige,
          et à défaut d’accord amiable, les tribunaux français seront les seuls compétents.
        </p>
      </div>
    </motion.div>
  );
};

export default LegalsPage;
