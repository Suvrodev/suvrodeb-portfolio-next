"use client";

import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  CheckCircle,
  Sparkles,
  Code,
  Globe,
  FolderOpen,
} from "lucide-react";
import { compressAndConvertToBase64 } from "@/components/utils/Functions/images/compressAndConvertToBase64";
import { useAddProjectMutation } from "@/redux/features/ProjectManagement/projectManagement";
import { loadingToast, okToast } from "@/components/utils/Toast/toast";
import { useAppSelector } from "@/redux/hooks";
import erToast from "@/components/utils/Toast/errorToast";

type TProjectForm = {
  name: string;
  liveurl: string;
  frontendrepo?: string;
  backendrepo?: string;
  image: string;
};

const AddProject = () => {
  const { user } = useAppSelector((state) => state.auth);
  console.log("User in add project: ", user);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [addProject, { isLoading }] = useAddProjectMutation();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TProjectForm>();

  // 🖼️ Handle image upload with compression + base64
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    try {
      const base64String = await compressAndConvertToBase64(file);
      setValue("image", base64String, { shouldValidate: true });
      setPreview(base64String);
      setImageError(null); // ✅ clear error
    } catch (error) {
      console.error("Image compression failed:", error);
      alert("Failed to process image. Please try again.");
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  // 🚀 Submit handler
  const onSubmit: SubmitHandler<TProjectForm> = async (data) => {
    if (!preview) {
      setImageError("Project image is required");
      return;
    }

    if (!user) {
      erToast("Hey bro you are not admin");
    }

    loadingToast("Adding Project");
    const res = await addProject(data).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      okToast("Project Added  Succesfully");
    }
  };

  const inputStyle =
    "w-full px-4 py-3 bg-slate-900/70 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all duration-200";

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-8 sm:py-10 px-4 sm:px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // ⬇️ width slightly reduced for better aesthetics
        className="w-full max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8 md:p-10"
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
            Add Your Project
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Share your creative work with the world 🌍
          </p>
        </div>

        {/* ✅ Success Message */}
        <AnimatePresence>
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 sm:mb-8 p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center justify-center gap-2 text-green-400 text-sm sm:text-base"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Project added successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🖼️ Image Upload */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={triggerFileInput}
          className={`relative mb-8 sm:mb-10 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 ${
            preview
              ? "border-indigo-400/60 bg-indigo-500/5"
              : "border-slate-600 hover:border-indigo-400/60 hover:bg-slate-800/40"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          {preview ? (
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-indigo-400/20 bg-slate-900/50 shadow-md max-w-2xl mx-auto">
              <Image
                src={preview}
                alt="Project Preview"
                fill
                className="object-contain p-2"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-all rounded-2xl">
                <p className="text-indigo-300 font-medium text-sm sm:text-base">
                  Click to change image
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 sm:py-14">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-500/15 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Upload className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-300" />
              </div>
              <p className="text-slate-300 font-medium text-sm sm:text-base">
                Upload project image
              </p>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                PNG, JPG, or WEBP (max 5MB)
              </p>
            </div>
          )}
        </motion.div>

        {imageError && (
          <p className="text-red-400 text-center text-sm mb-6 -mt-4">
            {imageError}
          </p>
        )}

        {/* 🧾 Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Project Name */}
            <div>
              <label className="flex items-center gap-2 text-sm sm:text-base text-slate-300 mb-1">
                <FolderOpen className="w-4 h-4 text-indigo-300" /> Project Name
              </label>
              <input
                value={"My Project"}
                type="text"
                {...register("name", { required: "Project name is required" })}
                placeholder="My Portfolio"
                className={inputStyle}
              />
              {errors.name && (
                <p className="text-xs sm:text-sm text-red-400 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Live URL */}
            <div>
              <label className="flex items-center gap-2 text-sm sm:text-base text-slate-300 mb-1">
                <Globe className="w-4 h-4 text-green-300" /> Live URL
              </label>
              <input
                type="url"
                value="https://www.youtube.com/watch?v=lBRoAgAiZaI&list=RDlBRoAgAiZaI&index=2"
                {...register("liveurl", {
                  required: "Live URL is required",
                })}
                placeholder="https://yourproject.com"
                className={inputStyle}
              />
              {errors.liveurl && (
                <p className="text-xs sm:text-sm text-red-400 mt-1">
                  {errors.liveurl.message}
                </p>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Frontend Repo */}
            <div>
              <label className="flex items-center gap-2 text-sm sm:text-base text-slate-300 mb-1">
                <Code className="w-4 h-4 text-blue-300" /> Frontend Repo
              </label>
              <input
                type="url"
                value="https://www.youtube.com/watch?v=lBRoAgAiZaI&list=RDlBRoAgAiZaI&index=2"
                {...register("frontendrepo")}
                placeholder="https://github.com/..."
                className={inputStyle}
              />
            </div>

            {/* Backend Repo */}
            <div>
              <label className="flex items-center gap-2 text-sm sm:text-base text-slate-300 mb-1">
                <Code className="w-4 h-4 text-orange-300" /> Backend Repo
              </label>
              <input
                type="url"
                value="https://www.youtube.com/watch?v=lBRoAgAiZaI&list=RDlBRoAgAiZaI&index=2"
                {...register("backendrepo")}
                placeholder="https://github.com/..."
                className={inputStyle}
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`col-span-1 md:col-span-2 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl text-white transition-all duration-300 ${
              isLoading
                ? "bg-indigo-600/50 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/30"
            }`}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 mx-auto border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" /> Add Project
              </span>
            )}
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-slate-500 text-xs sm:text-sm mt-8">
          Your project will be reviewed before publishing ✨
        </p>
      </motion.div>
    </div>
  );
};

export default AddProject;
