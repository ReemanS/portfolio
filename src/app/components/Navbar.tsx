import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative md:fixed top-0 left-0 right-0 mx-8 md:mx-24 mt-8 bg-transparent z-[1] flex flex-row items-center justify-between">
      <Image
        src={`/brand/reeman-logo-colored.svg`}
        alt="Reeman"
        width={50}
        height={50}
      />
      <ul className="flex text-sm space-x-6 md:space-x-20">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
