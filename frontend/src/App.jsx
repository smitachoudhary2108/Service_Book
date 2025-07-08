 import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";




// Protected Pages
import Dashboard from "./pages/Dashboard";


// Provider Pages
import AddService from "./pages/provider/AddService";




// User Pages
import ServiceList from "./pages/user/ServiceList";
import ParticularService from "./pages/user/ParticularService";

// Layout
import DashboardLayout from "./components/layouts/DashboardLayout";

// Context
import { useAuth } from "./context/AuthContext";


// Private Route Wrapper
function PrivateRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default function App() {
  return (
    <>
      <Routes>
        {/* 🔓 Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 Protected Routes inside Layout */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />

          <Route
            path="add-service"
            element={
              <PrivateRoute allowedRoles={["provider"]}>
                <AddService />
              </PrivateRoute>
            }
          />

          <Route
            path="services"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <ServiceList />
              </PrivateRoute>
            }
          />
           <Route
            path="services/:providerId"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <ParticularService />
              </PrivateRoute>
            }
          />
        </Route>

        {/* Catch-all → redirect to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
