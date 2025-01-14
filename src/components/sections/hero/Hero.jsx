import { Button, IconButton } from "@mui/material";
import { Download } from "lucide-react";
import Link from "next/link";
import SocialsButton from "./SocialsButton";

const Hero = () => {
  return (
    <section
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ type: "spring", duration: 2.5, delay: 0.2 }}
      className="text-center px-5 relative flex items-center md:justify-center h-[calc(100vh-60px)] md:h-screen"
      id="home"
    >
      <div className="w-full max-w-[800px] flex flex-col gap-3 text-black dark:text-white">
        <h1 className=" text-gray-700 dark:text-[#E9E8EA] normal_text text-left sm:text-center uppercase tracking-wider">
          dynamic wed magic with{" "}
          <span className="text-black dark:text-white font-semibold">
            next js
          </span>
          .
        </h1>
        <h1 className="header text-left sm:text-center leading-tight font-bold tracking-wider">
          Transforming Concepts into Seemless{" "}
          <span className="text-[#5100FF]">User Experience</span>.
        </h1>
        <h1 className="body_text tracking-wide text-left text-gray-800 dark:text-gray-300 md:text-center md:max-w-[700px] mx-auto">
          Hi! 👋 I'm <span className="text-black dark:text-white font-semibold">
            Kayode
          </span>, a 
            Full-stack Developer 
          with a strong focus on{" "}
          <span className="text-black dark:text-white font-semibold">
            Frontend Development
          </span>{" "}
          {""}
          using React and Next.js.
        </h1>
        <SocialsButton />
        <a
          href="/CV.pdf" // File path relative to the `public` directory
          download="Kayode_Resume.pdf" // Suggested filename when downloaded
          className="bg-[#4400d6] text-white flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold hover:bg-opacity-80 transition-all duration-300 w-fit md:mx-auto"
        >
          RESUME
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 10l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
