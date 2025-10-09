"use client";
import { handleRevalidate } from "@/components/actions/apiActions/handleRevalidate";
import LoadResume from "@/components/modules/Shared/Resume/LoadResume/LoadResume";
import myConfig from "@/components/utils/configFile/myConfig";
import { loadingToast, okToast } from "@/components/utils/Toast/toast";
import { useUpdateResumeMutation } from "@/redux/features/Resume/resumeManagement";
import { useState } from "react";
import { useForm } from "react-hook-form";

type TResumeForm = {
  resume: string; // base64 string
};

const AdminResume = () => {
  const [updateResume] = useUpdateResumeMutation();

  const [fileName, setFileName] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TResumeForm>();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          // Ensure base64 is prefixed properly
          const base64 = reader.result.split(",")[1]; // Remove data:... part
          const pdfBase64WithPrefix = `data:application/pdf;base64,${base64}`;

          setValue("resume", pdfBase64WithPrefix, { shouldValidate: true });
          setFileName(file.name);
        } else {
          alert("Failed to read file. Please try again.");
        }
      };
      reader.onerror = (error) => {
        console.error("FileReader error:", error);
        alert("Error reading file. Please try again.");
      };
      reader.readAsDataURL(file); // This already includes the prefix
    }
  };

  const onSubmit = async (data: TResumeForm) => {
    console.log("Resume Base64:", data.resume);
    loadingToast("Updating Resume");
    const resumeId = myConfig.resume_ID;
    const res = await updateResume({
      _id: resumeId,
      updateData: { resume: data.resume },
    })?.unwrap();
    console.log("Res: ", res);
    if (res?.status) {
      okToast("Resume Update Successfully");
      handleRevalidate();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">📄 Upload Resume</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* File Input */}
        <div>
          <label className="block mb-1 font-semibold">
            Select Resume (PDF){" "}
            <span className="text-[10px]">(Max Size: 5 mb)</span>
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="block text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:bg-teal-500 file:text-white hover:file:bg-teal-600"
          />
          {fileName && (
            <p className="mt-2 text-green-400 text-sm">
              Selected File: {fileName}
            </p>
          )}
          <input
            type="hidden"
            {...register("resume", { required: "Resume is required" })}
          />
          {errors.resume && (
            <p className="text-red-400 text-sm mt-1">{errors.resume.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 rounded bg-teal-600 hover:bg-teal-700 font-semibold text-white"
        >
          Upload Resume
        </button>
      </form>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />
      <LoadResume />
    </div>
  );
};

export default AdminResume;
