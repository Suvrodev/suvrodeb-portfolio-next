"use client";

import { handleRevalidate } from "@/components/actions/apiActions/handleRevalidate";
import { TUser } from "@/components/types/globalTypes";
import { loadingToast, okToast } from "@/components/utils/Toast/toast";
import { useDeleteUserMutation } from "@/redux/features/AuthManagement/authApi";
import { FaTrash } from "react-icons/fa";

interface IProps {
  admin: TUser;
  index: number;
}
const UserTable = ({ admin, index }: IProps) => {
  const [deleteUser] = useDeleteUserMutation();
  // const [updateAdmin] = useUpdateAdminMutation();
  const handleDeleteUser = async (email: string) => {
    console.log("email: ", email);
    loadingToast("Deleting....");
    const res = await deleteUser(email).unwrap();
    console.log("Delete Res: ", res);
    if (res?.success) {
      okToast(res?.data?.message);
      handleRevalidate();
    }
  };

  // const handleRole = async (email: string, role: string) => {
  //   const newRole = role === "admin" ? "user" : "admin";

  //   const updateData = {
  //     role: newRole,
  //   };

  //   const res = await updateAdmin({ email, updateData }).unwrap();
  //   console.log("Res: ", res);
  //   if (res?.success) {
  //     toast.success(res?.message, { id: sonarId });
  //     handleLoad();
  //   }
  // };

  // const handleBlock = async (email: string, isBlocked: boolean) => {
  //   const newIsBlocked = isBlocked ? false : true;
  //   const updateData = {
  //     isBlocked: newIsBlocked,
  //   };

  //   const res = await updateAdmin({ email, updateData }).unwrap();
  //   console.log("Res: ", res);
  //   if (res?.success) {
  //     toast.success(res?.message, { id: sonarId });
  //     handleLoad();
  //   }
  // };
  return (
    <tr
      key={admin._id}
      className="text-center hover:bg-green-400 dark:hover:bg-gray-800 transition"
    >
      <td className="px-4 py-2 border border-gray-700">{index + 1}</td>
      <td className="px-4 py-2 border border-gray-700">{admin.name}</td>
      <td className="px-4 py-2 border border-gray-700">{admin.email}</td>
      <td className="px-4 py-2 border border-gray-700 ">
        <button
          className={`mx-auto w-[80%] flex justify-center items-center gap-2 px-2 py-1 text-white rounded-md  shadow-gray-700 shadow-md hover:shadow-lg transition 
                               ${
                                 admin.role === "admin"
                                   ? " bg-green-500 hover:bg-green-600"
                                   : "bg-red-600 hover:bg-red-700 "
                               }`}
          // onClick={() => handleRole(admin?.email, admin?.role)}
        >
          {admin?.role}
        </button>
      </td>

      {/* Block */}
      <td className="px-4 py-2 border border-gray-700 flex justify-center">
        <button
          className={`flex items-center gap-2 px-4 py-1 text-white rounded-full   shadow-gray-700 shadow-md hover:shadow-lg transition 
                               ${
                                 admin.isBlocked
                                   ? "bg-red-600 hover:bg-red-700"
                                   : "bg-green-500 hover:bg-green-600 "
                               }`}
          // onClick={() => handleBlock(admin?.email, admin?.isBlocked)}
        >
          {admin?.isBlocked?.toString()}
        </button>
      </td>

      {/* Delete */}
      <td className="px-4 py-2 border border-gray-700  ">
        <div className="flex justify-center">
          <button
            className={`flex items-center gap-2 px-4 py-1 text-white rounded-full  shadow-gray-700 shadow-md hover:shadow-lg transition 
                               ${
                                 admin.role === "admin"
                                   ? "bg-red-600 hover:bg-red-700"
                                   : "bg-yellow-500 hover:bg-yellow-600 text-black"
                               }`}
            onClick={() => handleDeleteUser(admin?.email)}
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserTable;
