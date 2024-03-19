"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:saikrishnaamakam@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`;
  };

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px]">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold text-white/70">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">+91-8999701509</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">saikrishnaamakam@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="rounded-md bg-[#F7AB0A] px-10 py-5 text-lg font-bold text-black"
          >
            Send an email
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
