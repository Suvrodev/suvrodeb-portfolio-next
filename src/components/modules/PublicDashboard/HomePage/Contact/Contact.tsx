"use client";
import { useSendMessageMutation } from "@/redux/features/Message/messageManagement";
import "./Contact.css";
import contactLottie from "@/app/assets/lottie/contact.json";
import Lottie from "lottie-react";
import React from "react";
import errotToast from "@/components/utils/svg/Toast/errorToast";
import { loadingToast, okToast } from "@/components/utils/svg/Toast/toast";
import { useForm } from "react-hook-form";

type FormValues = {
  user_name: string;
  user_email: string;
  message: string;
};

const Contact = () => {
  const [addMessage, { isLoading }] = useSendMessageMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const { user_email } = data;

    if (
      !(user_email.includes("@gmail.com") || user_email.includes("@yahoo.com"))
    ) {
      errotToast("Please provide a valid email (Gmail or Yahoo)");
      return;
    }

    loadingToast("Sending Message");

    const messageBody = {
      name: data?.user_name,
      email: data?.user_email,
      message: data?.message,
    };
    console.log("Message: ", messageBody);
    const res = await addMessage(messageBody).unwrap();

    if (res?.success) {
      okToast("Email sent successfully");
      reset();
    }
  };

  return (
    <div>
      <section className="mb-20">
        <div className="flex flex-col md:flex-row bg-[#192655] p-4 md:p-10 rounded-lg">
          {/* Left Side */}
          <div className="w-full md:w-1/2 relative">
            <h1 className="text-white md:text-4xl font-bold md:absolute top-0 left-0">
              Contact with Me
            </h1>
            <div className="h-full w-full flex flex-col items-center justify-center">
              <Lottie animationData={contactLottie} loop={true} />
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#333333] p-4 md:p-10 rounded-lg contactForm">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <input
                  type="text"
                  {...register("user_name", {
                    required: "Please provide your name",
                  })}
                  className="w-full bg-transparent p-5 myBorder shadow-md hover:shadow-xl pText"
                  placeholder="Name"
                />
                {errors.user_name && (
                  <p className="bg-red-600 text-[10px] font-semibold mt-1 py-1 px-2 rounded-md inline-block ">
                    <span className="text-white">
                      {errors.user_name.message}
                    </span>
                  </p>
                )}

                {/* Email */}
                <input
                  type="email"
                  {...register("user_email", {
                    required: "Please provide your email",

                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email format",
                    },
                    validate: (value) =>
                      value.includes("@gmail.com") ||
                      value.includes("@yahoo.com") ||
                      "Please provide a valid email (Gmail or Yahoo)",
                  })}
                  className="w-full bg-transparent p-5 myBorder mt-10 shadow-md hover:shadow-xl pText"
                  placeholder="Email"
                />

                {errors.user_email && (
                  <p className="bg-red-600 text-[10px] font-semibold mt-1 py-1 px-2 rounded-md inline-block ">
                    <span className="text-white">
                      {errors.user_email.message}
                    </span>
                  </p>
                )}

                {/* Message */}
                <textarea
                  {...register("message", {
                    required: "Please write your message",
                  })}
                  className="w-full bg-transparent p-5 h-60 textBorder mt-10 pText"
                  placeholder="Message"
                />

                {errors.message && (
                  <p className="bg-red-600 text-[10px] font-semibold mt-1 py-1 px-2 rounded-md inline-block ">
                    <span className="text-white">{errors.message.message}</span>
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`btn py-3 rounded-md text-white w-full md:w-[250px] mt-10 bg-[#192655] hover:bg-[#192655] border-0 shadow-md hover:shadow-xl ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
