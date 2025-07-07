import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    if (!data.email || !data.password || !data.role) {
      toast.error("Please fill all fields");
      return;
    }
    login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 px-4">
      <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              {...register("role")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="provider">Provider</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-400 hover:bg-blue-200 text-white rounded-lg font-semibold shadow-md transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm mt-6 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-400 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
