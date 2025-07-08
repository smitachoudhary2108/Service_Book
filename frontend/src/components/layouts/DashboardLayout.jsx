 // 📁 src/layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import Navbar from "../dashboard/Navbar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 overflow-y-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
