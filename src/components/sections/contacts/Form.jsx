"use client";

import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

import { CheckCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

   const notify = (message) =>
     toast(
       <div className="flex justify-center items-center space-x-4">
         <CheckCircleIcon className="text-green-800" />
         {message}
       </div>
     );

  const submit = async (data) => {
     const {firstName, lastName, email, phone, message} = data
     try {
       await emailjs.send(
         "service_wyjip68",
         "template_maydjcm",
         {
           from_name: `${
             firstName + " " + lastName
           }`,
           to_name: "Kayode",
           from_email: email,
           to_email: "dadavictory2000@gmail.com",
           from_phone: phone,
           message: message,
         },
         "De24VjMeTPpQFf0Yn"
       );
       notify("Your message has been sent.");
       reset()
     } catch (err) {
       console.log(err);
       notify("Something went wrong.");
     }
   };

  return (
    <form
      // initial={{ opacity: 0, x: "200px" }}
      // whileInView={{ opacity: 1, x: 0 }}
      // transition={{ duration: 1.5 }}
      onSubmit={handleSubmit(submit)}
      className="sm:w-[50%] bg-[#EFEFF1] dark:bg-[#0d1018]  rounded-xl p-8 space-y-8"
    >
      <h1 className="text-2xl font-semibold">
        Let's work <span className="text-text-blue">together!</span>
      </h1>
      <div>
        <div className="grid sm:grid-cols-auto-input gap-5">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            {...register("firstName", {
              required: "This Field is Required.",
            })}
            className="p-2 border border-[#5100FF] bg-transparent rounded focus:outline-none"
          />
          {errors.firstName && (
            <p className="text-red-500 font-light text-base">
              {errors.firstName.message}
            </p>
          )}
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            {...register("lastName", {
              required: "This Field is Required.",
            })}
            className="p-2 border border-[#5100FF] bg-transparent rounded focus:outline-none"
          />
          {errors.lastName && (
            <p className="text-red-500 font-light text-base">
              {errors.lastName.message}
            </p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            {...register("email", {
              required: "This Field is Required.",
            })}
            className="p-2 border border-[#5100FF] bg-transparent rounded focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 font-light text-base">
              {errors.email.message}
            </p>
          )}
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            {...register("phone", {
              required: "This Field is Required.",
            })}
            className="p-2 border border-[#5100FF] bg-transparent rounded focus:outline-none"
          />
          {errors.phone && (
            <p className="text-red-500 font-light text-base">
              {errors.phone.message}
            </p>
          )}
        </div>
        <textarea
          name="message"
          placeholder="Message"
          {...register("message", {
            required: "This Field is Required.",
          })}
          className="p-2 border border-[#5100FF] bg-transparent rounded focus:outline-none h-40 mt-5 w-full flex items-start justify-start"
        />
        {errors.message && (
          <p className="text-red-500 font-light text-base">
            {errors.message.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        className={`hover:bg-logo/70 mx-auto rounded-lg p-2 flex ${
          isSubmitting ? "bg-gray-300" : "bg-[#5100FF]"
        }`}
      >
        {isSubmitting ? <CircularProgress size={18}/> : "send now"}
      </Button>
    </form>
  );
};

export default Form;
