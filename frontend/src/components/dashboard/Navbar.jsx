import { useAuth } from "../../context/AuthContext";

export default function Navbar({ user }) {
  const { logout } = useAuth();

  return (
    <div className="bg-white px-6 py-4 flex justify-between items-center border-b shadow">
      <h2 className="text-xl font-semibold text-gray-700 capitalize">
        {user.role} Dashboard
      </h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">{user.name}</span>
        <button
          onClick={logout}
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
