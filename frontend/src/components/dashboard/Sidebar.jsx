 import { Link } from "react-router-dom";
import { LayoutDashboard, User, Wrench } from "lucide-react";

export default function Sidebar({ role }) {
  const commonLinks = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  ];

  const roleLinks = {
    user: [
      { to: "/services", label: "Browse Services", icon: Wrench },
      { to: "/my-bookings", label: "My Bookings", icon: User },
    ],
    provider: [
      { to: "/my-services", label: "My Services", icon: Wrench },
      { to: "/provider-bookings", label: "Bookings", icon: User },
    ],
    admin: [
      { to: "/all-users", label: "Users", icon: User },
      { to: "/all-bookings", label: "All Bookings", icon: Wrench },
    ],
  };

  const links = [...commonLinks, ...(roleLinks[role] || [])];

  return (
    <aside className="w-64 bg-white border-r shadow-md min-h-screen">
      <div className="p-6 font-bold text-xl text-indigo-600">ServiceBook</div>
      <nav className="space-y-2 px-4">
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            to={to}
            key={to}
            className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-indigo-100 text-gray-700"
          >
            <Icon size={18} /> {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
