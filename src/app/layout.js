import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yi Romaric - Développeur Web | Next.js | React.js | Tailwind | MySQL",
  description:
    "Développeur Web spécialisé Next.js, React.js, Tailwind et MySQL. Développeur web et Web Designer à Châteauneuf-sur-Loire, Loiret, 45, France",
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
