"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AdminRegistration from "./AdminRegistration";
import { useLoginMutation } from "@/redux/features/AuthManagement/authApi";
import { loadingToast, okToast } from "@/components/utils/Toast/toast";
import { cookiesAndStateAction } from "@/components/actions/authActions/CookiesAndStateAction/CookiesAndStateAction";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";

interface IFormInput {
  email: string;
  password: string;
}

const AdminLogin = () => {
  const [doLogin, { isLoading }] = useLoginMutation();
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const loginData = {
      email: data?.email,
      password: data?.password,
    };
    console.log("Login Data: ", loginData);
    loadingToast("Logining......");

    const res = await doLogin(loginData).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      okToast("Login Successfully");
      const accessToken = res?.data?.accessToken;
      await cookiesAndStateAction(accessToken, dispatch);
      reset();
      router.push("/admin-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2 md:p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden border border-gray-200 transition-all duration-500 hover:shadow-xl">
        {/* LEFT SIDE */}
        <div
          className={`w-full md:w-1/2 p-2 md:p-12 flex flex-col justify-center transition-all duration-700 ${
            isSignUpActive
              ? "bg-gray-50"
              : "bg-gradient-to-br from-blue-50 to-gray-100"
          }`}
        >
          {isSignUpActive ? (
            <AdminRegistration setIsSignUpActive={setIsSignUpActive} />
          ) : (
            <div className="text-center space-y-6 animate-fade-in ">
              <h2 className="text-4xl font-bold text-gray-800">
                Welcome to Your Journey
              </h2>
              <p className="text-gray-600 text-lg">
                Create an account to unlock a world of possibilities.
              </p>
              <button
                onClick={() => setIsSignUpActive(true)}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 md:flex items-center justify-center gap-2 group"
              >
                <span>Create Account</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-center transition-all duration-700 ${
            isSignUpActive
              ? "bg-gradient-to-br from-blue-50 to-gray-100"
              : "bg-gray-50"
          }`}
        >
          {isSignUpActive ? (
            <div className="text-center space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800">Welcome Back</h2>
              <p className="text-gray-600 text-lg">
                Sign in to continue your journey.
              </p>
              <button
                onClick={() => setIsSignUpActive(false)}
                className="px-6 py-3 md:px-8 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 md:flex items-center justify-center gap-2 group"
              >
                <span className="text-center">Sign In</span>
                <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </button>
            </div>
          ) : (
            <div className="bg-white p-2 md:p-8 rounded-lg shadow-md animate-slide-up">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Sign In
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block font-medium text-gray-700 mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format",
                      },
                    })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <label className="block font-medium text-gray-700 mb-2= text-sm">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters required",
                      },
                    })}
                    className="w-full px-4 py-2  rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-blue-600"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 rounded-lg font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg transform flex items-center justify-center gap-2 group ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-1"
                  }`}
                >
                  <span>{isLoading ? "Logging in..." : "Sign In"}</span>
                  {!isLoading && (
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                  )}
                </button>

                {/* <div className="text-right">
                  <Link
                    href="/admin-forget-password"
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Forgot password?
                  </Link>
                </div> */}
              </form>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
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
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;
