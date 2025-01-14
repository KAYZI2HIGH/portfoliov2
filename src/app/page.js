import About from "@/components/sections/about/About";
import Contacts from "@/components/sections/contacts/Contact";
import Hero from "@/components/sections/hero/Hero"
import Projects from "@/components/sections/projects/Projects";

const HomePage = () => {
  return (
    <div className="text-black dark:text-white">
      {/* <span className="spotlight z-0 absolute -top-10 -translate-y-[20%] right-[50%] translate-x-[50%] w-[50%]"></span> */}
      <Hero />
      <About />
      <Projects />
      <Contacts/>
    </div>
  );
}

export default HomePage