 import { useBookings } from "../../hooks/useBookings";
import { useState } from "react";

export function BookingTable() {
  const { data, isLoading, error } = useBookings();
  const [query, setQuery] = useState("");

  const filtered = data?.filter((b) =>
    b.userName.toLowerCase().includes(query.toLowerCase()) ||
    b.serviceTitle.toLowerCase().includes(query.toLowerCase())
  );

  if (isLoading) return <p>Loading bookings...</p>;
  if (error) return <p>Error fetching bookings</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search bookings..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input mb-4"
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Service</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered?.map((b) => (
            <tr key={b._id}>
              <td className="border px-4 py-2">{b.userName}</td>
              <td className="border px-4 py-2">{b.serviceTitle}</td>
              <td className="border px-4 py-2">{b.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
