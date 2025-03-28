import { useEffect } from "react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/ajjemnea", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        data-aos="zoom-in"
        name="Hire Me"
        className="max-w-screen-2xl  container mx-auto px-4 md:px-20 my-16 h-[600px]  "
      >
        <h1 className="text-xl text-[#006FDD] mb-4 md:ml-[150px] ">Hire Me</h1>
        <span className="md:ml-[150px]">Please send me message to Hire Me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/ajjemnea"
            // method="POST"
            className="bg-slate-200 w-96 px-8 py-6 mt-20 rounded-xl"
          >
            <h1 className="text-medium text-gray-700 mb-4">
              Send Your Message
            </h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700"> FullName</label>
              <input
                {...register("name", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-[#1cd679] focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-gray-700">
                  This field is required
                </p>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700"> Email</label>
              <input
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-[#1cd679] focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-gray-700">
                  This field is required
                </p>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message </label>
              <textarea
                {...register("message", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-[#1cd679] focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Type your message...."
              />
              {errors.message?.type === "required" && (
                <p role="alert" className="text-gray-700">
                  This field is required
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-lg px-3 py-2 hover:bg-white hover:text-black hover:outline-double  "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
