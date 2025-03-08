"use client";

import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

import { CheckCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";
import { motion } from 'framer-motion';

const Form = ({containerVariants, itemVariants}) => {
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
    <motion.form
      variants={containerVariants}
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
          <motion.input
            variants={itemVariants}
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
          <motion.input
            variants={itemVariants}
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
          <motion.input
            variants={itemVariants}
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
          <motion.input
            variants={itemVariants}
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
        <motion.textarea
          variants={itemVariants}
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
      <motion.Button
        variants={itemVariants}
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        className={`hover:bg-logo/70 mx-auto rounded-lg p-2 flex ${
          isSubmitting ? "bg-gray-300" : "bg-[#5100FF]"
        }`}
      >
        {isSubmitting ? <CircularProgress size={18} /> : "send now"}
      </motion.Button>
    </motion.form>
  );
};

export default Form;
