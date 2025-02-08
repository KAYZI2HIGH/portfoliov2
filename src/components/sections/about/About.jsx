import { techStack } from "@/utils/constants";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="bg-[#EFEFF1] dark:bg-[#0A0A0C] px-5 py-24  space-y-10"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10">
        <div
          // initial={{ opacity: 0, x: "-100px" }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1.5 }}
          className="py-8 px-6 bg-white dark:bg-[#171719] rounded-2xl shadow-sm text-black dark:text-white relative overflow-hidden lg:col-start-1 lg:col-span-1"
        >
          <span className="spotlight left-0 w-[20%] -top-10 -z-1"></span>
          <div className="w-full flex space-x-4 rounded-xl p-3 items-center bg-[#eeeeee] dark:bg-[#0A0A0C] z-1 relative">
            <Image
              height={64}
              width={64}
              src="/images/me.png"
              alt="profile-image"
              className="size-16 rounded-full"
            />
            <div>
              <h1 className="font-semibold tracking-wide">Kayode Dada</h1>
              <p className="text-text-muted">Fullstack Developer</p>
            </div>
          </div>
          <h1 className="font-semibold text-2xl traking-wide mt-4">
            <span className="text-[#5100FF]">Passionate</span> Developer
          </h1>
          <p className="text-text-color/90 mt-2">
            I’m a Next.js full-stack developer with a strong focus on front-end
            development, dedicated to crafting seamless digital experiences. I
            thrive on problem-solving and collaboration.
          </p>
        </div>
        <div
          // initial={{ opacity: 0, x: "200px" }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1.5 }}
          className="lg:flex lg:col-start-2 lg:col-span-2  bg-white dark:bg-[#171719] rounded-2xl p-5 lg:space-x-10 relative overflow-hidden  justify-center"
        >
          <span className="spotlight right-0 w-[20%] -top-5 -z-1"></span>
          <div className="w-full h-64 lg:h-full my-auto rounded-2xl mb-10 md:mb-0 relative overflow-hidden">
            <Image
              src="/images/demo.jpg"
              alt="code-preview image"
              fill
            />
          </div>
          <div className="w-full bg-[#F4F4F5] dark:bg-[#0E0E10] shadow-lg p-5 rounded-xl z-10">
            <h1 className="font-semibold section_title mb-3">
              <span className="text-[#5100FF]">What</span> Drives me
            </h1>
            <h1 className="text-text-muted">
              I thrive at the crossroads of creativity and code. Crafting
              seamless, impactful digital experiences drives me, blending user
              needs with bold innovation. Every project is a chance to push
              boundaries, turning ideas into intuitive, dynamic realities.
            </h1>
          </div>
        </div>
        <div
          // initial={{ opacity: 0, x: "-100px" }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1.5 }}
          className="space-y-4 bg-white dark:bg-[#171719] py-10 px-5 rounded-xl lg:col-start-1 lg:col-span-2"
        >
          <h1 className="text-4xl font-semibold">
            My <span className="text-text-blue">Tech Stack</span>
          </h1>
          <h1 className="text-lg text-text-color/70">
            Always Evolving my Tech Stack
          </h1>
          <div className="grid grid-cols-small sm:grid-cols-auto mt-5 gap-10 ">
            {techStack.map((tech, index) => (
              <div
                className="bg-gray-50 dark:bg-black rounded-lg p-6 flex flex-col items-center justify-center gap-3 transition-transform hover:scale-105 cursor-pointer"
                key={index}
              >
                <Image
                  src={`${tech.imageUrl}`}
                  width={40}
                  height={40}
                  alt={tech.name}
                ></Image>
                <span className="font-medium tracking-wide uppercase text-sm">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="gap-10 flex flex-col justify-between">
          {/* <div
            // initial={{ opacity: 0, x: "200px" }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1.5 }}
            className="relative rounded-xl overflow-hidden grid_stacked h-fit"
          >
            <Image
              src="/images/bg1.jpg"
              alt="backgroung-image"
              fill
            />
            <div className="my-10">
              <div className="p-5 relative leading-relaxed text-white">
                <h1 className="text-3xl font-medium leading-loose mb-3">
                  💻 My Tech Stack
                </h1>
                I specialize in frontend development, crafting responsive and
                user-friendly websites for small and medium-sized businesses. My
                expertise lies in React, Next.js, and Tailwind CSS, enabling me
                to build dynamic and modern web applications. For project
                management, I handle everything from planning to deployment,
                ensuring seamless execution and regular communication with
                clients. I use Cloudinary for optimized image storage and
                NextAuth for secure authentication. I also integrate Sanity for
                real-time content management and Sentry for error monitoring.
              </div>
            </div>
          </div> */}
          <div className="hidden lg:flex relative w-full h-full">
            <Image
              src="images/man-on-laptop-photoshop.svg"
              alt="avatar"
              fill
            />
          </div>
          <div
            // initial={{ opacity: 0, x: "200px" }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1.5 }}
            className="relative rounded-xl overflow-hidden grid_stacked min-h-80"
          >
            <Image
              src="/images/bg1.jpg"
              alt="backgroung-image"
              fill
            />
            <div className="my-10">
              <h1 className="text-center relative text-3xl text-white">
                I'm Commited to Collaboration and Clear Communication
              </h1>
              <Link href={"#contacts"}>
                <Button
                  variant="contained"
                  className="bg-black p-4 font-semibold tracking-wider mt-10 mx-auto flex rounded-xl hover:bg-opacity-80"
                >
                  let's collaborate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
