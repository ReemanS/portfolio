import Image from "next/image";
import { motion } from "framer-motion";
import {
  elementVariants,
  headerVariants,
  itemVariants,
  leftScrollingVariants,
  listVariants,
} from "../constants";

export default function About() {
  return (
    <section id="about" className="min-h-screen h-max">
      <div className="pt-16 md:pt-28">
        <motion.h2
          className="text-center sm:text-start"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-wrap mt-4 justify-between gap-y-4">
          <motion.div
            className="sm:basis-full md:basis-2/5"
            variants={elementVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            <Image
              src={`/images/about-img.png`}
              alt="Another image of Reeman Singh"
              height={500}
              width={420}
            />
          </motion.div>
          <motion.div
            className="sm:basis-full md:basis-3/5 md:pl-12 text-justify"
            variants={leftScrollingVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="font-bold mb-7">
              <span className="underline-span-1">Reeman L.</span>{" "}
              <span className="underline-span-2">Singh</span>
            </h2>
            <p className="mb-2">
              I am currently taking up Bachelor of Science in{" "}
              <b>Information Technology</b> with a major in{" "}
              <b>Software Technologies</b> at West Visayas State University.
            </p>
            <p className="mb-2">
              I have always been interested in exploring ways to make use of
              technology to enhance and optimize various aspects of our lives.
              After all, the growth of technology is limitless, and I aim to
              grow my skills and talent alongside it.
            </p>
            <p className="mb-6">
              These are some of the technologies that I am knowledgeable in:
            </p>
            <div className="mb-4">
              <motion.ul
                className="technologies flex flex-wrap gap-4"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#00c4b3"
                      d="M35.2 34.9l-8.3-8.3v59.7l.1 2.8c0 1.3.2 2.8.7 4.3l65.6 23.1 16.3-7.2-74.4-74.4z"
                    />
                    <path
                      d="M27.7 93.4zm81.9 15.9l-16.3 7.2-65.4-23.1c1.3 4.8 4 10.1 7 13.2l21.3 21.2 47.6.1 5.8-18.6z"
                      fill="#22d3c5"
                    />
                    <path
                      fill="#0075c9"
                      d="M1.7 65.1C-.4 67.3.7 72 4 75.5l14.7 14.8 9.2 3.3c-.3-1.5-.7-3-.7-4.3l-.1-2.8-.2-59.8m82.7 82.6l7.2-16.4-23-65.6c-1.5-.3-3-.6-4.3-.7l-2.9-.1-59.6.1"
                    />
                    <path
                      d="M93.6 27.3c.2 0 .2 0 0 0 .2 0 .2 0 0 0zm16 82l17.7-5.8V54.8l-20.4-20.5c-3-3-8.3-5.8-13.2-7l23.1 65.6"
                      fill="#00a8e1"
                    />
                    <path
                      fill="#00c4b3"
                      d="M90.5 18.2L75.7 3.5c-3.4-3.4-8-4.4-10.4-2.3L26.9 26.6h59.5l2.9.1c1.3 0 2.8.2 4.3.7l-3.1-9.2z"
                    />
                  </svg>
                  <span className="tech-name">Dart</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <g fill="#3FB6D3">
                      <path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z" />
                    </g>
                    <path
                      fill="#27AACD"
                      d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"
                    />
                    <path
                      fill="#19599A"
                      d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"
                    />
                    <linearGradient
                      id="flutter-original-a"
                      gradientUnits="userSpaceOnUse"
                      x1="59.365"
                      y1="116.36"
                      x2="86.825"
                      y2="99.399"
                    >
                      <stop offset="0" stop-color="#1b4e94" />
                      <stop offset=".63" stop-color="#1a5497" />
                      <stop offset="1" stop-color="#195a9b" />
                    </linearGradient>
                    <path
                      fill="url(#flutter-original-a)"
                      d="M61.6 113.1l30.8-8.4-10.8-10.8z"
                    />
                  </svg>
                  <span className="tech-name">Flutter</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                    <path
                      data-name="original"
                      fill="#007acc"
                      d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                    />
                  </svg>
                  <span className="tech-name">TypeScript</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#F0DB4F"
                      d="M1.408 1.408h125.184v125.185H1.408z"
                    />
                    <path
                      fill="#323330"
                      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    />
                  </svg>
                  <span className="tech-name">JavaScript</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <g fill="#61DAFB">
                      <circle cx="64" cy="64" r="11.4" />
                      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                    </g>
                  </svg>
                  <span className="tech-name">React</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                  </svg>
                  <span className="tech-name">NextJS</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                      fill="#38bdf8"
                    />
                  </svg>
                  <span className="tech-name">TailwindCSS</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <linearGradient
                      id="python-original-a"
                      gradientUnits="userSpaceOnUse"
                      x1="70.252"
                      y1="1237.476"
                      x2="170.659"
                      y2="1151.089"
                      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                    >
                      <stop offset="0" stop-color="#5A9FD4" />
                      <stop offset="1" stop-color="#306998" />
                    </linearGradient>
                    <linearGradient
                      id="python-original-b"
                      gradientUnits="userSpaceOnUse"
                      x1="209.474"
                      y1="1098.811"
                      x2="173.62"
                      y2="1149.537"
                      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                    >
                      <stop offset="0" stop-color="#FFD43B" />
                      <stop offset="1" stop-color="#FFE873" />
                    </linearGradient>
                    <path
                      fill="url(#python-original-a)"
                      d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                      transform="translate(0 10.26)"
                    />
                    <path
                      fill="url(#python-original-b)"
                      d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                      transform="translate(0 10.26)"
                    />
                    <radialGradient
                      id="python-original-c"
                      cx="1825.678"
                      cy="444.45"
                      r="26.743"
                      gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0"
                        stop-color="#B8B8B8"
                        stop-opacity=".498"
                      />
                      <stop offset="1" stop-color="#7F7F7F" stop-opacity="0" />
                    </radialGradient>
                    <path
                      opacity=".444"
                      fill="url(#python-original-c)"
                      d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
                    />
                  </svg>
                  <span className="tech-name">Python</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#0074BD"
                      d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
                    />
                    <path
                      fill="#EA2D2E"
                      d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
                    />
                    <path
                      fill="#0074BD"
                      d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
                    />
                    <path
                      fill="#EA2D2E"
                      d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
                    />
                    <path
                      fill="#0074BD"
                      d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
                    />
                  </svg>
                  <span className="tech-name">Java</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#f58220"
                      d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                    />
                  </svg>
                  <span className="tech-name">Firebase</span>
                </motion.li>
              </motion.ul>
            </div>
            <p>
              Aside from these, I also have a life! You would find me working
              out, doing photography, playing with my pets, or travelling
              around. This is when I am not watching stuff on YouTube or
              Netflix, or when I am not listening to audiobooks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
