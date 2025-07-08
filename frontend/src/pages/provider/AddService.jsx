 import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  Wrench,
  FileText,
  MapPin,
  Clock,
  Phone,
  IndianRupee,
  Heading,
} from "lucide-react";

export default function AddService() {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  // const navigate = useNavigate();
    console.log("User data:", user);
 const onSubmit = async (form) => {
  const formWithProvider = {
      providerId: user?.id, // 👈 safely attach providerId
    ...form,
  
  };

  console.log("Submitting form data:", formWithProvider);

  try {
    const res = await fetch("http://localhost:5000/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formWithProvider), // ✅ send combined data
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message);
    toast.success("Service added successfully");
    register();
  } catch (err) {
    toast.error(err.message || "Something went wrong");
  }
};



  return (
    <div className="min-h-screen bg-blue-50 flex px-4">
      <div className="bg-white w-full p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">Add New Service</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <Heading size={16} /> Title
            </label>
            <input
              {...register("title")}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Service Title"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <Wrench size={16} /> Category
            </label>
            <select
              {...register("category")}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            >
              <option value="">Select</option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="mechanic">Mechanic</option>
            </select>
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <FileText size={16} /> Description
            </label>
            <textarea
              {...register("description")}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Describe the service"
              rows={3}
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <MapPin size={16} /> Location
            </label>
            <input
              {...register("location")}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="City / Area"
              required
            />
          </div>

          {/* Available Time */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <Clock size={16} /> Available Time
            </label>
            <input
              {...register("availableTime")}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="e.g. 10am - 6pm"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <Phone size={16} /> Mobile No.
            </label>
            <input
              {...register("mobile")}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter contact number"
              required
            />
          </div>

          {/* Charge */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
              <IndianRupee size={16} /> Service Charge (₹)
            </label>
            <input
              {...register("serviceCharge")}
              type="number"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-400 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-200 transition"
            >
              Submit Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
