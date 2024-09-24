import Image from "next/image";
import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  return (
    <nav className="relative md:fixed top-0 left-0 right-0 px-8 md:px-24 py-8 bg-transparent z-[1] flex flex-row items-center justify-between bg-gradient-to-b from-white">
      <motion.a
        href="#main"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <Image
          src={`/brand/reeman-logo-colored.svg`}
          alt="Reeman"
          width={50}
          height={50}
        />
      </motion.a>
      <motion.ul
        className="navbar-items flex text-sm space-x-6 md:space-x-20"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        <motion.li variants={itemVariants}>
          <a href="#projects">Projects</a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <a href="#about">About</a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>
    </nav>
  );
}
