 
import { useEffect, useState } from "react";
import {
  Mail,
  UserCircle,
  Wrench,
  MapPin,
  Clock,
  Phone,
  IndianRupee,
  User2,
} from "lucide-react";

export default function ServiceDetails({providerId}) {
  
  const [services, setServices] = useState([]);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const [servicesRes, providerRes] = await Promise.all([
          fetch(`http://localhost:5000/api/services/${providerId}`),
          fetch(`http://localhost:5000/api/users/${providerId}`),
        ]);

        const servicesData = await servicesRes.json();
        const providerData = await providerRes.json();

        setServices(servicesData);
        setProvider(providerData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchDetails();
  }, [providerId]);

  if (!provider)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  const getInitial = (name) => name?.charAt(0)?.toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Provider Card */}
        <div className="flex items-center bg-white p-6 rounded-xl shadow-sm mb-10">
          {/* Avatar */}
          {provider.imageUrl ? (
            <img
              src={provider.imageUrl}
              alt="Provider"
              className="w-16 h-16 rounded-full object-cover mr-6"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-white font-bold text-xl mr-6">
              {getInitial(provider.name)}
            </div>
          )}

          {/* Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <User2 size={20} className="text-blue-500" />
              {provider.name}
            </h2>
            <p className="text-gray-600 flex items-center gap-2 mt-1">
              <Mail size={16} className="text-gray-400" />
              {provider.email}
            </p>
            <p className="text-gray-500 capitalize mt-1">
              Role: <span className="font-medium text-gray-700">{provider.role}</span>
            </p>
          </div>
        </div>

        {/* Services */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Services Provided
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-indigo-600 mb-1">
                {service.title}
              </h4>
              <p className="flex items-center text-sm text-gray-500 mb-2">
                <Wrench size={16} className="mr-2" />
                {service.category}
              </p>
              <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                {service.description}
              </p>

              <div className="space-y-1 text-sm text-gray-600 mb-4">
                <p className="flex items-center">
                  <MapPin size={16} className="mr-2" /> {service.location}
                </p>
                <p className="flex items-center">
                  <Clock size={16} className="mr-2" /> {service.availableTime}
                </p>
                <p className="flex items-center">
                  <Phone size={16} className="mr-2" /> {service.mobile}
                </p>
                <p className="flex items-center">
                  <IndianRupee size={16} className="mr-2" /> {service.serviceCharge}
                </p>
              </div>

              <button className="w-full bg-indigo-500 text-white text-sm py-2 rounded-md hover:bg-indigo-600 transition">
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
