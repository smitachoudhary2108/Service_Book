 // 📁 src/components/Navbar.jsx
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="w-full bg-white shadow-sm p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-indigo-700">Dashboard</h2>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">
          <p>{user?.name}</p>
          <p className="text-xs text-gray-400">{user?.email}</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 uppercase">
          {user?.name?.charAt(0) || "U"}
        </div>
      </div>
    </header>
  );
}
