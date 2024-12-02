"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./navbar";
import Footer from "./footer";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="min-h-screen bg-gradient-to-b from-white to-sky-100">
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 right-0 bottom-0 left-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "100vh" }}
          animate={{ height: "0vh", transition: { delay: 0.3 } }}
        />
        <nav className="h-24">
          <Navbar />
        </nav>
        <main className="min-h-[calc(100vh-6rem)]">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
