import Image from "next/image";
import { AiFillMessage } from "react-icons/ai";
import { HiDocumentDownload } from "react-icons/hi";
import toast from "react-hot-toast";
import { iconTheme } from "../constants";
import { motion } from "framer-motion";

export default function Main() {
  const handleComingSoon = () => {
    toast.error("Coming soon!", {
      className: "text-text",
      iconTheme: iconTheme,
      position: "top-center",
      icon: "🚧",
    });
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const name = "Reeman Singh".split("");

  return (
    <motion.section
      id="main"
      className="h-screen flex justify-center"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.05 }}
    >
      <div className="pt-12 md:pt-28 text-center">
        <p>Hi there! I am</p>
        <h1 className="text-dynamic font-extrabold text-primary">
          {name.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="md:pt-5 mx-auto w-11/12 text-justify sm:text-center md:w-7/12">
          An <b>Information Technology</b> student from the Philippines who
          wants to design meaningful systems for a more connected and efficient
          world.
        </p>
        <Image
          src={`/images/hero-img-rounded.png`}
          alt="Image of Reeman Singh"
          width={220}
          height={220}
          className="pt-6 mx-auto"
        />
        <div className="flex flex-col sm:flex-row justify-center gap-2 mt-8 w-3/4 mx-auto">
          <button
            className="btn-primary flex items-center justify-center"
            onClick={handleComingSoon}
          >
            <HiDocumentDownload className="mr-1" />
            <div className="">Download my Resume</div>
          </button>
          <a href="#contact">
            <button className="btn-primary flex items-center justify-center">
              <AiFillMessage className="mr-1" />
              <div className="">Get in Touch</div>
            </button>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
