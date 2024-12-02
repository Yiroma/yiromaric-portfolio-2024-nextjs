import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://yiromaric.fr"),

  title: "Yi Romaric - Développeur Web | Next.js | React.js | Tailwind | MySQL",

  description:
    "Développeur Web spécialisé Next.js, React.js, Tailwind et MySQL. Développeur web et Web Designer à Châteauneuf-sur-Loire, Loiret, 45, France",

  keywords: ["Développeur Web", "Next.js", "React.js", "Tailwind CSS", "MySQL", "Loiret", "France"],

  icons: {
    icon: "/favicons/favicon.ico",
    apple: "/favicons/apple-icon.png",
    shortcut: "/favicons/favicon-32x32.png",
  },

  openGraph: {
    title: "Yi Romaric - Développeur Web",
    description: "Développeur Web spécialisé Next.js, React.js, Tailwind et MySQL.",
    url: "https://yiromaric.fr",
    siteName: "Yi Romaric Portfolio",
    images: [
      {
        url: "/images/portfolio-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Yi Romaric",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yi Romaric - Développeur Web",
    description: "Développeur Web spécialisé Next.js, React.js, Tailwind et MySQL.",
    images: ["/images/portfolio-preview.jpg"],
  },

  robots: "index, follow",
  canonical: "https://yiromaric.fr",
  sitemap: "/sitemap.xml",
  humans: "/humans.txt",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
