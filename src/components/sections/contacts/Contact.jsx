import { Toaster } from "react-hot-toast";
import Form from "./Form";
import Image from "next/image";
import { contact } from "@/utils/constants";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="p-6 sm:p-10 sm:flex sm:space-x-10 space-y-7 sm:space-y-0 py-10"
    >
      <Toaster />
      <div className="sm:w-[50%] space-y-5">
        <div
          // initial={{ opacity: 0, x: "-100px" }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1.5 }}
          className="p-4 bg-[#EFEFF1] dark:bg-[#0d1018]  rounded-xl"
        >
          <h1 className="text-2xl font-semibold tracking-wide mb-4">
            Let's <span className="text-[#5100FF]">create something</span>{" "}
            together!
          </h1>
          <h1 className="mb-4">
            Feel free to reach out for projects, collaboration or web
            development via the form or email.
          </h1>
        </div>
        <div
          // initial={{ opacity: 0, x: "-100px" }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1.5 }}
          className="p-5 sm:p-10 space-y-3 relative rounded-xl overflow-hidden h-96"
        >
          <Image
            src="/images/bg2.png"
            alt="background image"
            fill
          />
          {contact.map((info, index) => (
            <div
              key={index}
              className=" bg-[#EFEFF1] dark:bg-[#0d1018] px-4 py-2 space-x-2 w-fit rounded-xl relative"
            >
              <div>
                <h1 className="text-lg font-semibold capitalize tracking-wide">
                  {info.name}
                </h1>
                <h1 className="text-gray-500 mt-1">{info.handle}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Form />
    </section>
  );
};

export default Contacts;
