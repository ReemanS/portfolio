import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-background flex flex-col items-center w-full h-52 px-6 md:px-24 py-12">
      <Image
        src={`/brand/reeman-logo-light.svg`}
        alt="Reeman"
        width={50}
        height={50}
      />
      <ul className="flex gap-x-4 mt-4">
        <li>
          <a href="/" className="hover:underline underline-offset-4">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline underline-offset-4">
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline underline-offset-4">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline underline-offset-4">
            Contact
          </a>
        </li>
      </ul>
      <div className="font-semibold mt-3 text-xs sm:text-base">
        2024 © Reeman L. Singh • All Rights Reserved
      </div>
    </footer>
  );
}
