"use client";
import "./ProjectBox.css";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { TProject } from "@/components/types/globalTypes";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { Pencil, Trash2, Globe, Server, GithubIcon } from "lucide-react";

// Utils
import goLink from "@/components/utils/Functions/goLink";
import { loadingToast, okToast } from "@/components/utils/Toast/toast";
import { useDeleteProjectMutation } from "@/redux/features/ProjectManagement/projectManagement";
import { handleRevalidate } from "@/components/actions/apiActions/handleRevalidate";

interface IProps {
  project: TProject;
  admin?: boolean;
}

const ProjectBox = ({ project, admin }: IProps) => {
  const { _id, liveurl, image, name, frontendrepo, backendrepo } = project;
  const [deleteProject] = useDeleteProjectMutation();
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleDelete = async (id: string) => {
    loadingToast("Deleting...");
    const res = await deleteProject(id).unwrap();
    if (res?.status) {
      okToast(res?.message);
      handleRevalidate();
    }
  };

  const handleUpdate = (_id: string) => {
    router.push(`/admin-dashboard/update-project/${_id}`);
  };

  return (
    <div
      data-aos="fade-up"
      className="relative rounded-xl  border border-gray-300 shadow-lg bg-white/60 backdrop-blur-md hover:shadow-2xl transition-all duration-300 group"
    >
      {/* --- Admin Buttons --- */}
      {admin && (
        <div className="absolute top-3 right-3 flex gap-2 z-20">
          <button
            className="p-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-md hover:scale-110 hover:shadow-lg transition"
            onClick={() => handleUpdate(_id)}
            title="Update Project"
          >
            <Pencil size={18} />
          </button>
          <button
            className="p-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md hover:scale-110 hover:shadow-lg transition"
            onClick={() => handleDelete(_id)}
            title="Delete Project"
          >
            <Trash2 size={18} />
          </button>
        </div>
      )}

      {/* --- Project Image --- */}
      <div className="relative w-full h-60 overflow-hidden rounded-xl border border-gray-200 cursor-pointer">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover  transition-transform duration-[1500ms] ease-linear group-hover:scale-110 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>

      {/* --- Project Info --- */}
      <div className=" text-center py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition">
          {name}
        </h2>

        {/* --- Buttons Section --- */}
        <div className="flex justify-center gap-2 mt-3">
          {/* Live Button */}
          <button
            onClick={() => goLink(liveurl)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Globe size={18} />
            Live
          </button>

          {/* Client Repo */}
          <button
            onClick={() => goLink(frontendrepo)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <GithubIcon size={18} />
            Client
          </button>

          {/* Server Repo */}
          <button
            onClick={() => goLink(backendrepo)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Server size={18} />
            Server
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
