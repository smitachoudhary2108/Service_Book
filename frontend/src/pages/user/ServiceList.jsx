 // 📁 src/pages/user/ServiceList.jsx
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  MapPin,
  Clock,
  Phone,
  BadgeIndianRupee,
  Wrench,
  CalendarPlus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/services");
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch");
        setServices(data);
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchServices();
  }, []);


  const handleClick = (providerId) => {
    navigate(`/services/${providerId}`)
  }


  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Available Services</h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.length === 0 && (
          <p className="col-span-full text-center text-gray-600">No services available yet.</p>
        )}

        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Wrench className="text-indigo-600" size={20} />
                {service.title}
              </h3>
              <span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full capitalize">
                {service.category}
              </span>
            </div>

            <p className="text-gray-600 mb-3">{service.description}</p>

            <ul className="text-sm text-gray-500 space-y-1">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-indigo-600" />
                {service.location}
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-indigo-600" />
                {service.availableTime}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-indigo-600" />
                {service.mobile}
              </li>
              <li className="flex items-center gap-2">
                <BadgeIndianRupee size={16} className="text-indigo-600" />
                ₹{service.serviceCharge}
              </li>
            </ul>

            <button
              className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center justify-center gap-2"
              onClick={() => handleClick(service.providerId)}
            >
              <CalendarPlus size={18} />
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
