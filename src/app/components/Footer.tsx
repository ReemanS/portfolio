import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-background flex flex-col items-center w-full h-44 px-8 py-12 md:px-24">
      <Image
        src={`/brand/reeman-logo-light.svg`}
        alt="Reeman"
        width={50}
        height={50}
      />
      <div className="font-semibold mt-6">
        2024 © Reeman L. Singh • All Rights Reserved
      </div>
    </footer>
  );
}
