import BackButton from "@/components/backbutton/BackButton";
import ImageSlider from "@/components/Swiper";
import { projects } from "@/utils/constants";
import { Calendar, Github, Link, Users } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const projectDetials = projects[id - 1];

  if (!projectDetials) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }

   const title = `${projectDetials.name}`;
   const description = projectDetials.description;

  // Return dynamic metadata for the project
  return {
    title: title,
    description: description,
  };
}

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;

  const projectDetials = projects[id - 1];

  return (
    <div className="mt-20">
      <div className="px-5 md:px-0 max-w-[1000px] mx-auto space-y-5">
        <BackButton />
        <div className="flex flex-col md:flex-row gap-10 pb-20 items-center">
          <div className="space-y-5 md:max-w-[50%]">
            <h1 className="header font-semibold tracking-wider capitalize">
              {projectDetials.name}
            </h1>
            <p className="normal_text tracking-wide leading-normal font-light">
              {projectDetials.description}
            </p>
            <div className="flex gap-4">
              <a
                href={`${projectDetials.url}`}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
              >
                Live Demo
                <Link size={18} />
              </a>
              <a
                href={`${projectDetials.gitHubUrl}`}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md shadow hover:bg-gray-700 transition"
              >
                View Source
                <Github size={18} />
              </a>
            </div>
          </div>
          <div className="bg-[#EFEFF1] dark:bg-[#060a13] px-4 py-5 w-full rounded-lg">
            <div className="w-full h-60 md:h-80 rounded-lg overflow-hidden relative">
              <ImageSlider images={projectDetials.image}/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EFEFF1] dark:bg-[#0d1018]  w-full px-5 py-20">
        <div className="flex flex-col md:flex-row gap-10 max-w-[1000px] mx-auto">
          <div className="flex flex-col gap-10  md:max-w-[55%]">
            <div className="flex flex-col gap-4">
              <h1 className="section_title tracking-wider font-bold">
                About the Project.
              </h1>
              <p className="text-base normal_text tracking-wide font-light leading-normal">
                {projectDetials.about}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="section_title tracking-wider font-bold">
                Key Features
              </h1>
              <ul className="space-y-3">
                {projectDetials.keyFeatures.map((feature, index) => (
                  <li
                    className="text-base normal_text font-light"
                    key={index}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="section_title tracking-wider font-bold">
                Technical Stack
              </h1>
              <div className="flex gap-5 flex-wrap">
                {projectDetials.techStack.map((tech, index) => (
                  <h1
                    key={index}
                    className="py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded-full normal_text lg:text-sm whitespace-nowrap"
                  >
                    {tech}
                  </h1>
                ))}
              </div>
            </div>
          </div>
          <div className="p-8 bg-white dark:bg-[#1F2937] rounded-lg w-full">
            <div className="pb-7 border-b flex flex-col gap-4">
              <h1 className="body_text font-semibold tracking-wide">
                Project Details ({projectDetials.category})
              </h1>
              <div className="space-y-4">
                <div className="flex justify-center items-center gap-4 w-fit">
                  <Calendar size={18} />
                  <div className="flex flex-col gap-1 font-medium">
                    <p className="small_text text-gray-500 dark:text-gray-300">
                      Duration
                    </p>
                    <p className="small_text font-semibold">
                      {projectDetials.projectDetails.duration}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4 w-fit">
                  <Users size={18} />
                  <div className="flex flex-col gap-1 font-medium">
                    <p className="small_text text-gray-500 dark:text-gray-300">
                      Team Size
                    </p>
                    <p className="small_text font-semibold">
                      {projectDetials.projectDetails.teamSize} Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-4">
              <h1 className="body_text font-semibold tracking-wide">
                Project Outcomes
              </h1>
              <ul className="space-y-3">
                {projectDetials.projectDetails.outcomes.map(
                  (outcome, index) => (
                    <li
                      key={index}
                      className="font-light text-sm small_text"
                    >
                      {outcome}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
