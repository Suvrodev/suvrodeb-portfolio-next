import UserTable from "@/components/modules/AdminDashboard/AllUser/UserTable/UserTable";
import { TUser } from "@/components/types/globalTypes";
import myConfig from "@/components/utils/configFile/myConfig";
import React from "react";

const AllUserPage = async () => {
  const res = await fetch(`${myConfig.baseApi}/user`, {
    next: {
      // revalidate: Number(myConfig.revalidateTime),
      tags: ["user"],
    },
  });
  const data = await res.json();

  const admins = data?.data;
  console.log("Admins: ", admins);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Admins</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-700">
          <thead className="">
            <tr>
              <th className="px-4 py-2 border border-gray-700">#</th>
              <th className="px-4 py-2 border border-gray-700">Name</th>
              <th className="px-4 py-2 border border-gray-700">Email</th>
              <th className="px-4 py-2 border border-gray-700">Role</th>
              <th className="px-4 py-2 border border-gray-700">Block</th>
              <th className="px-4 py-2 border border-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {admins?.map((admin: TUser, index: number) => (
              <UserTable key={index} admin={admin} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUserPage;
