import copy from "copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const handleCopy = () => {
    copy("reemanl.singh422@gmail.com");
    toast.success("Email copied to clipboard!", {
      className: "text-text",
      iconTheme: { primary: "#11C1A2", secondary: "#FBFBFE" },
    });
  };

  return (
    <section className="min-h-screen">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="pt-28 flex flex-col items-center">
        <h2 className="pt-24">Let's Get in Touch</h2>
        <div className="mt-3 text-left sm:text-center">
          If you are interested in working with me, send me an email or contact
          me through instant message!
        </div>

        <div className="contact-links text-center text-lg sm:text-2xl">
          <div
            id="email-link"
            className="mt-10 font-semibold mb-4"
            onClick={handleCopy}
          >
            <span className="relative group underline">
              reemanl.singh422@gmail.com
              <svg
                className="absolute -right-8 top-1/2 -translate-y-1/2 w-5 h-5 text-background group-hover:text-primary group-active:text-primary transition duration-150"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="200px"
                width="200px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
              </svg>
            </span>
          </div>
          <a href="https://www.facebook.com/rem.422">
            <div className="mb-3">Facebook</div>
          </a>
          <a href="https://www.linkedin.com/in/reeman-singh/">
            <div className="mb-3">LinkedIn</div>
          </a>
          <a href="https://github.com/ReemanS">
            <div className="mb-3">GitHub</div>
          </a>
        </div>
      </div>
    </section>
  );
}
