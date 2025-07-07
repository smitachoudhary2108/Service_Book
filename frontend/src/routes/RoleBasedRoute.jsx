import { Navigate } from "react-router-dom";

export function RoleBasedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/login" />;
  if (user.role !== role) return <Navigate to="/dashboard" />;
  return children;
}