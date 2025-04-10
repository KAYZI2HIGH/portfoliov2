'use client'
import ShortenText from "@/utils/Shortentext";
import { ArrowRight, Github, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import ImageSlider from "@/components/Swiper";

const ProjectCard = ({ project, index, itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -10,
      }}
      className="bg-white dark:bg-gray-900 overflow-hidden rounded-xl flex flex-col justify-between shadow-md w-full max-w-[300px] md:max-w-[400px] mx-auto pb-5 relative"
    >
      <div className="w-full h-48 relative">
        <h1 className="py-1 px-2 text-white bg-green-600 rounded-full small_text font-semibold tracking-wide capitalize lg:text-sm whitespace-nowrap absolute top-3 right-3 z-30">
          {project.category}
        </h1>
        <Image
          src={`/images/${project.image[0]}.png`}
          alt="Project Image"
          fill
        />
      </div>
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
      <div className="px-5 mt-4 space-y-4 sm:space-y-0 sm:flex justify-between items-center">
        <div className="flex gap-2 sm:max-w-[60%] overflow-scroll scroll_hidden">
          {project.techStack.map((tech, index) => (
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
    </motion.div>
  );
};

export default ProjectCard;
