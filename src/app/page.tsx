"use client";

import Navbar from "@/app/components/Navbar";
import Main from "@/app/sections/Main";
import Projects from "@/app/sections/Projects";
import About from "@/app/sections/About";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   const glowEffect = document.getElementById("glow-effect") as HTMLElement;

  //   const handlePointerMove = (event: PointerEvent) => {
  //     const { clientX, clientY } = event;

  //     glowEffect.animate(
  //       {
  //         left: `${clientX}px`,
  //         top: `${clientY}px`,
  //       },
  //       { duration: 3000, fill: "forwards" }
  //     );
  //   };

  //   window.addEventListener("pointermove", handlePointerMove);

  //   return () => {
  //     window.removeEventListener("pointermove", handlePointerMove);
  //   };
  // }, []);
  return (
    <>
      {/* <div id="glow-effect"></div>
        <div id="blur"></div> */}

      <Navbar />
      <main>
        <Main />
        <Projects />
        <About />
      </main>
    </>
  );
}
