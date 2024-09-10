import Link from "next/link";

const DownloadCv = () => {
  return (
    <Link
      href="/docs/CV-Romaric-YI-Developpeur-Web.pdf"
      download="CV-Romaric-YI-Developpeur-Web.pdf"
      className="flex justify-center"
    >
      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white font-semibold hover:bg-white hover:text-black">
        Télécharger mon CV
      </button>
    </Link>
  );
};

export default DownloadCv;
