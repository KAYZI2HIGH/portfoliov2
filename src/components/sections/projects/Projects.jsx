'use client'
import { projects } from "@/utils/constants";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
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
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <section
      className="w-full py-24 px-5 relative text-black dark:text-white bg-slate-200 dark:bg-slate-800"
      id="projects"
    >
      <div className="main z-10"></div>
      {/* <img
        src="/images/bg2.png"
        className="z-0 absolute w-full h-full top-0 left-0"
      /> */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative mx-auto flex flex-col justify-center items-center gap-3 z-20"
      >
        <div
          // initial={{ opacity: 0, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 1.5 }}
          className="text-center flex flex-col justify-center items-center"
        >
          <motion.h1 variants={itemVariants} className="header font-semibold sm:font-medium sm:text-3xl tracking-wide capitalize ">
            my projects
          </motion.h1>
          <motion.h1 variants={itemVariants} className="text-center sm:max-w-[50%]  body_text tracking-wide font-light my-4">
            Explore my latest work, blending creativity and code for functional
            responsive website with clean design and seeamless user experience
          </motion.h1>
        </div>
        <div className="grid sm:grid-cols-auto-lg mt-10 gap-10 max-w-full">
          {projects.map((project, index) => {
            if (index > 3) {
              return;
            } else {
              return (
                <ProjectCard
                  project={project}
                  key={index}
                  index={index}
                  itemVariants={itemVariants}
                />
              );
            }
          })}
        </div>
        <Link
          href={"/projects"}
          className="bg-blue-200 text-gray-700 px-6 py-3 rounded font-semibold shadow hover:bg-blue-100 transition duration-200 mt-10"
        >
          View All Projects
        </Link>
      </motion.section>
    </section>
  );
};

export default Projects;
