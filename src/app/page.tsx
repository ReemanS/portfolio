"use client";

import Navbar from "@/app/components/Navbar";
import Main from "@/app/sections/Main";
import Projects from "@/app/sections/Projects";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/components/Footer";
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <>
      <Toaster reverseOrder={false} />
      <Navbar />
      <main>
        <Main />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
