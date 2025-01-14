import ShortenText from '@/utils/Shortentext';
import { ArrowRight, Github, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const ProjectCard = ({project, index}) => {
  return (
    <div
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 1, ease: easeIn }}
      className="bg-white dark:bg-gray-900 overflow-hidden rounded-xl flex flex-col justify-between shadow-md w-full max-w-[300px] md:max-w-[400px] mx-auto pb-5"
    >
      <img
        src={`/images/${project.image}.png`}
        className="w-full h-48"
      />
      <div className="flex justify-between px-4 items-center mt-4">
        <h1 className="body_text font-medium tracking-wide">{project.name}</h1>
        <div className="flex gap-3 w-fit">
          <a href={project.gitHubUrl}>
            <Github size={18} />
          </a>
          <a href={project.url}>
            <LinkIcon size={18} />
          </a>
        </div>
      </div>
      <div className="normal_text px-5 mt-3 md:font-light lg:text-base">
        <ShortenText
          text={project.description}
          maxLength={100}
        />
      </div>
      <div className="px-5 mt-4 flex justify-between items-center">
        <div className="sm:flex gap-2 max-w-[60%] overflow-scroll scroll_hidden">          {project.techStack.map((tech, index) => (
            <h1
              key={index}
              className="py-1 px-2 bg-gray-100 dark:bg-gray-800 rounded-full small_text lg:text-sm whitespace-nowrap"
            >
              {tech}
            </h1>
          ))}
        </div>
        <Link
          href={`/projects/${index + 1}`}
          className="text-sm capitalize font-semibold text-[#5100FF] flex gap-1 hover:text-opacity-80"
        >
          view details
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard