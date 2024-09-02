import Image from "next/image";
import { AiFillMessage } from "react-icons/ai";
import { HiDocumentDownload } from "react-icons/hi";

export default function Main() {
  return (
    <section className="h-screen snap-center flex bg-yellow-50 justify-center">
      <div className="pt-12 md:pt-28 text-center">
        <p>Hi there! I am</p>
        <h1 className="text-dynamic font-extrabold text-primary">
          Reeman Singh
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
          <button className="btn-primary flex items-center justify-center">
            <HiDocumentDownload className="mr-1" />
            <div className="">Download my Resume</div>
          </button>
          <button className="btn-primary flex items-center justify-center">
            <AiFillMessage className="mr-1" />
            <div className="">Get in Touch</div>
          </button>
        </div>
      </div>
    </section>
  );
}
