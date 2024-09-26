import Image from "next/image";
import { AiFillMessage } from "react-icons/ai";
import { HiDocumentDownload } from "react-icons/hi";
import toast from "react-hot-toast";
import { iconTheme } from "../constants";
import { motion, Variant, Variants } from "framer-motion";

export default function Main() {
  const handleComingSoon = () => {
    toast.error("Coming soon!", {
      className: "text-text",
      iconTheme: iconTheme,
      position: "top-center",
      icon: "🚧",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const elementVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const name = "Reeman Singh".split("");

  return (
    <section id="main" className="h-screen flex justify-center">
      <div className="pt-12 md:pt-28 text-center">
        <motion.p
          variants={elementVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          Hi there! I am
        </motion.p>
        <motion.h1
          className="text-dynamic font-extrabold text-primary"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {name.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="md:pt-5 mx-auto w-11/12 text-justify sm:text-center md:w-7/12"
          variants={elementVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3, duration: 0.4 }}
        >
          An <b>Information Technology</b> student from the Philippines who
          wants to design meaningful systems for a more connected and efficient
          world.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            delay: 1.45,
          }}
        >
          <Image
            src={`/images/hero-img-rounded.png`}
            alt="Image of Reeman Singh"
            width={220}
            height={220}
            className="pt-6 mx-auto"
          />
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-2 mt-8 w-3/4 mx-auto"
          variants={elementVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <a className="flex justify-center">
            <button
              className="btn-primary flex items-center justify-center"
              onClick={handleComingSoon}
            >
              <HiDocumentDownload className="mr-1" />
              <div className="">Download my Resume</div>
            </button>
          </a>

          <a href="#contact" className="flex justify-center">
            <button className="btn-primary flex items-center justify-center">
              <AiFillMessage className="mr-1" />
              <div className="">Get in Touch</div>
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
