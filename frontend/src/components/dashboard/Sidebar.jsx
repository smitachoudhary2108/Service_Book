 // 📁 src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LayoutDashboard, PlusCircle, Wrench, LogOut } from "lucide-react";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-indigo-100 transition ${
      location.pathname === path ? "bg-indigo-100 font-semibold" : "text-gray-700"
    }`;

  const commonLinks = [{ label: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" }];
    
   const adminLinks = [
    { label: "Add Service", icon: <PlusCircle />, path: "/add-service" },
     
  ];
  const providerLinks = [
    { label: "Add Service", icon: <PlusCircle />, path: "/add-service" },
     
  ];


  const userLinks = [
    { label: "Browse Services", icon: <Wrench />, path: "/services" },
    
  ];

  const roleLinks =
    user?.role === "provider"
      ? providerLinks
      : user?.role === "user"
      ? userLinks
      : user?.role === "admin"
      ? adminLinks : [];

  return (
    <aside className="w-64 h-full bg-white shadow-md p-4 hidden md:block">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-indigo-600">ServiceBook</h1>
        <p className="text-sm text-gray-500">Role: {user?.role}</p>
      </div>

      <nav className="flex flex-col gap-2">
        {[...commonLinks, ...roleLinks].map((link) => (
          <Link to={link.path} className={linkClass(link.path)} key={link.path}>
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        onClick={logout}
        className="mt-10 flex items-center gap-2 text-red-600 hover:text-red-700"
      >
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}
