import Sidebar from "../dashboard/Sidebar";
import Navbar from "../dashboard/Navbar";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role={user.role} />
      <div className="flex-1">
        <Navbar user={user} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
