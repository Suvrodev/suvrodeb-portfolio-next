// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const AdminDashboardPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // Load hole automatically redirect
//     router.replace("/parent-dashboard/my-profile");
//   }, [router]);

//   return null; // kono content dekhabo na karon redirect hobe
// };

// export default AdminDashboardPage;

"use client";

const AdminDashboardPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard page.</p>
    </div>
  );
};

export default AdminDashboardPage;
