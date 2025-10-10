"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  CheckCircle,
  PenTool,
  ImageIcon,
  BookOpen,
  FileText,
  Sparkles,
} from "lucide-react";
import { compressAndConvertToBase64 } from "@/components/utils/Functions/images/compressAndConvertToBase64";
import { loadingToast, okToast } from "@/components/utils/Toast/toast";
import { handleRevalidate } from "@/components/actions/apiActions/handleRevalidate";
import JoditTextEditor from "@/components/modules/A_Jodit/JoditTextEditor";
import { blogCategories } from "@/components/utils/Arrays/blogCategories";
import { useAddblogMutation } from "@/redux/features/BlogManagement/blogmanagement";

type TBlogForm = {
  title: string;
  content: string;
  image: string;
  category: string;
};

const AddBlog = () => {
  const [addBlog, { isLoading }] = useAddblogMutation();
  const [preview, setPreview] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const [contentError, setContentError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<TBlogForm>();

  // 🖼️ Handle image upload (base64)
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
      setImageError(null);
    } catch (error) {
      console.error("Image conversion failed:", error);
      alert("Failed to process image. Please try again.");
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  // 🚀 Submit
  const onSubmit: SubmitHandler<TBlogForm> = async (data) => {
    if (!preview) {
      setImageError("Blog image is required");
      return;
    }

    if (!data.content || data.content.trim() === "") {
      setContentError("Blog content is required");
      return;
    }

    loadingToast("Publishing Blog...");

    const res = await addBlog(data).unwrap();
    console.log("Res: ", res);

    if (res?.success) {
      okToast("Blog Added Successfully 🎉");
      setIsSuccess(true);
      reset();
      setPreview(null);
      handleRevalidate();
      setTimeout(() => setIsSuccess(false), 4000);
    }
  };

  const inputStyle =
    "w-full px-4 py-3 bg-slate-900/70 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all duration-200";

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl mx-auto bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-8 md:p-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <PenTool className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Add New Blog Post
          </h1>
          <p className="text-slate-400 text-sm">
            Share your thoughts with developers around the world 🌍
          </p>
        </div>

        {/* ✅ Success Message */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center justify-center gap-2 text-green-400"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Blog added successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🖼️ Image Upload */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={triggerFileInput}
          className={`relative mb-10 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 ${
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
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-indigo-400/20 bg-slate-900/50 shadow-md max-w-3xl mx-auto">
              <Image
                src={preview}
                alt="Blog Preview"
                fill
                className="object-contain p-2"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-all rounded-2xl">
                <p className="text-indigo-300 font-medium text-sm">
                  Click to change image
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-14 h-14 bg-indigo-500/15 rounded-xl flex items-center justify-center mb-3">
                <Upload className="w-7 h-7 text-indigo-300" />
              </div>
              <p className="text-slate-300 font-medium text-sm">
                Upload blog image
              </p>
              <p className="text-slate-500 text-xs mt-1">
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

        {/* 🧾 Blog Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Title */}
          <div>
            <label className="flex items-center gap-2 text-slate-300 mb-2">
              <BookOpen className="w-4 h-4 text-indigo-300" /> Blog Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              placeholder="Enter blog title..."
              className={inputStyle}
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="flex items-center gap-2 text-slate-300 mb-2">
              <FileText className="w-4 h-4 text-purple-300" /> Select Category
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className={inputStyle}
            >
              <option value="">-- Choose Category --</option>
              {blogCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-400 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Content (Jodit Editor) */}
          <div>
            <label className="flex items-center gap-2 text-slate-300 mb-3">
              <ImageIcon className="w-4 h-4 text-blue-300" /> Blog Content
            </label>
            <JoditTextEditor
              value={getValues("content") || ""}
              onChange={(val) => {
                setValue("content", val, { shouldValidate: true });
                if (val.trim() === "") {
                  setContentError("Blog content is required");
                } else {
                  setContentError(null);
                }
              }}
            />
            {contentError && (
              <p className="text-red-400 text-sm mt-2">{contentError}</p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 text-lg font-semibold rounded-xl text-white transition-all duration-300 ${
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
                <Sparkles className="w-5 h-5" /> Publish Blog
              </span>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddBlog;
