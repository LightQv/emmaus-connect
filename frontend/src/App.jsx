import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      {/* <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} /> */}

      {/* Private routes */}
      {/* Admin routes */}
      {/* <Route element={<RequireAuth allowedRoles="admin" />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route> */}
      {/* User routes */}
      {/* <Route element={<RequireAuth allowedRoles="user" />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route> */}
    </Routes>
  );
}

export default App;
