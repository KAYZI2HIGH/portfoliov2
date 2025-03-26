import BackButton from "@/components/backbutton/BackButton";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import { projects } from "@/utils/constants";
import { Briefcase } from "lucide-react";

export const metadata = {
  title: "Projects - Kayode Portfolio",
  description: "Explore my web development projects.",
};


const ProductPage = () => {
  return (
    <section className="mt-24">
      <div className="w-full max-w-[1000px] flex flex-col gap-5 md:gap-7 mx-auto px-8 pb-20">
        <BackButton />
        <div className="flex gap-3 w-fit md:mx-auto justify-center items-center">
          <div className="bg-blue-800 p-2 rounded-lg flex items-center justify-center">
            <Briefcase
              size={24}
              color="#90cdf4"
            />
          </div>
          <h1 className="header font-semibold tracking-wide">My Projects</h1>
        </div>
        <p className="md:max-w-[50%] md:text-center font-light mx-auto">
          Explore my portfolio of projects, ranging from e-commerce solutions to
          healthcare platforms. Each project represents a unique challenge and
          innovative solution.
        </p>
      </div>
      <div className="w-full bg-[#EFEFF1] dark:bg-[#0d1018]  py-10">
        <div className="grid sm:grid-cols-auto-lg mt-10 gap-10 max-w-[1000px] mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
