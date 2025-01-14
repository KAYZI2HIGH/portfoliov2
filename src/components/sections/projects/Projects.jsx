import { Button } from "@mui/material";

import { projects } from "@/utils/constants";
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react";
import ShortenText from "@/utils/Shortentext";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      className="w-full py-24 px-5 relative text-black dark:text-white"
      id="projects"
    >
      <img
        src="/images/bg2.png"
        className="z-0 absolute w-full h-full top-0 left-0"
      />
      <section className="relative mx-auto flex flex-col justify-center items-center gap-3">
        <div
          // initial={{ opacity: 0, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 1.5 }}
          className="text-center flex flex-col justify-center items-center"
        >
          <h1 className="header font-semibold sm:font-medium sm:text-3xl tracking-wide capitalize text-white">
            my projects
          </h1>
          <h1 className="text-center sm:max-w-[50%] text-gray-200 body_text tracking-wide font-light my-4">
            Explore my latest work, blending creativity and code for functional
            responsive website with clean design and seeamless user experience
          </h1>
        </div>
        <div className="grid grid-cols-auto-lg mt-10 gap-10 max-w-full">
          {projects.map((project, index) => {
            if (index > 3) {
              return;
            } else {
              return (
                <ProjectCard
                  project={project}
                  key={index}
                  index={index}
                />
              );
            }
          })}
        </div>
        <Link href={'/projects'} className="bg-gray-200 text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-100 transition duration-200 mt-10">
          View All Projects
        </Link>
      </section>
    </section>
  );
};

export default Projects;
