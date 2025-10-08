"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRegistrationMutation } from "@/redux/features/AuthManagement/authApi";
import { loadingToast, okToast } from "@/components/utils/svg/Toast/toast";

interface IProps {
  setIsSignUpActive: (value: boolean) => void;
}

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const AdminRegistration = ({ setIsSignUpActive }: IProps) => {
  const [registration, { isLoading, isError }] = useRegistrationMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const password = watch("password");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const userData = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
    };

    loadingToast("Registrationing......");
    const res = await registration(userData).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      okToast("Registration done");
      reset(); // clear the form
      setTimeout(() => setIsSignUpActive(false), 5000); // go back to login page
    }
    if (isError) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="p-2 md:p-8 bg-white rounded-lg shadow-md animate-slide-up">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Admin Registration
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters required" },
            })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-blue-600"
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs mt-0">{errors.password.message}</p>
        )}

        {/* Confirm Password */}
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <div className="relative flex items-center">
          <input
            type={showPasswordConfirm ? "text" : "password"}
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <div
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-blue-600"
          >
            {showPasswordConfirm ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-0">
            {errors.confirmPassword.message}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 rounded-lg font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg transform flex items-center justify-center gap-2 group ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-1"
          }`}
        >
          <span>{isLoading ? "Registering..." : "Register"}</span>
        </button>
      </form>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdminRegistration;
