'use client'
import SocialsButton from "./SocialsButton";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
const [circles, setCircles] = useState([])
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const backgroundVariants = {
    hidden: {
      scale: 1.05,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    const generatedCircles = Array.from({ length: 20 }, () => ({
      width: Math.random() * 100 + 20,
      height: Math.random() * 100 + 20,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 5,
    }));
    setCircles(generatedCircles);
  }, []);

  return (
    <section
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ type: "spring", duration: 2.5, delay: 0.2 }}
      className="text-center px-7 relative flex items-center md:justify-center h-[calc(100vh-60px)] md:h-screen overflow-hidden"
      id="home"
    >
      <motion.div
        className="absolute inset-0 
             bg-gradient-to-b from-white to-indigo-50 
             dark:from-black dark:to-gray-900 
             dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_70%)]"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      />
      <div className="absolute inset-0 overflow-hidden">
        {circles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-400 dark:bg-indigo-300 opacity-10 dark:opacity-15"
            style={{
              width: circle.width,
              height: circle.height,
              left: circle.left,
              top: circle.top,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: circle.duration,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative w-full max-w-[800px] flex flex-col gap-3 text-black dark:text-white"
      >
        <motion.h1
          variants={itemVariants}
          className=" text-gray-700 dark:text-[#E9E8EA] normal_text text-left sm:text-center uppercase tracking-wider"
        >
          dynamic wed magic with{" "}
          <span className="text-black dark:text-white font-semibold">
            next js
          </span>
          .
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="header text-left sm:text-center leading-tight font-bold tracking-wider"
        >
          Transforming Concepts into Seemless{" "}
          <span className="text-[#5100FF]">User Experience</span>.
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="body_text tracking-wide text-left text-gray-800 dark:text-gray-300 md:text-center md:max-w-[700px] mx-auto sm:text-center"
        >
          Hi! 👋 I'm{" "}
          <span className="text-black dark:text-white font-semibold">
            Kayode
          </span>
          , a Full-stack Developer with a strong focus on{" "}
          <span className="text-black dark:text-white font-semibold">
            Frontend Development
          </span>{" "}
          {""}
          using React and Next.js.
        </motion.h1>
        <SocialsButton itemVariants={itemVariants} />
        <motion.a
          variants={itemVariants}
          href="/CV.pdf" // File path relative to the `public` directory
          download="Kayode_Resume.pdf" // Suggested filename when downloaded
          className="bg-[#4400d6] text-white flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold hover:bg-opacity-80 transition-all duration-300 w-fit sm:mx-auto"
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
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
